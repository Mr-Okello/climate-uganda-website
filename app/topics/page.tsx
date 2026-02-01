import TopicFilter from "../components/TopicFilter";
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
        <TopicFilter topics={topicList} />
      </div>
    </section>
  );
}
