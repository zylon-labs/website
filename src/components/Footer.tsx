"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/lib/site";
import { Container } from "@/components/Container";

export function Footer() {
  const pathname = usePathname() ?? "/";
  const isSwedish = pathname === "/sv" || pathname.startsWith("/sv/");
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">{site.name}</div>
            <p className="max-w-sm text-sm leading-6 text-white/70">
              {site.description}
            </p>
            <div className="text-sm text-white/70">
              <div>Sweden</div>
              <a
                className="block text-white/85 hover:text-white"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {isSwedish ? "Utforska" : "Explore"}
              </div>
              <div className="space-y-2 text-white/75">
                <Link
                  className="block hover:text-white"
                  href={isSwedish ? "/sv/tjanster" : "/services"}
                >
                  {isSwedish ? "Tjänster" : "Services"}
                </Link>
                <Link
                  className="block hover:text-white"
                  href={isSwedish ? "/sv/case" : "/case-studies"}
                >
                  {isSwedish ? "Case" : "Case studies"}
                </Link>
                <Link
                  className="block hover:text-white"
                  href={isSwedish ? "/sv/insikter" : "/insights"}
                >
                  {isSwedish ? "Insikter" : "Insights"}
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {isSwedish ? "Kontakt" : "Contact"}
              </div>
              <div className="space-y-2 text-white/75">
                <Link
                  className="block hover:text-white"
                  href={isSwedish ? "/sv/kontakt" : "/contact"}
                >
                  {isSwedish ? "Kontakt" : "Contact"}
                </Link>
                <a className="block hover:text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                {site.social.linkedin && (
                  <a
                    className="block hover:text-white"
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
              Legal
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <div>{site.legalName}</div>
              <div>Sweden</div>
              <Link
                className="block hover:text-white"
                href={isSwedish ? "/sv/integritet" : "/privacy"}
              >
                {isSwedish ? "Integritetspolicy" : "Privacy policy"}
              </Link>
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

