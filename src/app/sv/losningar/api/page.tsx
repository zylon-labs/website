import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "API & integrationer",
  description:
    "API-utveckling och integrationer som håller. Versionering, retries, idempotens och observability för system som inte går sönder 02:00.",
};

export default function ApiSvLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Lösning"
        title="API & integrationer som förblir driftsäkra."
        description="Flytta data mellan system på ett säkert sätt. Bygg versionerade API:er. Lägg observability. Minska operativa överraskningar."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Varför integrationer oftast går sönder
            </h2>
            <p className="text-sm leading-7 text-white/70">
              De vanligaste orsakerna är tråkiga: ingen idempotens, otydlig
              ownership, dåliga retry-strategier, svaga loggar och odokumenterade
              edge cases. En “fungerande” integration räcker inte—den måste vara
              felsökningsbar och resilient.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Checklist</h2>
            <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "Idempotens (retries utan dubbel-effect)",
                  "Retry/backoff + tydliga stopvillkor",
                  "Strukturerade loggar + correlation IDs",
                  "Larm på felrate och fastnade köer",
                  "Replay-verktyg för misslyckade events",
                  "Versionering och deprecation-fönster",
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
              <a className="block hover:text-white" href="/sv/losningar/skraddarsytt-crm">
                Skräddarsytt CRM
              </a>
              <a className="block hover:text-white" href="/sv/losningar/ai-automation">
                AI-automation
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
              Om integrationer skapar driftproblem kan jag hjälpa er införa
              robusta mönster och tooling som gör fel lättare att förstå och
              åtgärda.
            </p>
            <div className="mt-4">
              <a
                href="/sv/kontakt"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Kontakta / boka samtal
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

