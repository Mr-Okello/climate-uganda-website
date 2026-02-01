"use client";

import { useState } from "react";
import Link from "next/link";
import { REGIONS } from "@/lib/constants";

interface Club {
  id: string;
  name: string;
  description: string;
  region: string;
  memberCount: number;
  isMember: boolean;
}

interface ClubsClientProps {
  initialClubs: Club[];
}

export default function ClubsClient({ initialClubs }: ClubsClientProps) {
  const [clubs, setClubs] = useState<Club[]>(initialClubs);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      description: String(formData.get("description") || ""),
      region: String(formData.get("region") || "")
    };

    setIsSubmitting(true);
    const response = await fetch("/api/clubs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setIsSubmitting(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not create club.");
      return;
    }

    const data = await response.json();
    const newClub = {
      id: data.club.id,
      name: data.club.name,
      description: data.club.description,
      region: data.club.region,
      memberCount: 1,
      isMember: true
    };
    setClubs([newClub, ...clubs]);
    event.currentTarget.reset();
  };

  const toggleMembership = async (clubId: string, isMember: boolean) => {
    const response = await fetch(`/api/clubs/${clubId}/membership`, {
      method: isMember ? "DELETE" : "POST"
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not update membership.");
      return;
    }

    setClubs(
      clubs.map((club) => {
        if (club.id !== clubId) return club;
        return {
          ...club,
          isMember: !isMember,
          memberCount: club.memberCount + (isMember ? -1 : 1)
        };
      })
    );
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-4">
        {clubs.map((club) => (
          <article
            key={club.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {club.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {club.region} · {club.memberCount} members
                </p>
              </div>
              <button
                type="button"
                onClick={() => toggleMembership(club.id, club.isMember)}
                className="rounded-full border border-brand-green px-3 py-1 text-xs font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
              >
                {club.isMember ? "Leave" : "Join"}
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-600">{club.description}</p>
            <Link
              href={`/clubs/${club.id}`}
              className="mt-3 inline-flex text-xs font-semibold text-brand-green"
            >
              View club →
            </Link>
          </article>
        ))}
        {clubs.length === 0 && (
          <p className="text-sm text-slate-600">
            No clubs yet. Create the first one!
          </p>
        )}
      </div>
      <div>
        <form
          onSubmit={handleCreate}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-slate-900">
            Start a club
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Invite students, teachers, and activists to collaborate.
          </p>
          <label className="mt-4 block text-sm font-medium text-slate-700">
            Club name
            <input
              name="name"
              required
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-slate-700">
            Region
            <select
              name="region"
              required
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
            >
              <option value="">Select region</option>
              {REGIONS.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-sm font-medium text-slate-700">
            Description
            <textarea
              name="description"
              rows={4}
              required
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
            />
          </label>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-70"
          >
            {isSubmitting ? "Creating..." : "Create club"}
          </button>
        </form>
      </div>
    </div>
  );
}
