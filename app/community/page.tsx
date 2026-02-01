import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/require-user";
import CommunityFeed from "./CommunityFeed";

export default async function CommunityPage() {
  const user = await requireUser();

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: true,
      repostOf: {
        include: { author: true }
      },
      comments: true
    }
  });

  const serializedPosts = posts.map((post) => ({
    id: post.id,
    content: post.content,
    region: post.region,
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
    comments: post.comments.map((comment) => ({ id: comment.id }))
  }));

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">
          Community updates
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Share quick climate wins, questions, and collaboration opportunities.
        </p>
      </div>
      <CommunityFeed
        initialPosts={serializedPosts}
        currentUserId={user.id}
        currentUserRole={user.role}
      />
    </section>
  );
}
