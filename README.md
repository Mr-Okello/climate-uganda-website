# Climate Uganda Classroom

A modern, beginner-friendly climate change website focused on Uganda. Built with Next.js (App Router) and Tailwind CSS using local JSON data only.

## Features

- Home page with hero, “Why climate change matters in Uganda”, and quick links
- Topics directory with 10 Uganda-specific climate topics
- Topic detail pages with key impacts, student actions, and local examples
- 15-question quiz with explanations and score
- Action pledge tracker stored in browser localStorage
- About page with mission and contact placeholder

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Folder Structure

```
app/
  about/
    page.tsx
  actions/
    page.tsx
  components/
    Footer.tsx
    Navigation.tsx
  data/
    quiz.json
    topics.json
  quiz/
    page.tsx
  topics/
    [slug]/
      page.tsx
    page.tsx
  globals.css
  layout.tsx
  page.tsx
next.config.mjs
tailwind.config.ts
postcss.config.mjs
tsconfig.json
```

## Deployment (GitHub + Vercel)

1. **Create a GitHub repository**
   - On GitHub, create a new repo (e.g., `climate-uganda-website`).

2. **Push the code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/climate-uganda-website.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Log in to Vercel and click **New Project**.
   - Import your GitHub repository.
   - Keep the default settings for Next.js.
   - Click **Deploy**. Vercel will build and host the site.

## Notes

- All content is local (JSON) — no external APIs.
- You can edit topic or quiz data in `app/data/`.
