import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Topics", href: "/topics" },
  { label: "Quiz", href: "/quiz" },
  { label: "Actions", href: "/actions" },
  { label: "About", href: "/about" }
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-brand-dark">
          Climate Uganda Classroom
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-green">
            Menu
          </span>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white md:hidden">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-4 px-6 py-3 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
