"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  useEffect(() => {
    signOut({ callbackUrl: "/" });
  }, []);

  return (
    <section className="mx-auto max-w-lg px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">
        Signing you out...
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Thanks for being part of the community.
      </p>
    </section>
  );
}
