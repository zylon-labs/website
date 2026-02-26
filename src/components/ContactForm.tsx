"use client";

import { useMemo, useState } from "react";

import { site } from "@/lib/site";

function encodeMailto(value: string) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

function fireContactSubmitEvent(onDone?: () => void) {
  if (typeof window === "undefined") {
    onDone?.();
    return;
  }

  const done = () => onDone?.();

  if (typeof window.gtag === "function") {
    window.gtag("event", "contact_form_submit", {
      event_category: "lead",
      event_label: "Contact Form",
      transport_type: "beacon",
      event_callback: done,
    });

    // Ensure we still proceed even if gtag is blocked.
    window.setTimeout(done, 600);
    return;
  }

  done();
}

export function ContactForm({ locale }: { locale: "en" | "sv" }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = useMemo(() => {
    const base = locale === "sv" ? "Förfrågan" : "Project inquiry";
    const parts = [company.trim(), name.trim()].filter(Boolean);
    return parts.length ? `${base} — ${parts.join(" / ")}` : base;
  }, [company, locale, name]);

  const body = useMemo(() => {
    const lines =
      locale === "sv"
        ? [
            `Namn: ${name || "-"}`,
            `Företag: ${company || "-"}`,
            `Email: ${email || "-"}`,
            "",
            "Meddelande:",
            message || "-",
          ]
        : [
            `Name: ${name || "-"}`,
            `Company: ${company || "-"}`,
            `Email: ${email || "-"}`,
            "",
            "Message:",
            message || "-",
          ];

    return lines.join("\n");
  }, [company, email, locale, message, name]);

  const mailtoHref = useMemo(() => {
    return `mailto:${site.email}?subject=${encodeMailto(
      subject,
    )}&body=${encodeMailto(body)}`;
  }, [body, subject]);

  const t =
    locale === "sv"
      ? {
          name: "Namn",
          company: "Företag",
          email: "Email",
          message: "Beskriv kort vad du behöver hjälp med",
          submit: "Skicka förfrågan",
          note: "Formuläret öppnar din mail-klient med ett färdigifyllt mail.",
        }
      : {
          name: "Name",
          company: "Company",
          email: "Email",
          message: "Briefly describe what you need help with",
          submit: "Send inquiry",
          note: "This opens your email client with a prefilled message.",
        };

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        fireContactSubmitEvent(() => {
          window.location.href = mailtoHref;
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/80">
          <span>{t.name}</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-xl bg-white/5 px-4 text-white ring-1 ring-white/10 outline-none placeholder:text-white/35 focus:ring-white/25"
            placeholder={locale === "sv" ? "Marcus" : "Marcus"}
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2 text-sm text-white/80">
          <span>{t.company}</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="h-11 rounded-xl bg-white/5 px-4 text-white ring-1 ring-white/10 outline-none placeholder:text-white/35 focus:ring-white/25"
            placeholder={locale === "sv" ? "Företag AB" : "Company Inc"}
            autoComplete="organization"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-white/80">
        <span>{t.email}</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 rounded-xl bg-white/5 px-4 text-white ring-1 ring-white/10 outline-none placeholder:text-white/35 focus:ring-white/25"
          placeholder="name@company.com"
          autoComplete="email"
          inputMode="email"
        />
      </label>

      <label className="grid gap-2 text-sm text-white/80">
        <span>{t.message}</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-32 resize-y rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 outline-none placeholder:text-white/35 focus:ring-white/25"
          placeholder={
            locale === "sv"
              ? "Ex: Vi behöver ersätta manuella flöden med ett internt system och integration mot fakturor/email."
              : "Example: We need to replace manual workflows with an internal system and integrations for billing/email."
          }
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
        >
          {t.submit}
        </button>
        <div className="text-xs text-white/55">{t.note}</div>
      </div>
    </form>
  );
}

