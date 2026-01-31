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
      </div>
    </section>
  );
}
