import Link from "next/link";

import LearningPathSelector from "./components/LearningPathSelector";

const resources = [
  { label: "Uganda National Climate Policy", href: "#" },
  { label: "School Climate Clubs Guide", href: "#" },
  { label: "Weather Observation Toolkit", href: "#" },
  { label: "Planting Trees 101", href: "#" },
  { label: "Waste Sorting Basics", href: "#" },
  { label: "Clean Energy Starter Pack", href: "#" }
];

export default function HomePage() {
  return (
    <div>
      <section className="section-padding bg-brand-light">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div>
            <span className="badge">Beginner-friendly climate education</span>
            <h1 className="mt-4 text-4xl font-semibold text-brand-dark md:text-5xl">
              Climate change made simple for learners in Uganda.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Discover how changing weather is shaping communities across Uganda, and learn
              practical ways students can protect nature, health, and livelihoods.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/topics"
                className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Explore Topics
              </Link>
              <Link
                href="/quiz"
                className="rounded-full border border-brand-green px-5 py-3 text-sm font-semibold text-brand-green transition hover:bg-white"
              >
                Take Quiz
              </Link>
              <Link
                href="/actions"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-green shadow-sm transition hover:-translate-y-0.5"
              >
                Climate Actions
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-brand-dark">
              Why climate change matters in Uganda
            </h2>
            <p className="mt-4 text-slate-600">
              Uganda depends on farming, fisheries, and healthy ecosystems. Hotter days,
              stronger storms, and longer droughts already affect crops, water access, and
              public health. Understanding these changes helps young people protect their
              communities and plan for a safer future.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Agriculture employs most families and is sensitive to rainfall.</li>
              <li>• Floods and droughts can disrupt schools and local businesses.</li>
              <li>• Healthy forests and wetlands protect water and biodiversity.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="badge">Learning paths</span>
              <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
                Learn, test, and take action
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Each section is designed for beginners, with short explanations, local
              examples, and doable actions.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Explore Topics",
                description:
                  "Understand floods, droughts, health, energy, and more with Uganda-focused stories.",
                href: "/topics"
              },
              {
                title: "Take the Quiz",
                description:
                  "Check your knowledge with a 15-question climate quiz and instant feedback.",
                href: "/quiz"
              },
              {
                title: "Climate Actions",
                description:
                  "Track simple actions you and your class can take to protect the planet.",
                href: "/actions"
              }
            ].map((item) => (
              <Link key={item.title} href={item.href} className="card">
                <h3 className="text-xl font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-brand-green">
                  Get started →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="badge">Interactive guide</span>
              <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
                Choose your learning path
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Pick a starting point and get a tailored set of next steps for students,
              teachers, and climate clubs.
            </p>
          </div>
          <div className="mt-6">
            <LearningPathSelector />
          </div>
        </div>
      </section>

      <section id="resources" className="section-padding bg-brand-sand">
        <div className="mx-auto max-w-6xl">
          <span className="badge">Resources</span>
          <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
            Explore helpful learning resources
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {resources.map((resource) => (
              <div key={resource.label} className="card">
                <p className="text-sm font-semibold text-brand-dark">
                  {resource.label}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Placeholder link for teachers and students.
                </p>
                <Link
                  href={resource.href}
                  className="mt-3 inline-flex text-sm font-semibold text-brand-green"
                >
                  View resource →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
