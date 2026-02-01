"use client";

import { useState } from "react";
import { REGIONS } from "@/lib/constants";

interface ProfileFormProps {
  user: {
    displayName: string;
    region: string;
    district?: string | null;
    avatarUrl?: string | null;
  };
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      displayName: String(formData.get("displayName") || ""),
      region: String(formData.get("region") || ""),
      district: String(formData.get("district") || ""),
      avatarUrl: String(formData.get("avatarUrl") || "")
    };

    const response = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setIsSaving(false);

    if (!response.ok) {
      const data = await response.json();
      setStatus(data.error || "Could not update profile.");
      return;
    }

    setStatus("Profile updated.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <label className="block text-sm font-medium text-slate-700">
        Display name
        <input
          name="displayName"
          defaultValue={user.displayName}
          required
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
        />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Region
        <select
          name="region"
          defaultValue={user.region}
          required
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
        >
          {REGIONS.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-700">
        District (optional)
        <input
          name="district"
          defaultValue={user.district ?? ""}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
        />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Avatar URL (optional)
        <input
          name="avatarUrl"
          defaultValue={user.avatarUrl ?? ""}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
        />
      </label>
      {status && <p className="text-sm text-slate-600">{status}</p>}
      <button
        type="submit"
        disabled={isSaving}
        className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-70"
      >
        {isSaving ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}
