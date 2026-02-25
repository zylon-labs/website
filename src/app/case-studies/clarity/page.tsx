import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "Clarity",
  description:
    "Case study: took over and modernized a platform, improved reliability, and built an AI WYSIWYG editor. Operations on AWS + Cloudflare.",
};

export default function CaseClarity() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Case study · US"
        title="Clarity"
        description="Platform maintenance and evolution: ownership of an existing system, new AI-powered features, and reliable operations on AWS + Cloudflare."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Context</h2>
            <p className="text-sm leading-7 text-white/70">
              Clarity had an existing platform built by previous developers. The
              main need was long-term ownership: improving reliability,
              understanding the system’s weak points, and continuing feature
              delivery without breaking production.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">What I delivered</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Platform ownership & modernization",
                  desc: "Stabilized delivery, reduced operational risk, and iterated on architecture where it produced clear value.",
                },
                {
                  title: "AI WYSIWYG tooling",
                  desc: "Built AI-assisted editing experiences focused on real workflows—not demos—so the team could ship content faster with quality control.",
                },
                {
                  title: "AWS + Cloudflare operations",
                  desc: "Ensured the platform stays up: deploys, monitoring, incident handling, and continuous reliability improvements.",
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
                "Reliable ownership: someone accountable for production stability",
                "New capabilities shipped without losing control of complexity",
                "Clearer operations: monitoring, deploy paths, and incident readiness",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/45" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              What makes these projects succeed
            </h2>
            <p className="text-sm leading-7 text-white/70">
              Taking over an existing platform is mostly about priorities and
              risk management: you need observability, safe deployment patterns,
              and a roadmap that pays down the right technical debt—not all of
              it.
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
                "Platform maintenance",
                "AWS consultant",
                "Cloudflare",
                "AI tools",
                "WYSIWYG editor",
                "Modernization",
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
              If you’ve inherited a system (or your team is overloaded) and need
              a reliable technical owner, I can take over and drive a safe,
              measurable improvement plan.
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

