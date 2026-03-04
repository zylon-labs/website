# Zylon Labs website

Marketing website for **Zylon Labs** — building AI automation, custom CRM systems and internal tools.

🌍 https://zylon-labs.com

Built with Next.js (App Router) + Tailwind.

## Getting Started

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://zylon-labs.com
```

Used for:

- canonical URLs
- metadata base
- sitemap.xml
- robots.txt

## Deploy

### Railway

**Build command**

```bash
npm run build
```

**Start command**

```bash
npm run start
```

**Environment variable**

```bash
NEXT_PUBLIC_SITE_URL=https://zylon-labs.com
```

## Project structure

```
src/
public/
scripts/
```

## Notes

Brand config lives in:

```
src/lib/site.ts
```
