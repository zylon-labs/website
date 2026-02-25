import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Pragmatic notes on building custom CRMs, API automation, AI tools, and operating reliable systems on AWS + Cloudflare.",
};

export default function InsightsPage() {
  const topics = [
    {
      title: "When to build a custom CRM (and when not to)",
      desc: "A framework for deciding between off-the-shelf tools and a purpose-built platform.",
    },
    {
      title: "AI automation that actually works in production",
      desc: "How to design human-in-the-loop workflows and measure impact—without shipping demos.",
    },
    {
      title: "API integrations: reliability over heroics",
      desc: "Versioning, idempotency, observability, and why most integrations break at 2am.",
    },
    {
      title: "Modern cloud operations without overengineering",
      desc: "Practical AWS + Cloudflare patterns for teams that want stability and cost control.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Insights"
        title="Systems, AI, and operations—without the fluff."
        description="Short, pragmatic notes on architecture, automation, and keeping software reliable over time."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {topics.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10"
          >
            <div className="text-base font-semibold text-white">{t.title}</div>
            <p className="mt-2 text-sm leading-6 text-white/70">{t.desc}</p>
            <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/50">
              Coming soon
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-white/[0.03] p-10 ring-1 ring-white/10">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Want a topic covered?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          If you’re evaluating a build vs buy decision or struggling with
          reliability, I’m happy to share a pragmatic approach.
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}

