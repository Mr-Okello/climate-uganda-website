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
  const { content, repostOfId } = body;

  if (!content || content.trim().length < 1) {
    return NextResponse.json(
      { error: "Post content is required." },
      { status: 400 }
    );
  }

  if (content.length > 280) {
    return NextResponse.json(
      { error: "Post must be 280 characters or less." },
      { status: 400 }
    );
  }

  const lastPost = await prisma.post.findFirst({
    where: { authorId: session.user.id },
    orderBy: { createdAt: "desc" }
  });

  if (lastPost) {
    const secondsSince =
      (Date.now() - new Date(lastPost.createdAt).getTime()) / 1000;
    if (secondsSince < 30) {
      return NextResponse.json(
        { error: "Please wait a moment before posting again." },
        { status: 429 }
      );
    }
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const post = await prisma.post.create({
    data: {
      authorId: user.id,
      content: content.trim(),
      region: user.region,
      repostOfId: repostOfId || null
    },
    include: {
      author: true,
      repostOf: {
        include: { author: true }
      },
      comments: { select: { id: true } }
    }
  });

  return NextResponse.json({
    post: {
      ...post,
      createdAt: post.createdAt.toISOString(),
      repostOf: post.repostOf
        ? {
            id: post.repostOf.id,
            content: post.repostOf.content,
            author: {
              id: post.repostOf.author.id,
              displayName: post.repostOf.author.displayName,
              region: post.repostOf.author.region
            }
          }
        : null,
      author: {
        id: post.author.id,
        displayName: post.author.displayName,
        region: post.author.region
      },
      comments: post.comments
    }
  });
}
