import { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta mig för CRM, interna verktyg, AI-automation, API-integrationer eller löpande förvaltning av plattformar.",
};

export default function ContactSvPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Kontakt"
        title="Berätta vad ni vill bygga."
        description="Skicka lite kontext och constraints. Jag återkommer med ett pragmatiskt nästa steg: scope, arkitekturriktning och en plan för genomförande."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="rounded-3xl bg-white/[0.03] p-8 ring-1 ring-white/10">
          <ContactForm locale="sv" />
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Email
            </div>
            <a
              className="mt-3 block text-sm font-semibold text-white/85 hover:text-white"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Föredrar du mail? Skicka en kort beskrivning av problemet, nuvarande
              stack och tidslinje.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Vad du kan skicka med
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {[
                "Mål (hur ser success ut?)",
                "Nuvarande flöde/system och vad som krånglar",
                "Användare & behörigheter",
                "Integrationer (faktura, email, CRM, etc.)",
                "Önskad tidslinje + budgetspann om ni har det",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {site.calendly ? (
            <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
                Samtal
              </div>
              <a
                className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                Boka samtal
              </a>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

