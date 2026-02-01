import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Password for demo users
  const password = await bcrypt.hash("password123", 10);

  // Admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@climateug.org" },
    update: {},
    create: {
      email: "admin@climateug.org",
      passwordHash: password,
      displayName: "Climate Admin",
      region: "Central",
      role: UserRole.ADMIN,
    },
  });

  // Normal user
  const user = await prisma.user.upsert({
    where: { email: "student@climateug.org" },
    update: {},
    create: {
      email: "student@climateug.org",
      passwordHash: password,
      displayName: "Student User",
      region: "Western",
      role: UserRole.USER,
    },
  });

  // Club
  const club = await prisma.club.create({
    data: {
      name: "Green Youth Mbarara",
      description: "A student-led environmental club promoting climate action.",
      region: "Western",
      ownerId: admin.id,
      members: {
        create: [
          { userId: admin.id },
          { userId: user.id },
        ],
      },
    },
  });

  // Post
  const post = await prisma.post.create({
    data: {
      content: "Climate change is already affecting rainfall patterns in Uganda.",
      region: "Western",
      authorId: user.id,
    },
  });

  // Comment
  await prisma.comment.create({
    data: {
      content: "Absolutely true. Farmers in my area are struggling.",
      postId: post.id,
      authorId: admin.id,
    },
  });

  // Report
  await prisma.report.create({
    data: {
      title: "Illegal waste burning",
      category: "Waste burning",
      region: "Western",
      district: "Mbarara",
      description: "Open burning of plastic waste near residential areas.",
      createdById: user.id,
    },
  });

  console.log("✅ Seeding completed successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
