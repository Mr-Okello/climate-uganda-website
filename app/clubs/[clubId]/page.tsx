import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/require-user";
import ClubDetailClient from "./ClubDetailClient";

export default async function ClubDetailPage({
  params
}: {
  params: { clubId: string };
}) {
  const user = await requireUser();

  const club = await prisma.club.findUnique({
    where: { id: params.clubId },
    include: {
      owner: true,
      members: {
        include: { user: true }
      }
    }
  });

  if (!club) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-slate-600">Club not found.</p>
      </section>
    );
  }

  const isMember = club.members.some((member) => member.userId === user.id);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/clubs" className="text-sm font-semibold text-brand-green">
        ← Back to clubs
      </Link>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              {club.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600">{club.description}</p>
            <p className="mt-3 text-xs text-slate-500">
              Region: {club.region}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Created by {club.owner.displayName}
            </p>
          </div>
          <ClubDetailClient
            clubId={club.id}
            isMember={isMember}
            memberCount={club.members.length}
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Members</h2>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {club.members.map((member) => (
            <li
              key={member.id}
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
            >
              {member.user.displayName} · {member.user.region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
