import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "Custom CRM development",
  description:
    "Custom CRM development for growing companies. Replace spreadsheets and fragmented tools with a workflow-first platform that’s maintainable and scalable.",
};

export default function CustomCrmLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Solution"
        title="Custom CRM development that fits how you actually work."
        description="If your business runs on spreadsheets, emails, and scattered tools, a workflow-first CRM can unify operations—and make execution measurably faster."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              When a custom CRM makes sense
            </h2>
            <p className="text-sm leading-7 text-white/70">
              Off-the-shelf CRMs are great when your process matches the tool.
              But many teams end up bending the business around the software—or
              building fragile workarounds. A custom CRM is ideal when your
              workflow is the product: approvals, case handling, document flows,
              multi-step processes, and integrations that must be reliable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Typical use cases
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Case & ticket handling",
                  desc: "Statuses, ownership, SLAs, audit trails, and reports that match your reality.",
                },
                {
                  title: "Sales & pipeline",
                  desc: "Custom stages, lead qualification, handoff rules, and insights based on your data.",
                },
                {
                  title: "Internal operations",
                  desc: "Replace manual back-office flows with a single system of record and automations.",
                },
                {
                  title: "Regulated workflows",
                  desc: "Permissions, logs, approvals, and data retention designed for compliance.",
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
            <h2 className="text-xl font-semibold text-white">
              How I approach CRM projects
            </h2>
            <p className="text-sm leading-7 text-white/70">
              A custom CRM succeeds when it’s built around workflows, not
              fields. The first step is mapping the lifecycle: what enters the
              system, who touches it, how decisions are made, and what must be
              observable. Then we build a minimal, production-ready core and
              iterate.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Discovery: workflows, roles, edge cases, data model",
                "Architecture: API boundaries, auth, integrations, auditability",
                "Delivery: ship a core MVP fast, then expand safely",
                "Operations: monitoring, alerts, backups, and clear runbooks",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Deliverables you can expect
            </h2>
            <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "A workflow-first UI built for speed and clarity",
                  "APIs with versioning and documentation",
                  "Integrations (email, billing, external CRMs) with observability",
                  "Permissions, audit logs, and data integrity safeguards",
                  "Production operations: monitoring, alerts, backups, deploy process",
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
                  q: "How long does a custom CRM take?",
                  a: "A usable core can often ship in weeks, with iteration after. The right answer depends on workflow complexity, integrations, and quality requirements.",
                },
                {
                  q: "Should we build or buy?",
                  a: "If your workflow is unique and you’re spending real time on workarounds—or losing data/quality—custom often wins. If you’re early and flexible, buying can be faster.",
                },
                {
                  q: "Can you take over an existing CRM/system?",
                  a: "Yes. I often start by stabilizing operations, adding observability, and then modernizing safely.",
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
              <a className="block hover:text-white" href="/services">
                Services overview
              </a>
              <a
                className="block hover:text-white"
                href="/solutions/api-development-integrations"
              >
                API development & integrations
              </a>
              <a
                className="block hover:text-white"
                href="/solutions/platform-maintenance-retainer"
              >
                Platform maintenance & retainer
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Talk to me
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              If you want to replace spreadsheets with a CRM that actually fits
              your workflow, I can help you scope the first phase and ship a
              production-ready core.
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

