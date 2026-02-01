export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">About Climate Uganda</h1>
        <p className="text-slate-600">
          Climate Uganda is a student-friendly learning hub that explains climate change using local
          stories, simple language, and practical actions.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Our mission</h2>
          <p className="mt-2 text-sm text-slate-600">
            We help students, teachers, and communities understand how climate change affects Uganda
            and inspire climate-smart choices at school and at home.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Who runs it</h2>
          <p className="mt-2 text-sm text-slate-600">
            This project is maintained by educators, youth leaders, and local climate advocates who
            want to make climate learning accessible to everyone.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
        <p className="mt-2 text-sm text-slate-600">
          Email us at <span className="font-semibold">hello@climateuganda.org</span> to share ideas or
          partner on climate education.
        </p>
      </section>
    </div>
import FaqAccordion from "../components/FaqAccordion";

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <span className="badge">About</span>
        <h1 className="mt-3 text-3xl font-semibold text-brand-dark">
          Our mission
        </h1>
        <p className="mt-4 text-slate-600">
          Climate Uganda Classroom helps students, teachers, and families understand
          climate change in a local context. We translate science into clear language,
          highlight real stories from Uganda, and celebrate the everyday actions that
          protect people and nature.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="text-xl font-semibold text-brand-dark">Who runs it?</h2>
            <p className="mt-3 text-sm text-slate-600">
              A small team of educators, climate volunteers, and youth leaders who want
              to make climate learning accessible to every student.
            </p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold text-brand-dark">Contact</h2>
            <p className="mt-3 text-sm text-slate-600">
              Reach us at <span className="font-semibold">hello@climateuganda.org</span>
              . We welcome school partnerships and feedback.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-brand-dark">
            Questions we hear often
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tap each question to learn more about our approach.
          </p>
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
