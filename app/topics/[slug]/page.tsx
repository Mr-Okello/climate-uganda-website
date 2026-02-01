import Link from "next/link";
import { notFound } from "next/navigation";
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
