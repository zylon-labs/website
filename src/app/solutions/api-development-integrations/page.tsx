import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "API development & integrations",
  description:
    "API development and integrations for growing companies. Build reliable APIs, webhooks, background jobs, and integrations that don’t break at 2am.",
};

export default function ApiIntegrationsLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Solution"
        title="API development & integrations that stay reliable."
        description="Move data between systems safely. Build versioned APIs. Add observability. Reduce operational surprises."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              The real problem with integrations
            </h2>
            <p className="text-sm leading-7 text-white/70">
              Most integrations fail for boring reasons: missing idempotency,
              unclear ownership, no retry strategy, poor logging, and
              undocumented edge cases. A “working” integration isn’t enough—it
              must be diagnosable and resilient.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Common builds</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Public or internal APIs",
                  desc: "Versioned endpoints, auth, rate limits, documentation, and consistent error semantics.",
                },
                {
                  title: "Webhooks and event pipelines",
                  desc: "Safe processing, retries, deduplication, and backpressure so spikes don’t break you.",
                },
                {
                  title: "Background jobs",
                  desc: "Queues and workers for long-running tasks with monitoring and alerting.",
                },
                {
                  title: "3rd-party integrations",
                  desc: "Payments, invoicing, email, CRM, accounting, and internal systems—with audit trails.",
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
              Reliability checklist
            </h2>
            <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  "Idempotency (safe retries without duplicate side-effects)",
                  "Clear retry & backoff strategy (and when to stop)",
                  "Structured logs and correlation IDs",
                  "Alerting on error rates and stalled queues",
                  "Replay tooling for failed events",
                  "Documentation for payloads, versions, and breaking changes",
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
                  q: "Can you integrate with our legacy system?",
                  a: "Yes. I usually start by adding observability and safe retry patterns, then modernize incrementally.",
                },
                {
                  q: "Do we need microservices?",
                  a: "Not by default. Clear boundaries matter; you can get them in a modular monolith too. The goal is reliability and speed—not architecture for its own sake.",
                },
                {
                  q: "How do we handle breaking changes?",
                  a: "Versioning, deprecation windows, and contract tests. You should be able to evolve APIs without surprise downtime.",
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
              <a
                className="block hover:text-white"
                href="/solutions/custom-crm-development"
              >
                Custom CRM development
              </a>
              <a
                className="block hover:text-white"
                href="/solutions/aws-cloudflare-consulting"
              >
                AWS + Cloudflare consulting
              </a>
              <a className="block hover:text-white" href="/case-studies">
                Case studies
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Talk to me
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              If integrations are breaking or slowing you down, I can help you
              implement reliable patterns and build tooling that makes failures
              diagnosable.
            </p>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Contact / book a call
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

