export const site = {
  name: "Zylon Labs",
  legalName: "Zylon Aktiebolag",
  tagline: "Complex systems, AI automation, and scalable platforms.",
  description:
    "Technical partner for growing companies. I build custom CRMs, internal tools, AI automation, API integrations, and reliable cloud infrastructure (AWS + Cloudflare).",
  email: "marcus@zylon-labs.com",
  // Set NEXT_PUBLIC_SITE_URL in Railway, e.g. https://zylon-labs.com
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
    "https://zylon-labs.com",
  social: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  // Optional: add later when you have it
  calendly: "",
};

export type Site = typeof site;
