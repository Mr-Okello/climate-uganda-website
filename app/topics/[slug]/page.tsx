import Link from "next/link";
import { notFound } from "next/navigation";
import topics from "../../../data/topics.json";
import type { Topic } from "../../lib/types";

export async function generateStaticParams() {
  const list = topics as Topic[];
  return list.map((topic) => ({ slug: topic.slug }));
}

export default function TopicDetailPage({ params }: { params: { slug: string } }) {
  const list = topics as Topic[];
  const topic = list.find((item) => item.slug === params.slug);
import TopicTabs from "../../components/TopicTabs";
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
    <div className="space-y-10">
      <Link href="/topics" className="text-sm font-semibold text-brand-blue">
        ← Back to topics
      </Link>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">{topic.title}</h1>
        <p className="mt-4 text-base text-slate-700">{topic.content}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Key impacts</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {topic.keyImpacts.map((impact) => (
              <li key={impact}>{impact}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">What students can do</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {topic.studentActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Local Uganda examples</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {topic.localExamples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <Link href="/topics" className="text-sm font-semibold text-brand-green">
          ← Back to topics
        </Link>
        <h1 className="mt-4 text-3xl font-semibold text-brand-dark">{topic.title}</h1>
        <p className="mt-3 text-lg text-slate-600">{topic.summary}</p>
        <TopicTabs topic={topic} />
      </div>
    </section>
  );
}
