import type { Metadata } from "next";
import Link from "next/link";
import { ObfuscatedEmailLink } from "@/components/ObfuscatedEmailLink";

export const metadata: Metadata = {
  title: "Impressum | derks.dev",
  description: "Impressum der persönlichen Portfolio-Website.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-fg">Impressum</h1>

      <div className="mt-8 space-y-6 font-sans text-sm leading-relaxed text-dim">
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">Anbieter</h2>
          <p className="mt-2">
            Philipp Noél Derks
            <br />
            Zurich, Switzerland
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">Kontakt</h2>
          <p className="mt-2">
            E-Mail:{" "}
            <ObfuscatedEmailLink className="underline decoration-cyan underline-offset-4 hover:opacity-80" />
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">Einordnung</h2>
          <p className="mt-2">
            Diese Website ist ein persönliches, nicht-kommerzielles Portfolio zur Jobsuche. Es werden keine
            Dienstleistungen angeboten und keine Verkäufe abgewickelt.
          </p>
          <p className="mt-2">
            Für Kontakt bitte ausschließlich die oben genannte E-Mail verwenden. Weitere persönliche Daten
            werden nicht veröffentlicht.
          </p>
        </section>
      </div>

      <div className="mt-10">
        <Link href="/datenschutz" className="font-mono text-xs uppercase tracking-widest text-cyan hover:opacity-80">
          Zur Datenschutzerklärung
        </Link>
      </div>
    </main>
  );
}
