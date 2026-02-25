import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "Platform maintenance & retainer",
  description:
    "Ongoing platform maintenance and technical ownership. Stabilize delivery, improve reliability, and keep systems evolving with a predictable cadence.",
};

export default function MaintenanceRetainerLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Solution"
        title="A reliable technical owner for your platform."
        description="If you’ve inherited a system, lost the original developers, or your team is overloaded—retainer-style ownership keeps delivery moving and production stable."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              What maintenance really means
            </h2>
            <p className="text-sm leading-7 text-white/70">
              Maintenance isn’t just bug fixes. It’s keeping systems safe to
              change: upgrades, refactors, performance, observability, and
              operational hygiene. Done well, it reduces incidents and makes new
              features cheaper to ship.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Common retainer outcomes
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Fewer incidents",
                  desc: "Better alerting, safer deploys, clearer error handling, and predictable recovery paths.",
                },
                {
                  title: "Faster delivery",
                  desc: "Pay down the technical debt that blocks progress, without rewriting everything.",
                },
                {
                  title: "Upgrades without fear",
                  desc: "Framework and dependency upgrades, security patches, and migrations handled deliberately.",
                },
                {
                  title: "Visible progress",
                  desc: "A clear backlog, priorities, and weekly/monthly checkpoints so stakeholders stay aligned.",
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
            <h2 className="text-xl font-semibold text-white">What I do first</h2>
            <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "Map risk: uptime, data integrity, security, and deploy process",
                  "Add observability: logs/metrics/alerts that point to root causes",
                  "Stabilize delivery: safe releases, rollbacks, and environments",
                  "Create a prioritized improvement plan with quick wins",
                ].map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Can you work alongside our existing dev team?",
                  a: "Yes. I can take on ownership areas (infra, integrations, specific subsystems) or act as a technical lead for reliability and architecture.",
                },
                {
                  q: "Is retainer only for big companies?",
                  a: "No. Retainer works well for any business where the platform is business-critical and needs consistent attention.",
                },
                {
                  q: "Do you also build new features?",
                  a: "Absolutely—maintenance and feature delivery should move together. The key is balancing speed with operational safety.",
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
              Related
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <a className="block hover:text-white" href="/case-studies">
                Case studies
              </a>
              <a
                className="block hover:text-white"
                href="/solutions/aws-cloudflare-consulting"
              >
                AWS + Cloudflare consulting
              </a>
              <a
                className="block hover:text-white"
                href="/solutions/custom-crm-development"
              >
                Custom CRM development
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Talk to me
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              If you need a stable owner for your platform, I can take over and
              create a safe, predictable cadence for improvements and feature
              delivery.
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

