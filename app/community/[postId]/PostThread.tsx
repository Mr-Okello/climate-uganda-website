"use client";

import { useState } from "react";

interface Author {
  id: string;
  displayName: string;
  region: string;
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: Author;
}

interface PostThreadProps {
  postId: string;
  comments: Comment[];
  currentUserId: string;
  currentUserRole: string;
}

export default function PostThread({
  postId,
  comments,
  currentUserId,
  currentUserRole
}: PostThreadProps) {
  const [items, setItems] = useState<Comment[]>(comments);
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!content.trim()) {
      setError("Please write a comment.");
      return;
    }

    setIsSaving(true);
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId, content })
    });
    setIsSaving(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not add comment.");
      return;
    }

    const data = await response.json();
    setItems([data.comment, ...items]);
    setContent("");
  };

  const handleDelete = async (commentId: string) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not delete comment.");
      return;
    }

    setItems(items.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold text-slate-900">
          Add a comment
        </h2>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          maxLength={280}
          rows={3}
          className="mt-3 w-full rounded-xl border border-slate-200 px-3 py-2"
          placeholder="Reply with an idea or encouragement..."
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {content.length}/280 characters
          </span>
          <button
            type="submit"
            disabled={isSaving}
            className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-70"
          >
            {isSaving ? "Posting..." : "Comment"}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {items.map((comment) => {
          const canDelete =
            comment.author.id === currentUserId || currentUserRole === "ADMIN";
          return (
            <article
              key={comment.id}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {comment.author.displayName}
                  </p>
                  <p className="text-xs text-slate-500">
                    {comment.author.region} ·{" "}
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
                {canDelete && (
                  <button
                    type="button"
                    onClick={() => handleDelete(comment.id)}
                    className="text-xs font-semibold text-red-600"
                  >
                    Delete
                  </button>
                )}
              </div>
              <p className="mt-3 text-sm text-slate-700">
                {comment.content}
              </p>
            </article>
          );
        })}
        {items.length === 0 && (
          <p className="text-sm text-slate-600">
            No comments yet. Start the conversation.
          </p>
        )}
      </div>
    </div>
  );
}
