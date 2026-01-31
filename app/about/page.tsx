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
  );
}
