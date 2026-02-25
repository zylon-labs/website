import { Metadata } from "next";

import { Card } from "@/components/Card";
import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected projects: custom CRM development, automation, AI tools, and platform operations on AWS + Cloudflare.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Case studies"
        title="Real systems. Real ownership."
        description="A selection of projects where I built platforms, stabilized operations, and delivered automation that actually saves time."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Card
          href="/case-studies/bostadsagenturen"
          eyebrow="Real estate · Sweden"
          title="Bostadsagenturen"
          description="Custom CRM for end-to-end case handling + an API pipeline for invoice processing and email distribution. Ongoing WordPress + SEO support."
        />
        <Card
          href="/case-studies/clarity"
          eyebrow="Platform · US"
          title="Clarity"
          description="Took over an existing platform, improved reliability and operations on AWS + Cloudflare, and shipped new AI-powered editing tools."
        />
      </div>

      <div className="mt-10">
        <StrategyCallButton />
      </div>

      <div className="mt-14 rounded-3xl bg-white/[0.03] p-10 ring-1 ring-white/10">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Want results like this?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          If you need a technical owner who can handle architecture, delivery,
          and production operations—let’s talk.
        </p>
        <div className="mt-6">
          <StrategyCallButton showSupportingText />
        </div>
      </div>
    </div>
  );
}

