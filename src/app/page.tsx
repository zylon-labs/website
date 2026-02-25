import { StrategyCallButton } from "@/components/StrategyCallButton";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/75 ring-1 ring-white/10">
            Technical partner for growing companies
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            I build complex systems that make businesses run smarter.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Custom CRMs, internal tools, AI automation, API integrations, and
            scalable cloud infrastructure (AWS + Cloudflare). Built to be
            maintainable, secure, and fast.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start">
            <StrategyCallButton showSupportingText className="sm:shrink-0" />
            <a
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15 sm:self-start"
            >
              View services
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-white/65 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
                Typical projects
              </div>
              <div className="mt-2 text-white/80">
                CRM platforms, automation pipelines, dashboards, internal apps
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
                Engagements
              </div>
              <div className="mt-2 text-white/80">
                Fixed scope, hourly, or retainer
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
                Locations
              </div>
              <div className="mt-2 text-white/80">Sweden · US · Remote</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Problems I solve
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              This is the work that creates leverage: fewer manual steps, fewer
              incidents, more clarity, and systems your team can actually rely
              on.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
            {[
              "Your business runs on spreadsheets and manual workflows",
              "You need a custom CRM or internal platform that fits your process",
              "You want AI in a practical way (not demos)",
              "APIs/integrations are brittle or undocumented",
              "Your infrastructure feels fragile or expensive",
              "You inherited a system and need a reliable owner",
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
              Services
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              End-to-end delivery—from architecture and implementation to
              operations and continuous improvements.
            </p>
          </div>
          <a
            href="/services"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline"
          >
            See all services <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Custom CRM & internal systems",
              desc: "Build the platform your team actually needs—workflows, permissions, auditability, and fast UI.",
            },
            {
              title: "AI tools & automation",
              desc: "Automate document flows, summarization, classification, and customer support—safely and pragmatically.",
            },
            {
              title: "API development & integrations",
              desc: "Reliable APIs, integrations, and background jobs with observability and versioning.",
            },
            {
              title: "Cloud architecture (AWS + Cloudflare)",
              desc: "Secure, scalable infrastructure with sensible cost control and clear runbooks.",
            },
            {
              title: "Maintenance & scaling",
              desc: "Take ownership of existing systems: fixes, refactors, performance, and upgrades.",
            },
            {
              title: "Technical partner on retainer",
              desc: "Ongoing development + operations support with predictable monthly cadence.",
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
              Featured case studies
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Real work: systems built, platforms stabilized, and operations that
              keep running.
            </p>
          </div>
          <a
            href="/case-studies"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline"
          >
            View case studies <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a
            href="/case-studies/bostadsagenturen"
            className="group rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.05]"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Real estate · Sweden
            </div>
            <div className="mt-2 text-base font-semibold text-white">
              Bostadsagenturen
            </div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Built a custom CRM for case handling, automated invoice processing,
              and maintained WordPress + SEO.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/80 group-hover:text-white">
              Read the case <span aria-hidden>→</span>
            </div>
          </a>

          <a
            href="/case-studies/clarity"
            className="group rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.05]"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Platform · US
            </div>
            <div className="mt-2 text-base font-semibold text-white">
              Clarity
            </div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Took over an existing platform, built new AI-powered editing tools,
              and ensured reliable operations on AWS + Cloudflare.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/80 group-hover:text-white">
              Read the case <span aria-hidden>→</span>
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
            Want a system that actually holds up in production?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
            Tell me what you’re trying to build, what’s currently breaking, and
            what “good” looks like. I’ll propose a pragmatic plan—architecture,
            timeline, and what it will take to maintain it long-term.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
            <StrategyCallButton showSupportingText className="sm:shrink-0" />
            <a
              href="/sv"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15 sm:self-start"
            >
              Läs på svenska
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
