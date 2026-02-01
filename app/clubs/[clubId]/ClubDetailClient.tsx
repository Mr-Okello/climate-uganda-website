"use client";

import { useState } from "react";

interface ClubDetailClientProps {
  clubId: string;
  isMember: boolean;
  memberCount: number;
}

export default function ClubDetailClient({
  clubId,
  isMember,
  memberCount
}: ClubDetailClientProps) {
  const [joined, setJoined] = useState(isMember);
  const [count, setCount] = useState(memberCount);
  const [error, setError] = useState<string | null>(null);

  const toggleMembership = async () => {
    setError(null);
    const response = await fetch(`/api/clubs/${clubId}/membership`, {
      method: joined ? "DELETE" : "POST"
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not update membership.");
      return;
    }

    setJoined(!joined);
    setCount(count + (joined ? -1 : 1));
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleMembership}
          className="rounded-full border border-brand-green px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
        >
          {joined ? "Leave club" : "Join club"}
        </button>
        <span className="text-sm text-slate-500">{count} members</span>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
