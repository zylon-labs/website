import Link from "next/link";

import { StrategyCallButton } from "@/components/StrategyCallButton";

export default function HomeSv() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/75 ring-1 ring-white/10">
            Skräddarsydda CRM, AI-automation och interna system för växande bolag
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Bygger skräddarsydda system som hjälper verksamheter att bli smartare.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Skräddarsydda CRM, interna verktyg, AI-automation, API-integrationer
            och skalbar cloud-infrastruktur (AWS + Cloudflare). Byggt för att
            vara underhållbart, säkert och snabbt.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start">
            <StrategyCallButton showSupportingText className="sm:shrink-0" />
            <a
              href="/sv/tjanster"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15 sm:self-start"
            >
              Se tjänster
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-white/65 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
                Vanliga projekt
              </div>
              <div className="mt-2 text-white/80">
                CRM-plattformar, automation, dashboards, interna appar
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
                Upplägg
              </div>
              <div className="mt-2 text-white/80">
                Fast scope, timpris eller retainer
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
                Var
              </div>
              <div className="mt-2 text-white/80">Sverige · USA · Remote</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Problem jag löser
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Det här är arbetet som skapar hävstång: färre manuella steg, färre
              incidenter, mer överblick och system som faktiskt håller.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
            {[
              "Verksamheten bygger på Excel och manuella flöden",
              "Ni behöver ett CRM eller internt system som passar er process",
              "Ni vill använda AI på riktigt (inte bara demo)",
              "Integrationer/API:er är sköra eller odokumenterade",
              "Infrastrukturen känns dyr, fragil eller svår att förstå",
              "Ni har tagit över ett system och behöver en stabil ägare",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Tjänster
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Helhetsleverans—från arkitektur och implementation till drift och
              kontinuerliga förbättringar.
            </p>
          </div>
          <a
            href="/sv/tjanster"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline"
          >
            Se alla tjänster <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Skräddarsydda CRM & interna system",
              desc: "Bygg plattformen ni behöver—flöden, behörigheter, spårbarhet och snabb UI.",
            },
            {
              title: "AI-verktyg & automation",
              desc: "Automatisera dokumentflöden, sammanfattning, klassning och support—pragmatiskt och säkert.",
            },
            {
              title: "API-utveckling & integrationer",
              desc: "Robusta API:er, integrationer och bakgrundsjobb med observability och versionering.",
            },
            {
              title: "Cloud-arkitektur (AWS + Cloudflare)",
              desc: "Säker och skalbar infrastruktur med rimlig kostnadskontroll och tydliga runbooks.",
            },
            {
              title: "Förvaltning & skalning",
              desc: "Ta över befintliga system: buggar, refaktorering, prestanda och uppgraderingar.",
            },
            {
              title: "Teknisk partner på retainer",
              desc: "Löpande utveckling + driftstöd med förutsägbar månadscykel.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10"
            >
              <div className="text-base font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <StrategyCallButton />
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Utvalda case
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Riktigt arbete: byggda system, stabiliserade plattformar och drift
              som fortsätter rulla.
            </p>
          </div>
          <a
            href="/sv/case"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline"
          >
            Se case <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a
            href="/sv/case/bostadsagenturen"
            className="group rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.05]"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Fastighet · Sverige
            </div>
            <div className="mt-2 text-base font-semibold text-white">
              Bostadsagenturen
            </div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Byggde ett CRM för ärendehantering, automatiserade fakturaflöden,
              och hanterade WordPress + SEO.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/80 group-hover:text-white">
              Läs caset <span aria-hidden>→</span>
            </div>
          </a>

          <a
            href="/sv/case/clarity"
            className="group rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.05]"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Plattform · USA
            </div>
            <div className="mt-2 text-base font-semibold text-white">
              Clarity
            </div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Tog över en befintlig plattform, byggde AI-baserade redigeringsverktyg
              och säkrade stabil drift på AWS + Cloudflare.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/80 group-hover:text-white">
              Läs caset <span aria-hidden>→</span>
            </div>
          </a>
        </div>

        <div className="mt-10">
          <StrategyCallButton />
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="rounded-3xl bg-white/[0.03] p-10 ring-1 ring-white/10">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Vill du bygga något som håller i produktion?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
            Berätta vad ni vill bygga, vad som krånglar idag och hur “bra” ser
            ut. Jag föreslår en pragmatisk plan—arkitektur, tidslinje och vad som
            krävs för att förvalta det långsiktigt.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
            <StrategyCallButton showSupportingText className="sm:shrink-0" />
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15 sm:self-start"
            >
              Read in English
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

