export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-sand">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Climate Uganda Classroom
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Building climate literacy and action for students across Uganda.
          </p>
        </div>
        <div className="text-sm text-slate-600 md:text-right">
          <p>Contact: hello@climateuganda.org</p>
          <p className="mt-1">&copy; 2024 Climate Uganda Classroom</p>
        </div>
      </div>
    </footer>
  );
}
