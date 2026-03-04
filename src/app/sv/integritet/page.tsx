import Link from "next/link";
import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Integritetspolicy för Zylon Labs. Hur vi samlar in, använder och skyddar dina uppgifter när du använder vår webbplats och tjänster.",
};

export default function IntegritetPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Juridiskt"
        title="Integritetspolicy"
        description="Hur vi hanterar dina uppgifter när du använder vår webbplats och kontaktar oss."
      />

      <Container className="mt-12">
        <article className="prose prose-invert prose-zinc max-w-none">
          <div className="space-y-8 text-sm leading-6 text-white/80">
            <section>
              <h2 className="text-base font-semibold text-white">
                Vem vi är
              </h2>
              <p>
                {site.legalName} ({site.name}) är ett företag baserat i Sverige.
                Du når oss på {site.email}.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                Vilka uppgifter vi samlar in
              </h2>
              <p>
                När du använder denna webbplats eller kontaktar oss kan vi samla
                in:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Uppgifter du anger (namn, e-post, meddelande) via kontaktformuläret</li>
                <li>Grundläggande användningsdata via Google Analytics (anonymiserat)</li>
                <li>Tekniska data som IP-adress och webbläsartyp för säkerhet och analys</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                Hur vi använder dina uppgifter
              </h2>
              <p>
                Vi använder dina uppgifter för att svara på förfrågningar, förbättra
                våra tjänster och förstå hur besökare använder webbplatsen. Vi
                säljer eller delar inte dina uppgifter med tredje part för
                marknadsföring.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                Cookies och analys
              </h2>
              <p>
                Vi använder Google Analytics för att förstå webbtrafik. Du kan
                styra cookie-inställningar i din webbläsare.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                Dina rättigheter
              </h2>
              <p>
                Du har rätt att begära tillgång till, rättelse av eller radering
                av dina personuppgifter. Kontakta oss på {site.email} för att
                utöva dessa rättigheter.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                Ändringar
              </h2>
              <p>
                Vi kan uppdatera denna policy. Den senaste versionen finns alltid
                på denna sida.
              </p>
            </section>

            <section>
              <p className="text-white/60">
                Senast uppdaterad: mars 2026. © {new Date().getFullYear()} {site.name}.
              </p>
              <p className="mt-4">
                <Link
                  href="/privacy"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Read in English
                </Link>
              </p>
            </section>
          </div>
        </article>
      </Container>
    </div>
  );
}
