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
              Climate change made simple for learners across Uganda.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Explore how shifting seasons and extreme weather are reshaping Ugandan
              communities, then learn practical, everyday steps students can take to protect
              nature, health, and livelihoods in their own districts.
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
              Uganda’s livelihoods depend on reliable rainfall, healthy soils, and clean
              water. Rising temperatures, stronger storms, and longer dry spells already
              affect crops, roads, water access, and public health. By understanding these
              changes, young people can protect their communities and plan for a safer
              future.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Farming supports most families and needs predictable rain.</li>
              <li>• Floods and droughts can close schools and stall small businesses.</li>
              <li>• Forests, wetlands, and lakes safeguard water and biodiversity.</li>
              <li>• Climate-smart habits reduce waste and keep neighborhoods cleaner.</li>
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
              Each section is designed for beginners, pairing short explanations with local
              stories, quick knowledge checks, and doable actions at home or school.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Explore Topics",
                description:
                  "Dive into floods, droughts, health, energy, and ecosystems through Uganda-focused stories and key facts.",
                href: "/topics"
              },
              {
                title: "Take the Quiz",
                description:
                  "Check your knowledge with a 15-question climate quiz, instant feedback, and tips to improve.",
                href: "/quiz"
              },
              {
                title: "Climate Actions",
                description:
                  "Track simple actions you and your class can take to protect the planet and inspire others.",
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
                  Classroom-ready guidance, lesson ideas, and activity worksheets for teachers
                  and students.
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
