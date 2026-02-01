import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { REGIONS } from "@/lib/constants";

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { displayName, region, district, avatarUrl } = body;

  if (!displayName || !region) {
    return NextResponse.json(
      { error: "Display name and region are required." },
      { status: 400 }
    );
  }

  if (!REGIONS.includes(region)) {
    return NextResponse.json({ error: "Invalid region." }, { status: 400 });
  }

  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      displayName: displayName.trim(),
      region,
      district: district || null,
      avatarUrl: avatarUrl || null
    }
  });

  return NextResponse.json({ user });
}
