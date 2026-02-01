import { requireUser } from "@/lib/require-user";
import ProfileForm from "../ProfileForm";

export default async function ProfileSetupPage() {
  const user = await requireUser({ requireRegion: false });

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">
        Finish your profile
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Please select your region so we can connect you with local updates.
      </p>
      <div className="mt-6">
        <ProfileForm
          user={{
            displayName: user.displayName,
            region: user.region,
            district: user.district,
            avatarUrl: user.avatarUrl
          }}
        />
      </div>
    </section>
  );
}
