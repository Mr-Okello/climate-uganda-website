import Link from "next/link";

const resources = [
  { label: "Uganda climate policy overview", href: "#" },
  { label: "Student climate clubs toolkit", href: "#" },
  { label: "Flood safety guide", href: "#" },
  { label: "Clean energy basics", href: "#" },
  { label: "Tree planting handbook", href: "#" },
  { label: "Lake Victoria fact sheet", href: "#" }
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
              Climate Change Education
            </span>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Learn how climate change is shaping Uganda’s future.
            </h1>
            <p className="text-lg text-slate-600">
              Explore real-life examples, take quizzes, and track positive actions. This site is built
              for beginners who want to understand climate change and make a difference locally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/topics"
                className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
              >
                Explore Topics
              </Link>
              <Link
                href="/quiz"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow hover:border-brand-blue hover:text-brand-blue"
              >
                Take Quiz
              </Link>
              <Link
                href="/actions"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow hover:border-brand-blue hover:text-brand-blue"
              >
                Climate Actions
              </Link>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl bg-emerald-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Why climate change matters in Uganda</h2>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="rounded-xl bg-white p-4 shadow-sm">
                Uganda’s rainfall patterns are shifting, impacting crops, water, and health.
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm">
                Communities near lakes, wetlands, and hillsides are facing higher flood risks.
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm">
                Youth voices and local solutions can protect nature and build resilience.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Learn",
            description: "Beginner-friendly guides on the climate topics that matter most in Uganda."
          },
          {
            title: "Practice",
            description: "Take a 15-question quiz and see clear explanations for each answer."
          },
          {
            title: "Act",
            description: "Track your climate-friendly actions and inspire your community."
          }
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Resources</h2>
            <p className="mt-2 text-sm text-slate-600">
              Starter links for learning more about climate action in Uganda.
            </p>
          </div>
          <Link href="/about" className="text-sm font-semibold text-brand-blue">
            Meet the team →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.label}
              href={resource.href}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 hover:border-brand-blue"
            >
              {resource.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
