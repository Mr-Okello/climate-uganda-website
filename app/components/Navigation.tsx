import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Topics", href: "/topics" },
  { label: "Quiz", href: "/quiz" },
  { label: "Actions", href: "/actions" },
  { label: "Community", href: "/community" },
  { label: "Clubs", href: "/clubs" },
  { label: "Reports", href: "/reports" },
  { label: "About", href: "/about" }
];

export default async function Navigation() {
  const session = await getServerSession(authOptions);
  const isSignedIn = Boolean(session?.user?.id);

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
        <div className="hidden items-center gap-3 text-sm font-medium md:flex">
          {isSignedIn ? (
            <>
              <Link
                href="/profile"
                className="rounded-full border border-brand-green px-3 py-1 text-brand-green transition hover:bg-brand-green hover:text-white"
              >
                Profile
              </Link>
              <Link
                href="/logout"
                className="text-slate-600 transition hover:text-brand-green"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-slate-600 transition hover:text-brand-green"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-brand-green px-3 py-1 text-brand-green transition hover:bg-brand-green hover:text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
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
          {isSignedIn ? (
            <>
              <Link
                href="/profile"
                className="transition hover:text-brand-green"
              >
                Profile
              </Link>
              <Link
                href="/logout"
                className="transition hover:text-brand-green"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="transition hover:text-brand-green"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="transition hover:text-brand-green"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
