import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "Bostadsagenturen",
  description:
    "Case: CRM-utveckling, faktura-automation via API, samt löpande WordPress + SEO för en svensk aktör inom fastighet.",
};

export default function CaseBostadsagenturenSv() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Case · Sverige"
        title="Bostadsagenturen"
        description="CRM för ärendehantering, automation för fakturaflöden och löpande WordPress + SEO."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Bakgrund</h2>
            <p className="text-sm leading-7 text-white/70">
              Bostadsagenturen behövde ett stabilt internt system för vardagens
              arbete—ärenden, uppgifter, kundkommunikation och data som tidigare
              låg utspritt mellan verktyg och manuella flöden.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Det jag byggde</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Skräddarsytt CRM",
                  desc: "Ett CRM som täcker hela ärendets livscykel: intake, tilldelning, status, anteckningar och rapportering.",
                },
                {
                  title: "Automation för fakturahantering",
                  desc: "Ett API-flöde som läser, strukturerar och sammanfattar fakturor och skickar ut dem via e-post—mindre manuell hantering och mer konsekvens.",
                },
                {
                  title: "WordPress + SEO",
                  desc: "Löpande uppdateringar, stöd vid publicering och SEO-förbättringar för ökad organisk synlighet över tid.",
                },
                {
                  title: "Dokumenthantering",
                  desc: "Stöd för dokumentflöden, bl.a. uppdateringar och generering av PDF-avtal när verksamheten behövde ändringar.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10"
                >
                  <div className="text-base font-semibold text-white">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Resultat</h2>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "En samlad plats för operativt arbete—färre verktyg och mindre dubbelarbete",
                "Snabbare fakturaflöde med färre manuella steg",
                "En plattform som kan byggas vidare på när verksamheten utvecklas",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Arbetssätt</h2>
            <p className="text-sm leading-7 text-white/70">
              För interna system handlar det inte om “flest features”, utan om
              driftsäkerhet, snabb iteration och en plattform teamet kan äga
              långsiktigt. Jag fokuserar på tydliga flöden, observability och
              bra avvägningar mellan flexibilitet och enkelhet.
            </p>
          </section>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Nyckelord
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {[
                "CRM-utveckling",
                "Interna verktyg",
                "Automation",
                "API-integration",
                "WordPress",
                "SEO",
              ].map((k) => (
                <span
                  key={k}
                  className="rounded-full bg-white/5 px-3 py-1 text-white/75 ring-1 ring-white/10"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Nästa steg
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Om ni funderar på ett CRM eller en intern plattform kan jag hjälpa
              er kartlägga flöden, välja rätt scope och bygga något som är
              tryggt att drifta.
            </p>
            <div className="mt-4">
              <StrategyCallButton fullWidth />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
