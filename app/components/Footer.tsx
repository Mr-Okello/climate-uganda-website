import Link from "next/link";

const footerLinks = [
  { href: "/topics", label: "Explore Topics" },
  { href: "/quiz", label: "Take Quiz" },
  { href: "/actions", label: "Climate Actions" },
  { href: "/about", label: "About" }
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-brand-green">Climate Uganda</h3>
          <p className="mt-2 text-sm text-slate-600">
            Learning together for a resilient, climate-smart Uganda.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-600 hover:text-brand-blue">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
