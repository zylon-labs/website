import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Skräddarsytt CRM",
  description:
    "Skräddarsytt CRM för växande bolag. Ersätt Excel och fragmenterade verktyg med en plattform byggd runt era flöden.",
};

export default function CustomCrmSvLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Lösning"
        title="Skräddarsytt CRM som passar hur ni faktiskt jobbar."
        description="När verksamheten bygger på Excel, mail och ad-hoc processer kan ett workflow-first CRM samla allt—och göra arbetet snabbare och mer spårbart."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              När ett eget CRM är rätt
            </h2>
            <p className="text-sm leading-7 text-white/70">
              Standard-CRM fungerar när ert arbetssätt matchar verktyget. Men om
              flödena är unika (ärendehantering, dokumentflöden, approvals,
              integrationer) blir workarounds snabbt sköra. Då är ett
              skräddarsytt CRM ofta mer effektivt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Vanliga use cases</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Ärendehantering",
                  desc: "Status, ägare, SLA, audit trail och rapporter som speglar verkligheten.",
                },
                {
                  title: "Sälj/pipeline",
                  desc: "Egna steg, regler för handover och insikter baserat på er data.",
                },
                {
                  title: "Intern drift",
                  desc: "Ersätt manuella backoffice-flöden med en system of record + automation.",
                },
                {
                  title: "Reglerade flöden",
                  desc: "Behörigheter, loggar och approvals med spårbarhet och dataintegritet.",
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
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Hur lång tid tar det?",
                  a: "En användbar core kan ofta levereras på veckor, med iteration efteråt. Det beror på flödets komplexitet och integrationer.",
                },
                {
                  q: "Kan du ta över ett befintligt system?",
                  a: "Ja. Jag börjar ofta med att stabilisera drift och lägga observability, sedan modernisera säkert.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.q}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
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
              Vill ni gå från Excel till en plattform som faktiskt passar era
              flöden? Jag kan hjälpa er scopa första fasen och leverera en
              produktionsredo core.
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

