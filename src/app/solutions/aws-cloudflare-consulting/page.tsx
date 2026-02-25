import { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { StrategyCallButton } from "@/components/StrategyCallButton";

export const metadata: Metadata = {
  title: "AWS + Cloudflare consulting",
  description:
    "AWS and Cloudflare consulting for teams that need reliable, secure, and cost-aware infrastructure with clear operational practices.",
};

export default function AwsCloudflareLanding() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <PageIntro
        eyebrow="Solution"
        title="AWS + Cloudflare consulting for reliable platforms."
        description="Secure infrastructure, predictable deployments, observability, and pragmatic cost control—without overengineering."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              The goal: boring operations
            </h2>
            <p className="text-sm leading-7 text-white/70">
              A healthy platform is predictable: deploys are repeatable, alerts
              are actionable, and you can answer “what changed?” quickly. I help
              teams get there—whether you’re building fresh or inheriting a
              messy setup.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              What I typically improve
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Security baseline",
                  desc: "Principle of least privilege, secret handling, secure networking, and sane access patterns.",
                },
                {
                  title: "Deployments & environments",
                  desc: "CI/CD, staging vs prod, migrations, rollbacks, and safe release practices.",
                },
                {
                  title: "Observability",
                  desc: "Structured logs, metrics, traces where needed, and alerts you can trust.",
                },
                {
                  title: "Cloudflare edge",
                  desc: "Caching, WAF, rate limiting, bot mitigation, and DNS that’s managed deliberately.",
                },
                {
                  title: "Cost control",
                  desc: "Remove waste, right-size, and implement simple guardrails so cost doesn’t drift.",
                },
                {
                  title: "Reliability practices",
                  desc: "Runbooks, incident response, backups, and operational ownership.",
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
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
            <div className="space-y-3">
              {[
                {
                  q: "We already have AWS—why is it still unstable?",
                  a: "Often it’s missing operational foundations: observability, deploy safety, and clear ownership. Cloud services don’t automatically create good ops.",
                },
                {
                  q: "Can you help with Cloudflare configuration?",
                  a: "Yes. DNS, caching strategy, WAF/rate limiting, bot mitigation, and edge behavior should support your threat model and product needs.",
                },
                {
                  q: "Do you do one-off audits?",
                  a: "Yes. A short audit can produce a prioritized plan: quick wins, medium fixes, and longer-term improvements.",
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
                href="/solutions/platform-maintenance-retainer"
              >
                Platform maintenance & retainer
              </a>
              <a
                className="block hover:text-white"
                href="/solutions/api-development-integrations"
              >
                API development & integrations
              </a>
              <a className="block hover:text-white" href="/case-studies/clarity">
                Case: Clarity
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
              Talk to me
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              If you want fewer incidents, clearer deployments, and an infra you
              can trust, I can help you stabilize and improve your AWS +
              Cloudflare setup.
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

