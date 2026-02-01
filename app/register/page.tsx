"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { REGIONS } from "@/lib/constants";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      displayName: String(formData.get("displayName") || ""),
      email: String(formData.get("email") || ""),
      password: String(formData.get("password") || ""),
      region: String(formData.get("region") || ""),
      district: String(formData.get("district") || "")
    };

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Registration failed.");
      setIsLoading(false);
      return;
    }

    const signInResult = await signIn("credentials", {
      email: payload.email,
      password: payload.password,
      redirect: false
    });

    setIsLoading(false);

    if (signInResult?.error) {
      router.push("/login");
      return;
    }

    router.push("/community");
  };

  return (
    <section className="mx-auto max-w-lg px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">Join the community</h1>
      <p className="mt-2 text-sm text-slate-600">
        Create your account to connect with climate leaders across Uganda.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <label className="block text-sm font-medium text-slate-700">
          Display name
          <input
            name="displayName"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Password
          <input
            name="password"
            type="password"
            minLength={8}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
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
        <label className="block text-sm font-medium text-slate-700">
          District (optional)
          <input
            name="district"
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-70"
        >
          {isLoading ? "Creating account..." : "Register"}
        </button>
        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link className="text-brand-green hover:underline" href="/login">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}
