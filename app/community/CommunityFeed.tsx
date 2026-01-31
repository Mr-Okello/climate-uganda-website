"use client";

import { useState } from "react";
import Link from "next/link";

interface Author {
  id: string;
  displayName: string;
  region: string;
}

interface Post {
  id: string;
  content: string;
  region: string;
  createdAt: string;
  author: Author;
  repostOf?: {
    id: string;
    author: Author;
    content: string;
  } | null;
  comments: { id: string }[];
}

interface CommunityFeedProps {
  initialPosts: Post[];
  currentUserId: string;
  currentUserRole: string;
}

export default function CommunityFeed({
  initialPosts,
  currentUserId,
  currentUserRole
}: CommunityFeedProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!content.trim()) {
      setError("Please write a short update.");
      return;
    }

    setIsPosting(true);
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });
    setIsPosting(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not post update.");
      return;
    }

    const data = await response.json();
    setPosts([data.post, ...posts]);
    setContent("");
  };

  const handleRepost = async (post: Post) => {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: post.content, repostOfId: post.id })
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not repost.");
      return;
    }

    const data = await response.json();
    setPosts([data.post, ...posts]);
  };

  const handleDelete = async (postId: string) => {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not delete post.");
      return;
    }

    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold text-slate-900">
          Share an update
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Max 280 characters. Keep it constructive and community-focused.
        </p>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          maxLength={280}
          rows={4}
          className="mt-4 w-full rounded-xl border border-slate-200 px-3 py-2"
          placeholder="We organized a clean-up at the river today..."
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {content.length}/280 characters
          </span>
          <button
            type="submit"
            disabled={isPosting}
            className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-70"
          >
            {isPosting ? "Posting..." : "Post update"}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {posts.map((post) => {
          const canDelete =
            post.author.id === currentUserId || currentUserRole === "ADMIN";
          return (
            <article
              key={post.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {post.author.displayName}
                  </p>
                  <p className="text-xs text-slate-500">
                    {post.region} · {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>
                {canDelete && (
                  <button
                    type="button"
                    onClick={() => handleDelete(post.id)}
                    className="text-xs font-semibold text-red-600"
                  >
                    Delete
                  </button>
                )}
              </div>
              {post.repostOf && (
                <div className="mt-3 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                  Reposted from {post.repostOf.author.displayName}
                </div>
              )}
              <p className="mt-4 whitespace-pre-line text-sm text-slate-700">
                {post.content}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <Link href={`/community/${post.id}`} className="hover:underline">
                  {post.comments.length} comments
                </Link>
                <button
                  type="button"
                  onClick={() => handleRepost(post)}
                  className="hover:text-brand-green"
                >
                  Repost
                </button>
              </div>
            </article>
          );
        })}
        {posts.length === 0 && (
          <p className="text-sm text-slate-600">
            No updates yet. Start the conversation.
          </p>
        )}
      </div>
    </div>
  );
}
