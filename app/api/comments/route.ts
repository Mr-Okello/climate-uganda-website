import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { postId, content } = body;

  if (!postId || !content || content.trim().length < 1) {
    return NextResponse.json(
      { error: "Post and content are required." },
      { status: 400 }
    );
  }

  if (content.length > 280) {
    return NextResponse.json(
      { error: "Comment must be 280 characters or less." },
      { status: 400 }
    );
  }

  const lastComment = await prisma.comment.findFirst({
    where: { authorId: session.user.id },
    orderBy: { createdAt: "desc" }
  });

  if (lastComment) {
    const secondsSince =
      (Date.now() - new Date(lastComment.createdAt).getTime()) / 1000;
    if (secondsSince < 20) {
      return NextResponse.json(
        { error: "Please wait a moment before commenting again." },
        { status: 429 }
      );
    }
  }

  const comment = await prisma.comment.create({
    data: {
      postId,
      authorId: session.user.id,
      content: content.trim()
    },
    include: {
      author: true
    }
  });

  return NextResponse.json({ comment });
}
