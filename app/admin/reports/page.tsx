import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/require-user";
import AdminReportsClient from "./AdminReportsClient";

export default async function AdminReportsPage() {
  const user = await requireUser();

  if (user.role !== "ADMIN") {
    redirect("/community");
  }

  const reports = await prisma.report.findMany({
    orderBy: { createdAt: "desc" }
  });

  const serialized = reports.map((report) => ({
    id: report.id,
    title: report.title,
    status: report.status,
    category: report.category,
    region: report.region,
    createdAt: report.createdAt.toISOString()
  }));

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">
        Admin review: reports
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Update report statuses as teams investigate and resolve issues.
      </p>
      <div className="mt-8">
        <AdminReportsClient initialReports={serialized} />
      </div>
    </section>
  );
}
