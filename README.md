## Zylon Labs website

Marketing site for **Zylon Labs** (EN + `/sv`), built with Next.js (App Router) + Tailwind.

## Getting Started

Install deps (already installed) and run dev:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables

- `NEXT_PUBLIC_SITE_URL` (recommended in production): `https://zylon-labs.com`

This is used for canonical URLs, metadata base, `sitemap.xml`, and `robots.txt`.

## Deploy (Railway)

- Build command: `npm run build`
- Start command: `npm run start`
- Set env var: `NEXT_PUBLIC_SITE_URL=https://zylon-labs.com`

## Notes

- Brand config lives in `src/lib/site.ts`.
