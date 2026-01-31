import Link from "next/link";
import topics from "../data/topics.json";

interface Topic {
  slug: string;
  title: string;
  summary: string;
}

const topicList = topics as Topic[];

export default function TopicsPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <span className="badge">Climate topics</span>
        <h1 className="mt-3 text-3xl font-semibold text-brand-dark">
          Explore climate change topics in Uganda
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Browse beginner-friendly explanations of the climate issues affecting Uganda.
          Each topic includes key impacts, student actions, and local examples.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {topicList.map((topic) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
