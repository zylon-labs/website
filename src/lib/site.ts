export const site = {
  name: "Zylon Labs",
  legalName: "Zylon Aktiebolag",
  tagline: "Complex systems, AI automation, and scalable platforms.",
  description:
    "Custom CRM, AI automation and internal systems for growing companies. I build custom CRMs, internal tools, AI automation, API integrations, and reliable cloud infrastructure (AWS + Cloudflare).",
  email: "marcus@zylon-labs.com",
  // Set NEXT_PUBLIC_SITE_URL in Railway, e.g. https://zylon-labs.com
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
    "https://zylon-labs.com",
  social: {
    linkedin: "https://linkedin.com/in/marcus-christiansson",
    github: "https://github.com/",
  },
  calendly: "https://calendly.com/marcus-zylon-labs/30min",
  primaryCtaLabel: "Book a Strategy Call",
  primaryCtaSupportingText:
    "30-minute focused session to explore your systems, challenges and growth opportunities.",
};

export type Site = typeof site;
