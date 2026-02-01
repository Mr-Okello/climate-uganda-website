import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/require-user";
import ReportsClient from "./ReportsClient";

export default async function ReportsPage() {
  await requireUser();

  const reports = await prisma.report.findMany({
    orderBy: { createdAt: "desc" }
  });

  const serialized = reports.map((report) => ({
    id: report.id,
    title: report.title,
    category: report.category,
    region: report.region,
    status: report.status,
    createdAt: report.createdAt.toISOString()
  }));

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Community reports
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Track local climate issues reported by the community.
          </p>
        </div>
        <Link
          href="/reports/new"
          className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Report a problem
        </Link>
      </div>
      <div className="mt-8">
        <ReportsClient initialReports={serialized} />
      </div>
    </section>
  );
}
