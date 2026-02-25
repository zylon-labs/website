import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "Bostadsagenturen",
  description:
    "Case study: custom CRM development, invoice automation via API, and ongoing WordPress + SEO support for a Swedish real estate agency.",
};

export default function CaseBostadsagenturen() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Case study · Sweden"
        title="Bostadsagenturen"
        description="Custom CRM for full case handling, automation for invoice workflows, and ongoing maintenance of WordPress + SEO."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Context</h2>
            <p className="text-sm leading-7 text-white/70">
              Bostadsagenturen needed a reliable internal system to handle
              day-to-day operations—cases, tasks, customer communication, and
              data that had previously lived in a mix of tools and manual
              workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">What I built</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Custom CRM",
                  desc: "A purpose-built CRM covering the full case lifecycle: intake, assignment, status tracking, notes, and reporting.",
                },
                {
                  title: "Invoice processing automation",
                  desc: "An API workflow that reads, structures, and summarizes invoices, then sends them out via email—reducing manual handling and improving consistency.",
                },
                {
                  title: "WordPress + SEO",
                  desc: "Ongoing updates, content publishing support, and SEO improvements to increase organic visibility over time.",
                },
                {
                  title: "Document handling",
                  desc: "Helped streamline document workflows, including updating and generating PDF agreements when the business needed changes.",
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
            <h2 className="text-xl font-semibold text-white">Outcome</h2>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "One place for operational work—fewer tools and less duplication",
                "Faster invoice handling with fewer manual steps",
                "A system that can be extended as the business evolves",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">How I work</h2>
            <p className="text-sm leading-7 text-white/70">
              For internal systems, the goal is not “feature count”—it’s
              reliability, speed of iteration, and a platform your team can own
              long-term. I focus on clear workflows, observability, and careful
              trade-offs between flexibility and simplicity.
            </p>
          </section>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Keywords
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {[
                "Custom CRM development",
                "Internal tools",
                "Automation",
                "API pipeline",
                "WordPress maintenance",
                "SEO",
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
              Next step
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              If you’re considering a custom CRM or internal platform, I can
              help you map workflows, define the right scope, and build a system
              that’s safe to operate.
            </p>
            <div className="mt-4">
              <StrategyCallButton fullWidth />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
