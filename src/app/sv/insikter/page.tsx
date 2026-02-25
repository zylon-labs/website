import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Insikter",
  description:
    "Pragmatiska insikter om CRM, API-automation, AI-verktyg och stabil drift på AWS + Cloudflare.",
};

export default function InsightsSvPage() {
  const topics = [
    {
      title: "När du ska bygga ett eget CRM (och när du inte ska)",
      desc: "Ett ramverk för att välja mellan standardverktyg och en skräddarsydd plattform.",
    },
    {
      title: "AI-automation som fungerar i produktion",
      desc: "Hur du designar human-in-the-loop och mäter effekt—utan att skeppa demo.",
    },
    {
      title: "API-integrationer: driftsäkerhet före heroics",
      desc: "Versionering, idempotens, observability och varför integrationer ofta går sönder 02:00.",
    },
    {
      title: "Modern cloud drift utan överengineering",
      desc: "Praktiska AWS + Cloudflare-mönster för team som vill ha stabilitet och kostnadskontroll.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Insikter"
        title="System, AI och drift—utan fluff."
        description="Kort och pragmatiskt om arkitektur, automation och att hålla mjukvara stabil över tid."
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
              Kommer snart
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-white/[0.03] p-10 ring-1 ring-white/10">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Vill du att jag skriver om något specifikt?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          Om du står inför “build vs buy” eller har problem med driftsäkerhet
          delar jag gärna ett pragmatiskt angreppssätt.
        </p>
        <div className="mt-6">
          <a
            href="/sv/kontakt"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Kontakta mig
          </a>
        </div>
      </div>
    </div>
  );
}

