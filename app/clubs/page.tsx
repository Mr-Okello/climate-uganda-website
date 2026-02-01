import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/require-user";
import ClubsClient from "./ClubsClient";

export default async function ClubsPage() {
  const user = await requireUser();

  const clubs = await prisma.club.findMany({
    orderBy: { createdAt: "desc" },
    include: { members: true }
  });

  const formattedClubs = clubs.map((club) => ({
    id: club.id,
    name: club.name,
    description: club.description,
    region: club.region,
    memberCount: club.members.length,
    isMember: club.members.some((member) => member.userId === user.id)
  }));

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">
          Environmental clubs
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Join a club to organize local actions, share resources, and mentor new
          leaders.
        </p>
      </div>
      <ClubsClient initialClubs={formattedClubs} />
    </section>
  );
}
