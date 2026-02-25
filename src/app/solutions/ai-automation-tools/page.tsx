import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "AI automation tools",
  description:
    "Practical AI automation for business workflows: document processing, summarization, classification, and safe human-in-the-loop systems.",
};

export default function AiAutomationLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Solution"
        title="AI automation that works in production."
        description="Not demos. Not buzzwords. Real workflows that reduce manual work while keeping quality and control."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              What “practical AI” looks like
            </h2>
            <p className="text-sm leading-7 text-white/70">
              The best AI projects start with a bottleneck: time spent reading,
              classifying, rewriting, extracting, or routing information. Then
              we build a system that’s observable, testable, and safe—often with
              human review at the right step.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Typical workflows</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Document processing (PDFs, contracts)",
                  desc: "Extract key fields, summarize changes, route for approval, and keep an audit trail.",
                },
                {
                  title: "Email and ticket triage",
                  desc: "Classify incoming messages, suggest replies, and route to the right owner with confidence signals.",
                },
                {
                  title: "Invoice understanding",
                  desc: "Read invoices, structure line items, and produce human-friendly summaries for finance workflows.",
                },
                {
                  title: "Internal knowledge assistance",
                  desc: "Find answers in docs and systems using safe retrieval patterns and permissions.",
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
              Reliability and safety principles
            </h2>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "Design for review: add checkpoints where human judgement matters",
                "Measure quality: samples, eval sets, and clear acceptance criteria",
                "Build observability: logs, metrics, and error paths you can debug",
                "Respect permissions: retrieve only what the user is allowed to see",
                "Prefer small wins: ship value fast, then widen scope safely",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do we need to train a model?",
                  a: "Often no. Many problems can be solved with good prompting, retrieval, and workflow design. Training comes later if it’s clearly justified.",
                },
                {
                  q: "How do we avoid hallucinations?",
                  a: "Constrain the task, retrieve trusted sources, require citations where possible, and add human review for high-risk decisions.",
                },
                {
                  q: "Can this integrate with our existing systems?",
                  a: "Yes—AI is most valuable when connected to your APIs, documents, and internal workflows.",
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
              If you want AI that reduces manual work while staying reliable,
              I can help you design a safe workflow and ship the first automation
              quickly.
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

