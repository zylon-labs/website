import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "AWS + Cloudflare",
  description:
    "AWS och Cloudflare konsult: säkrare, mer driftsäker och mer kostnadseffektiv infrastruktur med tydliga drift-rutiner.",
};

export default function AwsCloudflareSvLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Lösning"
        title="AWS + Cloudflare för driftsäkra plattformar."
        description="Säker infrastruktur, förutsägbara deploys, observability och pragmatisk kostnadskontroll—utan överengineering."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Målet: tråkig drift</h2>
            <p className="text-sm leading-7 text-white/70">
              En hälsosam plattform är förutsägbar: deploys går att upprepa,
              larm är actionabla och du kan snabbt svara på “vad ändrades?”.
              Jag hjälper team att komma dit—oavsett om ni bygger nytt eller har
              ärvt ett stökigt upplägg.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Vanliga förbättringar</h2>
            <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "Security baseline (least privilege, secrets, nätverk)",
                  "CI/CD, staging vs prod, rollbacks och release-säkerhet",
                  "Observability: loggar, metrics och larm som går att lita på",
                  "Cloudflare: DNS, cache-strategi, WAF/rate limiting",
                  "Kostnadskontroll: rensa waste och införa guardrails",
                  "Runbooks, backups och incident-beredskap",
                ].map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Relaterat
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <a className="block hover:text-white" href="/sv/losningar/forvaltning">
                Förvaltning / retainer
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
              Om ni vill ha färre incidenter och tydligare deploys kan jag hjälpa
              er stabilisera och förbättra er AWS + Cloudflare setup.
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

