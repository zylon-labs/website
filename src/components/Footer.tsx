import Link from "next/link";

import { site } from "@/lib/site";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">{site.name}</div>
            <p className="max-w-sm text-sm leading-6 text-white/70">
              {site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                Explore
              </div>
              <div className="space-y-2 text-white/75">
                <Link className="block hover:text-white" href="/services">
                  Services
                </Link>
                <Link className="block hover:text-white" href="/case-studies">
                  Case studies
                </Link>
                <Link className="block hover:text-white" href="/insights">
                  Insights
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                Contact
              </div>
              <div className="space-y-2 text-white/75">
                <Link className="block hover:text-white" href="/contact">
                  Contact page
                </Link>
                <a className="block hover:text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
              Legal
            </div>
            <div className="text-sm text-white/70">
              <div>{site.legalName}</div>
              <div className="mt-3 text-xs text-white/50">
                © {new Date().getFullYear()} {site.name}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

