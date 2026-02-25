import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "AI-automation",
  description:
    "Praktisk AI-automation för verksamhetsflöden: dokumenthantering, sammanfattning, klassning och säkra human-in-the-loop processer.",
};

export default function AiAutomationSvLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Lösning"
        title="AI-automation som fungerar i produktion."
        description="Inte demo. Inte buzzwords. Riktiga flöden som minskar manuellt arbete med kvalitet och kontroll."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Vad “praktisk AI” betyder
            </h2>
            <p className="text-sm leading-7 text-white/70">
              De bästa AI-projekten börjar med en flaskhals: tid som går åt till
              att läsa, klassificera, extrahera eller routa information. Sen
              bygger vi ett system som är observerbart, testbart och säkert—ofta
              med human review i rätt steg.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Vanliga flöden</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Dokument (PDF/avtal)",
                  desc: "Extrahera nyckelfält, sammanfatta ändringar och routa för godkännande med spårbarhet.",
                },
                {
                  title: "Mail/ticket-triage",
                  desc: "Klassificera inkommande, föreslå svar och routa till rätt ägare med tydlighet.",
                },
                {
                  title: "Fakturaförståelse",
                  desc: "Läsa fakturor, strukturera rader och skapa lättlästa sammanfattningar för ekonomi-flöden.",
                },
                {
                  title: "Intern kunskap",
                  desc: "Hitta svar i dokument och system med säkra retrieval-mönster och behörigheter.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10"
                >
                  <div className="text-base font-semibold text-white">
                    {x.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {x.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Principer</h2>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "Design för granskning där det behövs",
                "Mät kvalitet med exempel/eval-set och tydliga kriterier",
                "Observability: loggar och felvägar du kan debugga",
                "Respektera behörigheter och dataklassning",
                "Små vinster först—bredda scope säkert",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Relaterat
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <a className="block hover:text-white" href="/sv/tjanster">
                Tjänster
              </a>
              <a className="block hover:text-white" href="/sv/losningar/api">
                API & integrationer
              </a>
              <a className="block hover:text-white" href="/sv/kontakt">
                Kontakt
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Nästa steg
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Vill ni automatisera ett konkret flöde och se effekt snabbt? Jag
              kan hjälpa er designa en säker workflow och leverera första
              automationen.
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

