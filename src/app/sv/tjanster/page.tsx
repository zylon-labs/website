import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Skräddarsydda CRM, interna system, AI-automation, API-integrationer och cloud-arkitektur (AWS + Cloudflare).",
};

export default function ServicesSvPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Tjänster"
        title="Bygg system som skalar med verksamheten."
        description="Jag hjälper företag att designa, bygga och drifta pålitlig mjukvara: CRM, interna verktyg, AI-automation, API-integrationer och produktionsredo cloud-infrastruktur."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Skräddarsydda CRM & interna plattformar",
            bullets: [
              "Workflow-first design anpassad efter er process",
              "Behörigheter, audit logs och dataintegritet",
              "Snabb UI + underhållbar backend-arkitektur",
            ],
          },
          {
            title: "AI-verktyg & automation",
            bullets: [
              "Dokumenthantering (PDF, avtal, sammanfattningar)",
              "Human-in-the-loop där det behövs",
              "Säkra mönster och mätbar effekt",
            ],
          },
          {
            title: "API-utveckling & integrationer",
            bullets: [
              "Versionerade API:er, bakgrundsjobb och webhooks",
              "Integrationer mot faktura, CRM, email och interna system",
              "Observability: loggar, metrics och larm",
            ],
          },
          {
            title: "Cloud-arkitektur (AWS + Cloudflare)",
            bullets: [
              "Säkerhet: nätverk, auth och secrets",
              "CI/CD, miljöer och kostnadskontroll",
              "Runbooks och incidentvänlig drift",
            ],
          },
          {
            title: "Förvaltning, skalning & modernisering",
            bullets: [
              "Ta över befintliga kodbaser och stabilisera leverans",
              "Prestanda, uppgraderingar och refaktorering",
              "Minska drift-risk utan överengineering",
            ],
          },
          {
            title: "Teknisk partner på retainer",
            bullets: [
              "Löpande utveckling + driftstöd",
              "Förutsägbar månadscykel och prioritering",
              "En stabil ägare för er plattform",
            ],
          },
        ].map((s) => (
          <div
            key={s.title}
            className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10"
          >
            <div className="text-base font-semibold text-white">{s.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-white/[0.03] p-10 ring-1 ring-white/10">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Osäker på var du ska börja?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          Boka ett kort samtal så hjälper jag dig välja första steget: vad ni
          ska bygga nu, vad som kan vänta, och hur ni förvaltar det långsiktigt.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="/sv/kontakt"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Kontakta / boka samtal
          </a>
          <a
            href="/sv/case"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
          >
            Se case
          </a>
        </div>
      </div>
    </div>
  );
}

