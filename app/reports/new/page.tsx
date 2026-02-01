"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { REPORT_CATEGORIES, REGIONS } from "@/lib/constants";

export default function NewReportPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      title: String(formData.get("title") || ""),
      category: String(formData.get("category") || ""),
      region: String(formData.get("region") || ""),
      district: String(formData.get("district") || ""),
      description: String(formData.get("description") || ""),
      photoUrl: String(formData.get("photoUrl") || ""),
      contact: String(formData.get("contact") || "")
    };

    setIsSubmitting(true);
    const response = await fetch("/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setIsSubmitting(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not submit report.");
      return;
    }

    router.push("/reports");
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">
        Report a community problem
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Share details about flooding, waste burning, illegal logging, and other
        urgent issues.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <label className="block text-sm font-medium text-slate-700">
          Title
          <input
            name="title"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Category
          <select
            name="category"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          >
            <option value="">Select category</option>
            {REPORT_CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Region
          <select
            name="region"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          >
            <option value="">Select region</option>
            {REGIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          District (optional)
          <input
            name="district"
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Description (min 30 characters)
          <textarea
            name="description"
            minLength={30}
            required
            rows={5}
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Optional photo URL
          <input
            name="photoUrl"
            placeholder="https://example.com/photo.jpg"
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Contact preference (optional email or phone)
          <input
            name="contact"
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit report"}
        </button>
      </form>
    </section>
  );
}
