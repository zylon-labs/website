import { Metadata } from "next";

import { Card } from "@/components/Card";
import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "Case",
  description:
    "Utvalda projekt: CRM-utveckling, automation, AI-verktyg och stabil drift på AWS + Cloudflare.",
};

export default function CaseIndexSv() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Case"
        title="Riktiga system. Riktigt ägarskap."
        description="Ett urval av projekt där jag byggt plattformar, stabiliserat drift och levererat automation som faktiskt sparar tid."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Card
          href="/sv/case/bostadsagenturen"
          eyebrow="Fastighet · Sverige"
          title="Bostadsagenturen"
          description="CRM för ärendehantering + API-flöde för fakturahantering och e-postutskick. Löpande WordPress + SEO."
        />
        <Card
          href="/sv/case/clarity"
          eyebrow="Plattform · USA"
          title="Clarity"
          description="Tog över en befintlig plattform, förbättrade driftsäkerhet på AWS + Cloudflare och levererade nya AI-baserade verktyg."
        />
      </div>

      <div className="mt-10">
        <StrategyCallButton />
      </div>

      <div className="mt-14 rounded-3xl bg-white/[0.03] p-10 ring-1 ring-white/10">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Vill du ha liknande resultat?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          Om du behöver en teknisk ägare som kan ta ansvar för arkitektur,
          leverans och drift—hör av dig.
        </p>
        <div className="mt-6">
          <StrategyCallButton showSupportingText />
        </div>
      </div>
    </div>
  );
}

