import Link from "next/link";
import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Zylon Labs. How we collect, use, and protect your data when you use our website and services.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle your data when you use our website and get in touch."
      />

      <Container className="mt-12">
        <article className="prose prose-invert prose-zinc max-w-none">
          <div className="space-y-8 text-sm leading-6 text-white/80">
            <section>
              <h2 className="text-base font-semibold text-white">
                Who we are
              </h2>
              <p>
                {site.legalName} ({site.name}) is a company based in Sweden. You
                can reach us at {site.email}.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                What data we collect
              </h2>
              <p>
                When you use this website or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Information you provide (name, email, message) when using the contact form</li>
                <li>Basic usage data via Google Analytics (anonymized, no personal identification)</li>
                <li>Technical data such as IP address and browser type for security and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                How we use your data
              </h2>
              <p>
                We use your data to respond to inquiries, improve our services,
                and understand how visitors use our website. We do not sell or
                share your data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                Cookies and analytics
              </h2>
              <p>
                We use Google Analytics to understand website traffic. You can
                control cookie preferences in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                Your rights
              </h2>
              <p>
                You have the right to request access to, correction of, or
                deletion of your personal data. Contact us at {site.email} to
                exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-white">
                Changes
              </h2>
              <p>
                We may update this policy from time to time. The latest version
                will always be available on this page.
              </p>
            </section>

            <section>
              <p className="text-white/60">
                Last updated: March 2026. © {new Date().getFullYear()} {site.name}.
              </p>
              <p className="mt-4">
                <Link
                  href="/sv/integritet"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Läs på svenska
                </Link>
              </p>
            </section>
          </div>
        </article>
      </Container>
    </div>
  );
}
