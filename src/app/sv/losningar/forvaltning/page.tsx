import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Förvaltning / retainer",
  description:
    "Löpande förvaltning och tekniskt ägarskap. Stabil drift, snabbare leverans och en förutsägbar takt för förbättringar.",
};

export default function MaintenanceSvLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Lösning"
        title="En stabil teknisk ägare för er plattform."
        description="Om ni har ärvt ett system, tappat originalutvecklarna eller teamet är överbelastat—retainer-ägarship håller leverans och drift i balans."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Vad förvaltning faktiskt innebär
            </h2>
            <p className="text-sm leading-7 text-white/70">
              Förvaltning är mer än buggar: uppgraderingar, refaktorering,
              prestanda, observability och drift-hygien. Gjort rätt minskar det
              incidenter och gör nya features billigare att leverera.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Första stegen</h2>
            <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "Kartlägg risk: uptime, data, säkerhet och deploy process",
                  "Lägg observability: loggar/metrics/larm som pekar på root cause",
                  "Stabilisera leverans: säkra releases och rollback",
                  "Prioriterad plan med quick wins och långsiktiga förbättringar",
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
              <a className="block hover:text-white" href="/sv/case">
                Case
              </a>
              <a className="block hover:text-white" href="/sv/losningar/aws-cloudflare">
                AWS + Cloudflare
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
              Behöver ni en teknisk ägare som kan ta ansvar för drift och
              vidareutveckling? Jag kan ta över och skapa en trygg, förutsägbar
              takt.
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

