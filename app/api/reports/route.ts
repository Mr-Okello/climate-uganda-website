import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { REPORT_CATEGORIES, REGIONS } from "@/lib/constants";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const {
    title,
    category,
    region,
    district,
    description,
    photoUrl,
    contact
  } = body;

  if (!title || !category || !region || !description) {
    return NextResponse.json(
      { error: "Title, category, region, and description are required." },
      { status: 400 }
    );
  }

  if (!REPORT_CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "Invalid category." }, { status: 400 });
  }

  if (!REGIONS.includes(region)) {
    return NextResponse.json({ error: "Invalid region." }, { status: 400 });
  }

  if (description.trim().length < 30) {
    return NextResponse.json(
      { error: "Description must be at least 30 characters." },
      { status: 400 }
    );
  }

  const report = await prisma.report.create({
    data: {
      title: title.trim(),
      category,
      region,
      district: district || null,
      description: contact
        ? `${description.trim()}\n\nContact: ${contact}`
        : description.trim(),
      photoUrl: photoUrl || null,
      createdById: session.user.id
    }
  });

  return NextResponse.json({ report });
}
