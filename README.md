# Climate Uganda Classroom + Community Platform

A beginner-friendly climate change education hub for Uganda, now upgraded with a community layer (login, clubs, posts, reports, and admin moderation). Built with Next.js (App Router), Tailwind CSS, Supabase Postgres, Prisma ORM, and NextAuth credentials authentication.

## Features

### Education (existing)
- Home, Topics, Topic detail pages
- 15-question quiz with explanations
- Actions tracker stored in localStorage
- About page

### Community (new)
- Login & registration
- User profiles with region and district
- Community feed (Twitter-like) with posts, comments, and reposts
- Environmental clubs with join/leave
- Report-a-problem workflow with admin review
- Admin moderation basics (delete posts/comments, update report status)

---

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

---

## Supabase + Prisma Setup (Beginner Friendly)

### 1) Create a Supabase project
1. Go to https://supabase.com and create a new project.
2. In **Project Settings → Database**, copy the **connection string** (Postgres URL).

### 2) Create a `.env.local` file
Create a `.env.local` file in the project root with:

```bash
DATABASE_URL="YOUR_SUPABASE_POSTGRES_URL"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="YOUR_LONG_RANDOM_SECRET"
```

Generate a secret with:

```bash
openssl rand -base64 32
```

### 3) Run Prisma migrations
```bash
npx prisma generate
npx prisma migrate deploy
```

### 4) Seed demo data
```bash
npm run db:seed
```

Demo login credentials:
- Admin: `admin@climateug.org` / `password123`
- User: `student@climateug.org` / `password123`

---

## Deployment (Vercel)

1. Push the repo to GitHub.
2. In Vercel, import the repo.
3. Add environment variables in Vercel:
   - `DATABASE_URL`
   - `NEXTAUTH_URL` (your Vercel URL)
   - `NEXTAUTH_SECRET`
4. Deploy.

---

## Quick Browser Testing Checklist

1. **Public pages**: Home, Topics, Quiz, Actions, About load without errors.
2. **Register/Login**: Create an account and sign in.
3. **Community feed**: Post, repost, and comment (check rate-limit message if spamming).
4. **Clubs**: Create a club, join/leave, view members.
5. **Reports**: Submit a report, view report list and details.
6. **Admin**: Login as admin and update report statuses.

---

## Folder Structure (high level)

```
app/
  admin/reports
  community
  clubs
  reports
  profile
  login
  register
  logout
  api/
    auth/[...nextauth]
    register
    posts
    comments
    clubs
    reports
    profile
  about/
  actions/
  quiz/
  topics/
  components/
lib/
  auth.ts
  prisma.ts
  require-user.ts
  constants.ts
prisma/
  schema.prisma
  seed.ts
  migrations/
```

---

## Notes

- Content for Topics and Quiz remains local in `app/data/`.
- The report photo field accepts a URL (you can later connect Supabase Storage).
- Posts/comments are sanitized by rendering plain text (no raw HTML).
