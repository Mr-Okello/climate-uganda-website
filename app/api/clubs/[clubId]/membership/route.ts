import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(
  _request: Request,
  { params }: { params: { clubId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const membership = await prisma.clubMembership.upsert({
    where: {
      clubId_userId: {
        clubId: params.clubId,
        userId: session.user.id
      }
    },
    update: {},
    create: {
      clubId: params.clubId,
      userId: session.user.id,
      role: "MEMBER"
    }
  });

  return NextResponse.json({ membership });
}

export async function DELETE(
  _request: Request,
  { params }: { params: { clubId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.clubMembership.deleteMany({
    where: {
      clubId: params.clubId,
      userId: session.user.id
    }
  });

  return NextResponse.json({ ok: true });
}
