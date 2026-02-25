import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Clarity",
  description:
    "Case: tog över och vidareutvecklade en plattform, förbättrade driftsäkerhet och byggde AI WYSIWYG-verktyg. Drift på AWS + Cloudflare.",
};

export default function CaseClaritySv() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Case · USA"
        title="Clarity"
        description="Förvaltning och vidareutveckling: ägarskap av ett befintligt system, nya AI-baserade features och stabil drift på AWS + Cloudflare."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Bakgrund</h2>
            <p className="text-sm leading-7 text-white/70">
              Clarity hade en befintlig plattform byggd av tidigare utvecklare.
              Behovet var långsiktigt ägarskap: förbättra driftsäkerhet, förstå
              systemets svagheter och fortsätta leverera features utan att
              riskera produktion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Det jag levererade</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Ägarskap & modernisering",
                  desc: "Stabiliserade leverans, minskade operativ risk och itererade på arkitekturen där det gav tydligt värde.",
                },
                {
                  title: "AI WYSIWYG-verktyg",
                  desc: "Byggde AI-assisterade redigeringsflöden för verkliga behov—med kontroll och kvalitet i fokus.",
                },
                {
                  title: "AWS + Cloudflare drift",
                  desc: "Säkrade att plattformen är uppe: deploys, övervakning, incidenthantering och kontinuerliga förbättringar.",
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
                "Stabilt ägarskap: någon som tar ansvar för drift och leverans",
                "Nya möjligheter utan att tappa kontroll över komplexiteten",
                "Tydligare drift: övervakning, deploy-path och incidentberedskap",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Vad som gör den här typen av projekt framgångsrika
            </h2>
            <p className="text-sm leading-7 text-white/70">
              Att ta över en befintlig plattform handlar mest om prioritering
              och riskhantering: observability, säkra deploy-mönster och en
              roadmap som betalar av rätt teknisk skuld—inte all.
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
                "Förvaltning",
                "AWS",
                "Cloudflare",
                "AI-verktyg",
                "WYSIWYG",
                "Modernisering",
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
              Om ni har ärvt ett system (eller teamet är överbelastat) och behöver
              en pålitlig teknisk ägare kan jag ta över och driva en säker,
              mätbar förbättringsplan.
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

