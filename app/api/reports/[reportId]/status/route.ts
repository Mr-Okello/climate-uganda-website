import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const allowed = ["SUBMITTED", "IN_REVIEW", "RESOLVED", "REJECTED"];

export async function PATCH(
  request: Request,
  { params }: { params: { reportId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();
  const { status } = body;

  if (!allowed.includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const report = await prisma.report.update({
    where: { id: params.reportId },
    data: { status }
  });

  return NextResponse.json({ report });
}
