import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom CRM systems, internal tools, AI automation, API integrations, and cloud architecture (AWS + Cloudflare).",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Services"
        title="Build systems that scale with your business."
        description="I help companies design, build, and operate reliable software: custom CRMs, internal tools, AI automation, API integrations, and production-grade cloud infrastructure."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Custom CRM & internal platforms",
            bullets: [
              "Workflow-first design tailored to your actual process",
              "Permissions, audit logs, and data integrity",
              "Fast UI + maintainable backend architecture",
            ],
          },
          {
            title: "AI tools & automation",
            bullets: [
              "Document processing (PDFs, contracts, summaries)",
              "Human-in-the-loop review where it matters",
              "Safe deployment patterns and measurable outcomes",
            ],
          },
          {
            title: "API development & integrations",
            bullets: [
              "Versioned APIs, background jobs, and webhooks",
              "Integrations with billing, CRM, email, and internal systems",
              "Observability: logs, metrics, and alerting",
            ],
          },
          {
            title: "Cloud architecture (AWS + Cloudflare)",
            bullets: [
              "Secure networking, auth, and secrets management",
              "CI/CD, environments, and sensible cost controls",
              "Runbooks and incident-friendly operations",
            ],
          },
          {
            title: "Maintenance, scaling & modernization",
            bullets: [
              "Take over existing codebases and stabilize delivery",
              "Performance improvements and upgrades",
              "Reduce operational risk without overengineering",
            ],
          },
          {
            title: "Technical partner on retainer",
            bullets: [
              "Ongoing development + operations support",
              "Predictable monthly cadence and prioritization",
              "A reliable owner for your platform",
            ],
          },
        ].map((s) => (
          <div
            key={s.title}
            className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10"
          >
            <div className="text-base font-semibold text-white">{s.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <StrategyCallButton />
      </div>

      <div className="mt-14 rounded-3xl bg-white/[0.03] p-10 ring-1 ring-white/10">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Not sure where to start?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          Book a Strategy Call and I’ll help you scope the first step: what to
          build now, what to postpone, and how to keep it maintainable long-term.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
          <StrategyCallButton showSupportingText className="sm:shrink-0" />
          <a
            href="/case-studies"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15 sm:self-start"
          >
            See case studies
          </a>
        </div>
      </div>
    </div>
  );
}

