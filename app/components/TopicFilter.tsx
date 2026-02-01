"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface Topic {
  slug: string;
  title: string;
  summary: string;
}

interface FilterTag {
  id: string;
  label: string;
  keywords: string[];
}

const filterTags: FilterTag[] = [
  { id: "all", label: "All topics", keywords: [] },
  { id: "floods", label: "Floods", keywords: ["flood", "storm", "rain"] },
  { id: "drought", label: "Drought", keywords: ["drought", "dry", "water"] },
  { id: "health", label: "Health", keywords: ["health", "disease"] },
  { id: "energy", label: "Energy", keywords: ["energy", "power"] },
  { id: "nature", label: "Forests & nature", keywords: ["forest", "wetland", "biodiversity"] }
];

export default function TopicFilter({ topics }: { topics: Topic[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(filterTags[0].id);

  const filteredTopics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const tag = filterTags.find((item) => item.id === activeTag);

    return topics.filter((topic) => {
      const matchesQuery =
        !normalizedQuery ||
        topic.title.toLowerCase().includes(normalizedQuery) ||
        topic.summary.toLowerCase().includes(normalizedQuery);

      if (!tag || tag.id === "all") {
        return matchesQuery;
      }

      const matchesTag = tag.keywords.some((keyword) => {
        const normalizedKeyword = keyword.toLowerCase();
        return (
          topic.title.toLowerCase().includes(normalizedKeyword) ||
          topic.summary.toLowerCase().includes(normalizedKeyword)
        );
      });

      return matchesQuery && matchesTag;
    });
  }, [topics, query, activeTag]);

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-brand-dark">Find a topic</p>
          <p className="mt-1 text-sm text-slate-600">
            Search by keyword or filter by focus area.
          </p>
        </div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search topics"
          className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm md:w-64"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {filterTags.map((tag) => {
          const isActive = tag.id === activeTag;
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => setActiveTag(tag.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                isActive
                  ? "bg-brand-green text-white"
                  : "border border-slate-200 text-slate-600 hover:border-brand-green"
              }`}
            >
              {tag.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {filteredTopics.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-600 md:col-span-2">
            No topics match your search. Try another keyword.
          </div>
        ) : (
          filteredTopics.map((topic) => (
            <div key={topic.slug} className="card">
              <h2 className="text-xl font-semibold text-brand-dark">{topic.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{topic.summary}</p>
              <Link
                href={`/topics/${topic.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-brand-green"
              >
                Read more →
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
