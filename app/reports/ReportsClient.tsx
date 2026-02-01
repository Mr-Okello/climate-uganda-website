"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { REPORT_CATEGORIES, REGIONS } from "@/lib/constants";

interface ReportItem {
  id: string;
  title: string;
  category: string;
  region: string;
  status: string;
  createdAt: string;
}

interface ReportsClientProps {
  initialReports: ReportItem[];
}

export default function ReportsClient({ initialReports }: ReportsClientProps) {
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  const reports = useMemo(() => {
    return initialReports.filter((report) => {
      const categoryMatch = category ? report.category === category : true;
      const regionMatch = region ? report.region === region : true;
      return categoryMatch && regionMatch;
    });
  }, [category, region, initialReports]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <label className="text-sm text-slate-600">
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            <option value="">All</option>
            {REPORT_CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm text-slate-600">
          Region
          <select
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            <option value="">All</option>
            {REGIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => (
          <article
            key={report.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900">
                {report.title}
              </h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {report.status.replace("_", " ")}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              {report.category} · {report.region} ·{" "}
              {new Date(report.createdAt).toLocaleDateString()}
            </p>
            <Link
              href={`/reports/${report.id}`}
              className="mt-3 inline-flex text-xs font-semibold text-brand-green"
            >
              View report →
            </Link>
          </article>
        ))}
        {reports.length === 0 && (
          <p className="text-sm text-slate-600">No reports found.</p>
        )}
      </div>
    </div>
  );
}
