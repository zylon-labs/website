import { spawn } from "node:child_process";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = process.env.SMOKE_PORT || "3100";
const BASE_URL = process.env.SMOKE_BASE_URL || `http://localhost:${PORT}`;
const TIMEOUT_MS = Number(process.env.SMOKE_TIMEOUT_MS || 30_000);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(url, timeoutMs) {
  const start = Date.now();
  while (true) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.ok) return;
    } catch {
      // ignore until timeout
    }

    if (Date.now() - start > timeoutMs) {
      throw new Error(`Timed out waiting for server at ${url}`);
    }
    await sleep(250);
  }
}

async function fetchText(pathname) {
  const res = await fetch(`${BASE_URL}${pathname}`, { redirect: "manual" });
  const text = await res.text();
  return { status: res.status, text };
}

async function assertPage({ pathname, mustInclude }) {
  const { status, text } = await fetchText(pathname);
  if (status < 200 || status >= 300) {
    throw new Error(`${pathname} returned ${status}`);
  }

  const missing = mustInclude.filter((s) => !text.includes(s));
  if (missing.length > 0) {
    throw new Error(`${pathname} missing markers: ${missing.join(", ")}`);
  }
}

function swapLocale(pathname) {
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const isSv = p === "/sv" || p.startsWith("/sv/");

  const base = isSv ? (p === "/sv" ? "/" : p.slice(3)) : p;
  if (base === "/") return isSv ? "/" : "/sv";

  const segments = base.split("/").filter(Boolean);
  const first = segments[0];

  const enToSvFirst = {
    services: "tjanster",
    contact: "kontakt",
    insights: "insikter",
    "case-studies": "case",
    solutions: "losningar",
  };
  const svToEnFirst = Object.fromEntries(
    Object.entries(enToSvFirst).map(([en, sv]) => [sv, en]),
  );

  const enToSvSolutions = {
    "api-development-integrations": "api",
    "aws-cloudflare-consulting": "aws-cloudflare",
    "ai-automation-tools": "ai-automation",
    "custom-crm-development": "skraddarsytt-crm",
    "platform-maintenance-retainer": "forvaltning",
  };
  const svToEnSolutions = Object.fromEntries(
    Object.entries(enToSvSolutions).map(([en, sv]) => [sv, en]),
  );

  if (!isSv) {
    const mappedFirst = enToSvFirst[first];
    if (!mappedFirst) return "/sv";
    if (first === "solutions" && segments.length >= 2) {
      const mappedSlug = enToSvSolutions[segments[1]];
      if (!mappedSlug) return "/sv/losningar";
      segments[0] = mappedFirst;
      segments[1] = mappedSlug;
    } else {
      segments[0] = mappedFirst;
    }
    return `/sv/${segments.join("/")}`;
  }

  const mappedFirst = svToEnFirst[first];
  if (!mappedFirst) return "/";
  if (first === "losningar" && segments.length >= 2) {
    const mappedSlug = svToEnSolutions[segments[1]];
    if (!mappedSlug) return "/solutions";
    segments[0] = mappedFirst;
    segments[1] = mappedSlug;
  } else {
    segments[0] = mappedFirst;
  }
  return `/${segments.join("/")}`;
}

async function listAppRoutes() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const appDir = path.resolve(__dirname, "../src/app");

  /** @type {string[]} */
  const pageFiles = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        await walk(full);
        continue;
      }
      if (ent.isFile() && ent.name === "page.tsx") {
        pageFiles.push(full);
      }
    }
  }

  await walk(appDir);

  const routes = new Set();
  for (const file of pageFiles) {
    const relFile = path.relative(appDir, file).replaceAll(path.sep, "/");
    if (relFile === "page.tsx") {
      routes.add("/");
      continue;
    }

    const relDir = relFile.replace(/\/page\.tsx$/, "");
    routes.add(`/${relDir}`);
  }

  return [...routes].sort();
}

const checks = [
  {
    pathname: "/sv",
    mustInclude: ["Teknisk partner", "Tjänster", "Problem jag löser"],
  },
  {
    pathname: "/sv/tjanster",
    mustInclude: ["Tjänster", "Osäker"],
  },
  {
    pathname: "/sv/case",
    mustInclude: ["Riktiga system", "Vill du ha"],
  },
  {
    pathname: "/sv/kontakt",
    mustInclude: ["Kontakt", "Berätta vad"],
  },
  {
    pathname: "/",
    mustInclude: ["Technical partner", "Services", "Problems I solve"],
  },
  {
    pathname: "/services",
    mustInclude: ["Services", "Not sure"],
  },
  {
    pathname: "/case-studies",
    mustInclude: ["Real systems. Real ownership.", "Want results like this?"],
  },
  {
    pathname: "/contact",
    mustInclude: ["Contact", "Tell me what you’re building."],
  },
];

const proc = spawn("npm", ["run", "start", "--", "-p", PORT], {
  stdio: "inherit",
  env: { ...process.env, PORT },
});

try {
  await waitForServer(`${BASE_URL}/`, TIMEOUT_MS);
  for (const c of checks) {
    await assertPage(c);
    console.log(`OK ${c.pathname}`);
  }

  const routes = await listAppRoutes();
  for (const r of routes) {
    await assertPage({ pathname: r, mustInclude: [] });
    const other = swapLocale(r);
    await assertPage({ pathname: other, mustInclude: [] });
    console.log(`OK ${r} <-> ${other}`);
  }
  console.log("Smoke i18n checks passed.");
} finally {
  proc.kill("SIGTERM");
}
