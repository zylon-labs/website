import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/services",
    "/case-studies",
    "/case-studies/bostadsagenturen",
    "/case-studies/clarity",
    "/insights",
    "/contact",
    "/solutions/custom-crm-development",
    "/solutions/ai-automation-tools",
    "/solutions/api-development-integrations",
    "/solutions/aws-cloudflare-consulting",
    "/solutions/platform-maintenance-retainer",
    "/sv",
    "/sv/tjanster",
    "/sv/case",
    "/sv/case/bostadsagenturen",
    "/sv/case/clarity",
    "/sv/insikter",
    "/sv/kontakt",
    "/sv/losningar/skraddarsytt-crm",
    "/sv/losningar/ai-automation",
    "/sv/losningar/api",
    "/sv/losningar/aws-cloudflare",
    "/sv/losningar/forvaltning",
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

