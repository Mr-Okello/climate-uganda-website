import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/require-user";

export default async function ReportDetailPage({
  params
}: {
  params: { reportId: string };
}) {
  await requireUser();

  const report = await prisma.report.findUnique({
    where: { id: params.reportId },
    include: { createdBy: true }
  });

  if (!report) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-slate-600">Report not found.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/reports" className="text-sm font-semibold text-brand-green">
        ← Back to reports
      </Link>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-2xl font-semibold text-slate-900">
            {report.title}
          </h1>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {report.status.replace("_", " ")}
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          {report.category} · {report.region}
          {report.district ? ` · ${report.district}` : ""}
        </p>
        <p className="mt-4 whitespace-pre-line text-sm text-slate-700">
          {report.description}
        </p>
        {report.photoUrl && (
          <a
            href={report.photoUrl}
            className="mt-4 inline-flex text-xs font-semibold text-brand-green"
          >
            View photo
          </a>
        )}
        <p className="mt-4 text-xs text-slate-500">
          Submitted by {report.createdBy.displayName} on{" "}
          {report.createdAt.toLocaleDateString()}
        </p>
      </div>
    </section>
  );
}
