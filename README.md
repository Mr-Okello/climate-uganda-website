# Climate Uganda (Next.js App Router)

A beginner-friendly climate change education site focused on Uganda. Built with Next.js (App Router), Tailwind CSS, and local JSON data (no external APIs). The site is deployable on Vercel.

## Folder structure

```
.
├── app
│   ├── actions
│   │   └── page.tsx
│   ├── about
│   │   └── page.tsx
│   ├── components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── lib
│   │   └── types.ts
│   ├── quiz
│   │   └── page.tsx
│   ├── topics
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── data
│   ├── quiz.json
│   └── topics.json
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel (via GitHub)

1. Create a GitHub repository and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com), click **New Project**, and import your GitHub repo.
3. Keep the default settings (Next.js framework detected automatically).
4. Click **Deploy**. Vercel will build and host your site.

## Notes

- All content is stored in local JSON files under `/data`.
- The actions tracker uses browser `localStorage` to persist entries.
