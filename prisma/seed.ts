import { PrismaClient, Role, ReportStatus, ClubRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@climateug.org" },
    update: {},
    create: {
      email: "admin@climateug.org",
      passwordHash,
      displayName: "Admin",
      region: "Central",
      district: "Kampala",
      role: Role.ADMIN
    }
  });

  const user = await prisma.user.upsert({
    where: { email: "student@climateug.org" },
    update: {},
    create: {
      email: "student@climateug.org",
      passwordHash,
      displayName: "Amina",
      region: "Eastern",
      district: "Jinja"
    }
  });

  const club = await prisma.club.create({
    data: {
      name: "Green Schools Network",
      description: "Students collaborating on climate-smart projects.",
      region: "Central",
      ownerId: admin.id,
      members: {
        create: [
          { userId: admin.id, role: ClubRole.ADMIN },
          { userId: user.id, role: ClubRole.MEMBER }
        ]
      }
    }
  });

  const post = await prisma.post.create({
    data: {
      authorId: user.id,
      content: "We planted 20 trees near the school today!",
      region: user.region
    }
  });

  await prisma.post.create({
    data: {
      authorId: admin.id,
      content: "Reposting the student tree-planting update!",
      region: admin.region,
      repostOfId: post.id
    }
  });

  await prisma.comment.create({
    data: {
      postId: post.id,
      authorId: admin.id,
      content: "Amazing effort. Share photos if you can."
    }
  });

  await prisma.report.create({
    data: {
      title: "Blocked drainage near market",
      category: "Flooding",
      region: "Central",
      district: "Kampala",
      description:
        "The drainage channel is blocked with plastic waste. The area floods after every rainstorm.",
      status: ReportStatus.IN_REVIEW,
      createdById: admin.id,
      photoUrl: "https://example.com/sample-photo.jpg"
    }
  });

  await prisma.clubMembership.upsert({
    where: { clubId_userId: { clubId: club.id, userId: user.id } },
    update: {},
    create: {
      clubId: club.id,
      userId: user.id,
      role: ClubRole.MEMBER
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
