import Image from "next/image";
import { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss a custom CRM, internal tool, AI automation, API integration, or ongoing platform ownership.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Contact"
        title="Tell me what you’re building."
        description="Share context and constraints. I’ll reply with a pragmatic next step: scope, architecture direction, and an execution plan."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="rounded-3xl bg-white/[0.03] p-8 ring-1 ring-white/10">
          <ContactForm locale="en" />
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <Image
              src={site.founderImage}
              alt="Marcus Christiansson, founder of Zylon Labs"
              width={120}
              height={120}
              className="size-24 rounded-full object-cover ring-1 ring-white/10"
            />
            <div className="mt-4 text-sm font-semibold text-white">
              Marcus Christiansson
            </div>
            <p className="mt-1 text-xs text-white/60">Founder, Zylon Labs</p>
          </div>
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
              Prefer email? Send a short description of the problem, current
              stack, and timeline.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              What to include
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {[
                "Your goal (what does success look like?)",
                "Current workflow/system and what’s breaking",
                "Users & permissions (who needs access?)",
                "Integrations (billing, email, CRM, etc.)",
                "Desired timeline + budget range if you have one",
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
                Strategy call
              </div>
              <div className="mt-4">
                <StrategyCallButton fullWidth showSupportingText />
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

