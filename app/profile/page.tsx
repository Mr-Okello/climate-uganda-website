import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/require-user";
import ProfileForm from "./ProfileForm";

export default async function ProfilePage() {
  const user = await requireUser();

  const [postsCount, memberships] = await Promise.all([
    prisma.post.count({ where: { authorId: user.id } }),
    prisma.clubMembership.findMany({
      where: { userId: user.id },
      include: { club: true }
    })
  ]);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Your profile</h1>
          <p className="mt-2 text-sm text-slate-600">
            Update your details and keep your community presence fresh.
          </p>
          <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Display name
              </p>
              <p className="text-lg font-semibold text-slate-900">
                {user.displayName}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Region
              </p>
              <p className="text-lg font-semibold text-slate-900">
                {user.region}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Posts shared
              </p>
              <p className="text-lg font-semibold text-slate-900">
                {postsCount}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Clubs joined
              </p>
              <p className="text-lg font-semibold text-slate-900">
                {memberships.length}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Your clubs
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {memberships.map((membership) => (
                <li key={membership.id}>
                  {membership.club.name} · {membership.club.region}
                </li>
              ))}
              {memberships.length === 0 && (
                <li>You have not joined a club yet.</li>
              )}
            </ul>
          </div>
        </div>
        <div>
          <ProfileForm
            user={{
              displayName: user.displayName,
              region: user.region,
              district: user.district,
              avatarUrl: user.avatarUrl
            }}
          />
        </div>
      </div>
    </section>
  );
}
