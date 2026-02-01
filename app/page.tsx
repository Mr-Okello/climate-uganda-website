import Link from "next/link";

const resources = [
  { label: "Uganda climate policy overview", href: "#" },
  { label: "Student climate clubs toolkit", href: "#" },
  { label: "Flood safety guide", href: "#" },
  { label: "Clean energy basics", href: "#" },
  { label: "Tree planting handbook", href: "#" },
  { label: "Lake Victoria fact sheet", href: "#" }
import LearningPathSelector from "./components/LearningPathSelector";

const resources = [
  { label: "Uganda National Climate Policy", href: "#" },
  { label: "School Climate Clubs Guide", href: "#" },
  { label: "Weather Observation Toolkit", href: "#" },
  { label: "Planting Trees 101", href: "#" },
  { label: "Waste Sorting Basics", href: "#" },
  { label: "Clean Energy Starter Pack", href: "#" }
];

const communityPosts = [
  {
    name: "Nalongo Asha",
    handle: "@asha.nalongo",
    time: "2h ago",
    content:
      "Our class started a rainwater harvesting chart this week. We are tracking every day it rains.",
    tags: ["#WaterSmart", "#SchoolProject"],
    likes: 48,
    reposts: 12,
    comments: 6
  },
  {
    name: "Kato Brian",
    handle: "@brian.kato",
    time: "5h ago",
    content:
      "We planted 15 indigenous trees behind the market. Next step: share maintenance tips with vendors.",
    tags: ["#TreePlanting", "#CommunityAction"],
    likes: 76,
    reposts: 22,
    comments: 14
  },
  {
    name: "Asha Namara",
    handle: "@asha.namara",
    time: "1d ago",
    content:
      "Looking for ideas to keep our climate club active during the dry season. Any suggestions?",
    tags: ["#ClimateClub", "#AskUganda"],
    likes: 33,
    reposts: 9,
    comments: 18
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
              Climate Change Education
            </span>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Learn how climate change is shaping Uganda’s future.
            </h1>
            <p className="text-lg text-slate-600">
              Explore real-life examples, take quizzes, and track positive actions. This site is built
              for beginners who want to understand climate change and make a difference locally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/topics"
                className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
    <div>
      <section className="section-padding bg-brand-light">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div>
            <span className="badge">Beginner-friendly climate education</span>
            <h1 className="mt-4 text-4xl font-semibold text-brand-dark md:text-5xl">
              Climate change made simple for learners across Uganda.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Explore how shifting seasons and extreme weather are reshaping Ugandan
              communities, then learn practical, everyday steps students can take to protect
              nature, health, and livelihoods in their own districts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/topics"
                className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Explore Topics
              </Link>
              <Link
                href="/quiz"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow hover:border-brand-blue hover:text-brand-blue"
                className="rounded-full border border-brand-green px-5 py-3 text-sm font-semibold text-brand-green transition hover:bg-white"
              >
                Take Quiz
              </Link>
              <Link
                href="/actions"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow hover:border-brand-blue hover:text-brand-blue"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-green shadow-sm transition hover:-translate-y-0.5"
              >
                Climate Actions
              </Link>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl bg-emerald-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Why climate change matters in Uganda</h2>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="rounded-xl bg-white p-4 shadow-sm">
                Uganda’s rainfall patterns are shifting, impacting crops, water, and health.
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm">
                Communities near lakes, wetlands, and hillsides are facing higher flood risks.
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm">
                Youth voices and local solutions can protect nature and build resilience.
              </li>
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-brand-dark">
              Why climate change matters in Uganda
            </h2>
            <p className="mt-4 text-slate-600">
              Uganda’s livelihoods depend on reliable rainfall, healthy soils, and clean
              water. Rising temperatures, stronger storms, and longer dry spells already
              affect crops, roads, water access, and public health. By understanding these
              changes, young people can protect their communities and plan for a safer
              future.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Farming supports most families and needs predictable rain.</li>
              <li>• Floods and droughts can close schools and stall small businesses.</li>
              <li>• Forests, wetlands, and lakes safeguard water and biodiversity.</li>
              <li>• Climate-smart habits reduce waste and keep neighborhoods cleaner.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Learn",
            description: "Beginner-friendly guides on the climate topics that matter most in Uganda."
          },
          {
            title: "Practice",
            description: "Take a 15-question quiz and see clear explanations for each answer."
          },
          {
            title: "Act",
            description: "Track your climate-friendly actions and inspire your community."
          }
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Resources</h2>
            <p className="mt-2 text-sm text-slate-600">
              Starter links for learning more about climate action in Uganda.
            </p>
          </div>
          <Link href="/about" className="text-sm font-semibold text-brand-blue">
            Meet the team →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.label}
              href={resource.href}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 hover:border-brand-blue"
            >
              {resource.label}
            </a>
          ))}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="badge">Learning paths</span>
              <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
                Learn, test, and take action
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Each section is designed for beginners, pairing short explanations with local
              stories, quick knowledge checks, and doable actions at home or school.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Explore Topics",
                description:
                  "Dive into floods, droughts, health, energy, and ecosystems through Uganda-focused stories and key facts.",
                href: "/topics"
              },
              {
                title: "Take the Quiz",
                description:
                  "Check your knowledge with a 15-question climate quiz, instant feedback, and tips to improve.",
                href: "/quiz"
              },
              {
                title: "Climate Actions",
                description:
                  "Track simple actions you and your class can take to protect the planet and inspire others.",
                href: "/actions"
              }
            ].map((item) => (
              <Link key={item.title} href={item.href} className="card">
                <h3 className="text-xl font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-brand-green">
                  Get started →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="badge">Community hub</span>
              <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
                Join group chats and share updates like a social feed
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Students can plan local projects in group chats, then post wins,
              photos, and reflections to inspire other schools across Uganda.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr,1fr]">
            <div className="card flex h-full flex-col gap-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-brand-dark">
                    Flood Resilience Club • Group Chat
                  </p>
                  <p className="text-xs text-slate-500">
                    12 members • Active now
                  </p>
                </div>
                <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark">
                  Week 4 Planning
                </span>
              </div>
              <div className="space-y-4 rounded-2xl bg-brand-light/60 p-4">
                {[
                  {
                    name: "Amina",
                    message:
                      "Can we map flood-prone spots near the school before Friday?",
                    time: "9:12 AM"
                  },
                  {
                    name: "Kato",
                    message:
                      "Yes! I will bring the school tablet to capture photos.",
                    time: "9:18 AM"
                  },
                  {
                    name: "Lillian",
                    message:
                      "Let us invite the nearby primary school to join.",
                    time: "9:20 AM"
                  }
                ].map((chat) => (
                  <div key={chat.name} className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-green">
                      {chat.name.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">
                        {chat.name}
                      </p>
                      <p className="text-sm text-slate-600">{chat.message}</p>
                      <p className="text-xs text-slate-400">{chat.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
                <span className="font-semibold text-brand-green">+</span>
                <span>Share a message with your group chat...</span>
              </div>
            </div>

            <div className="card flex h-full flex-col gap-5">
              <div>
                <p className="text-sm font-semibold text-brand-dark">
                  Student Social Feed
                </p>
                <p className="text-xs text-slate-500">
                  Share photos, lessons, and climate wins.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-brand-light/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-green">
                    J
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">
                      Jamila from Gulu High
                    </p>
                    <p className="text-xs text-slate-400">Just now</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Our class planted 40 tree seedlings today! We tagged each one
                  with a pledge to water it weekly. 🌱
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-brand-green">
                  <span className="rounded-full bg-white px-3 py-1">
                    #TreePlanting
                  </span>
                  <span className="rounded-full bg-white px-3 py-1">
                    #YouthAction
                  </span>
                  <span className="rounded-full bg-white px-3 py-1">
                    #ClimateHope
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span>❤️ 128</span>
                  <span>💬 22</span>
                  <span>🔁 11</span>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4 text-sm text-slate-500">
                <p className="font-semibold text-brand-dark">Create a post</p>
                <p className="mt-2">
                  Share a photo, project update, or climate tip with other
                  schools.
                </p>
                <div className="mt-3 rounded-xl border border-slate-200 bg-brand-light/60 px-4 py-3 text-sm text-slate-500">
                  Write your update here...
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-brand-green">
                  <span className="rounded-full bg-brand-light px-3 py-1">
                    Add photo
                  </span>
                  <span className="rounded-full bg-brand-light px-3 py-1">
                    Tag club
                  </span>
                  <span className="rounded-full bg-brand-light px-3 py-1">
                    Post update
                  </span>
                </div>
              </div>
            </div>
              <span className="badge">Interactive guide</span>
              <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
                Choose your learning path
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Pick a starting point and get a tailored set of next steps for students,
              teachers, and climate clubs.
            </p>
          </div>
          <div className="mt-6">
            <LearningPathSelector />
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-sand">
      <section id="resources" className="section-padding bg-brand-sand">
        <div className="mx-auto max-w-6xl">
          <span className="badge">Resources</span>
          <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
            Explore helpful learning resources
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {resources.map((resource) => (
              <div key={resource.label} className="card">
                <p className="text-sm font-semibold text-brand-dark">
                  {resource.label}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Classroom-ready guidance, lesson ideas, and activity worksheets for teachers
                  and students.
                </p>
                <Link
                  href={resource.href}
                  className="mt-3 inline-flex text-sm font-semibold text-brand-green"
                >
                  View resource →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="badge">Community space</span>
              <h2 className="mt-3 text-3xl font-semibold text-brand-dark">
                Share, repost, and message climate champions
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              A social-style space for students and educators to post updates, comment
              on projects, repost local wins, and send DMs to coordinate action.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr,0.6fr]">
            <div className="space-y-6">
              {communityPosts.map((post) => (
                <article key={post.handle} className="card space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">{post.name}</p>
                      <p className="text-xs text-slate-500">
                        {post.handle} • {post.time}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-green hover:text-brand-green"
                    >
                      Follow
                    </button>
                  </div>
                  <p className="text-sm text-slate-600">{post.content}</p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-brand-green">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span>💬 {post.comments} comments</span>
                    <span>🔁 {post.reposts} reposts</span>
                    <span>❤️ {post.likes} likes</span>
                    <button
                      type="button"
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-green hover:text-brand-green"
                    >
                      Send DM
                    </button>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-500">Latest comments</p>
                    <div className="mt-3 space-y-2 text-sm text-slate-600">
                      <p>
                        <span className="font-semibold text-brand-dark">Grace:</span> Love this!
                        Sharing with our club.
                      </p>
                      <p>
                        <span className="font-semibold text-brand-dark">Tendo:</span> We can help
                        gather data from our village.
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-dark"
                      >
                        Add comment
                      </button>
                      <button
                        type="button"
                        className="rounded-full border border-brand-green px-4 py-2 text-xs font-semibold text-brand-green transition hover:bg-white"
                      >
                        Repost
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="card space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">Post a new update</h3>
                <p className="text-sm text-slate-600">
                  Share a quick update, ask a question, or celebrate an action from your
                  school or community.
                </p>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    Write a short post...
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-green hover:text-brand-green"
                    >
                      Add photo
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-green hover:text-brand-green"
                    >
                      Tag a club
                    </button>
                    <button
                      type="button"
                      className="rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-dark"
                    >
                      Post update
                    </button>
                  </div>
                </div>
              </div>

              <div className="card space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">DM inbox</h3>
                <p className="text-sm text-slate-600">
                  Coordinate meetups, swap lesson plans, and keep partnerships moving.
                </p>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">Lake Victoria Club</p>
                      <p className="text-xs text-slate-500">
                        Sharing seedling schedule updates.
                      </p>
                    </div>
                    <span className="rounded-full bg-brand-green px-2 py-1 text-xs font-semibold text-white">
                      New
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">Masaka Youth Group</p>
                      <p className="text-xs text-slate-500">Thanks for the clean-up invite!</p>
                    </div>
                    <button
                      type="button"
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-green hover:text-brand-green"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
