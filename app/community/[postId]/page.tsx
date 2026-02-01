import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/require-user";
import PostThread from "./PostThread";

export default async function PostDetailPage({
  params
}: {
  params: { postId: string };
}) {
  const user = await requireUser();

  const post = await prisma.post.findUnique({
    where: { id: params.postId },
    include: {
      author: true,
      repostOf: {
        include: { author: true }
      },
      comments: {
        include: { author: true },
        orderBy: { createdAt: "desc" }
      }
    }
  });

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-slate-600">Post not found.</p>
      </section>
    );
  }

  const serializedComments = post.comments.map((comment) => ({
    ...comment,
    createdAt: comment.createdAt.toISOString(),
    author: {
      id: comment.author.id,
      displayName: comment.author.displayName,
      region: comment.author.region
    }
  }));

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/community"
        className="text-sm font-semibold text-brand-green"
      >
        ← Back to community
      </Link>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {post.author.displayName}
            </p>
            <p className="text-xs text-slate-500">
              {post.region} · {post.createdAt.toLocaleString()}
            </p>
          </div>
        </div>
        {post.repostOf && (
          <div className="mt-3 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            Reposted from {post.repostOf.author.displayName}
          </div>
        )}
        <p className="mt-4 whitespace-pre-line text-sm text-slate-700">
          {post.content}
        </p>
      </div>
      <div className="mt-6">
        <PostThread
          postId={post.id}
          comments={serializedComments}
          currentUserId={user.id}
          currentUserRole={user.role}
        />
      </div>
    </section>
  );
}
