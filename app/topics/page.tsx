import Link from "next/link";
import topics from "../../data/topics.json";
import type { Topic } from "../lib/types";

export default function TopicsPage() {
  const list = topics as Topic[];

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Climate Topics in Uganda</h1>
        <p className="text-slate-600">
          Explore 10 focused topics with local context and practical actions you can take.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((topic) => (
          <article key={topic.slug} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{topic.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{topic.summary}</p>
            <Link
              href={`/topics/${topic.slug}`}
              className="mt-4 inline-flex items-center text-sm font-semibold text-brand-blue"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
