"use client";

import { useState } from "react";

interface AdminReport {
  id: string;
  title: string;
  status: string;
  category: string;
  region: string;
  createdAt: string;
}

interface AdminReportsClientProps {
  initialReports: AdminReport[];
}

const statuses = ["SUBMITTED", "IN_REVIEW", "RESOLVED", "REJECTED"];

export default function AdminReportsClient({
  initialReports
}: AdminReportsClientProps) {
  const [reports, setReports] = useState(initialReports);
  const [error, setError] = useState<string | null>(null);

  const updateStatus = async (reportId: string, status: string) => {
    setError(null);
    const response = await fetch(`/api/reports/${reportId}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Could not update status.");
      return;
    }

    setReports(
      reports.map((report) =>
        report.id === reportId ? { ...report, status } : report
      )
    );
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}
      {reports.map((report) => (
        <article
          key={report.id}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {report.title}
              </h3>
              <p className="text-xs text-slate-500">
                {report.category} · {report.region} ·{" "}
                {new Date(report.createdAt).toLocaleDateString()}
              </p>
            </div>
            <select
              value={report.status}
              onChange={(event) => updateStatus(report.id, event.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>
        </article>
      ))}
      {reports.length === 0 && (
        <p className="text-sm text-slate-600">No reports submitted yet.</p>
      )}
    </div>
  );
}
