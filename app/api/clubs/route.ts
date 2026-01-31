import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { REGIONS } from "@/lib/constants";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { name, description, region } = body;

  if (!name || !description || !region) {
    return NextResponse.json(
      { error: "Name, description, and region are required." },
      { status: 400 }
    );
  }

  if (!REGIONS.includes(region)) {
    return NextResponse.json({ error: "Invalid region." }, { status: 400 });
  }

  const club = await prisma.club.create({
    data: {
      name: name.trim(),
      description: description.trim(),
      region,
      ownerId: session.user.id,
      members: {
        create: {
          userId: session.user.id,
          role: "ADMIN"
        }
      }
    }
  });

  return NextResponse.json({ club });
}
