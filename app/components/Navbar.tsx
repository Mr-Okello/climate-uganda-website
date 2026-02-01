import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/topics", label: "Topics" },
  { href: "/quiz", label: "Quiz" },
  { href: "/actions", label: "Climate Actions" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold text-brand-green">
          Climate Uganda
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden text-sm text-slate-600">Menu in footer ↓</div>
      </div>
    </header>
  );
}
