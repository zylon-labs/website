"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

function fireGtagEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }

  // Fallback in case gtag isn't available yet, but dataLayer exists.
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(["event", name, params]);
  }
}

function isCalendlyUrl(href: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    return (
      url.hostname === "calendly.com" || url.hostname.endsWith(".calendly.com")
    );
  } catch {
    return false;
  }
}

export function GA4Events() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return; // only left-click

      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (!href) return;
      if (!isCalendlyUrl(href)) return;

      fireGtagEvent("book_strategy_call_click", {
        event_category: "engagement",
        event_label: "Calendly CTA",
        transport_type: "beacon",
        link_url: href,
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.removeEventListener("click", onClick, { capture: true } as any);
    };
  }, []);

  return null;
}
