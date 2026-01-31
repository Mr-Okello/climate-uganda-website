import Link from "next/link";
import { notFound } from "next/navigation";
import topics from "../../data/topics.json";

interface Topic {
  slug: string;
  title: string;
  summary: string;
  content: string;
  keyImpacts: string[];
  studentActions: string[];
  localExamples: string[];
}

const topicList = topics as Topic[];

export function generateStaticParams() {
  return topicList.map((topic) => ({ slug: topic.slug }));
}

export default function TopicDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const topic = topicList.find((item) => item.slug === params.slug);

  if (!topic) {
    notFound();
  }

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <Link href="/topics" className="text-sm font-semibold text-brand-green">
          ← Back to topics
        </Link>
        <h1 className="mt-4 text-3xl font-semibold text-brand-dark">{topic.title}</h1>
        <p className="mt-3 text-lg text-slate-600">{topic.summary}</p>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-dark">Overview</h2>
          <p className="mt-3 text-slate-600">{topic.content}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-dark">Key impacts</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {topic.keyImpacts.map((impact) => (
                <li key={impact}>• {impact}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-dark">
              What students can do
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {topic.studentActions.map((action) => (
                <li key={action}>• {action}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-dark">Local examples</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {topic.localExamples.map((example) => (
                <li key={example}>• {example}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
