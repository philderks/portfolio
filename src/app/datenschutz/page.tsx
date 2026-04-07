import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | derks.dev",
  description: "Datenschutzhinweise für ein persönliches Portfolio.",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-fg">Datenschutzerklärung</h1>

      <div className="mt-8 space-y-6 font-sans text-sm leading-relaxed text-dim">
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">1. Verantwortliche Person</h2>
          <p className="mt-2">
            Philipp Noél Derks
            <br />
            Zurich, Switzerland
            <br />{" "}
            E-Mail: philipp@derks.dev
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">2. Hosting und Server-Logs</h2>
          <p className="mt-2">
            Beim Besuch der Website verarbeitet der Hosting-Anbieter technisch notwendige Logdaten (z. B.
            IP-Adresse, Zeitpunkt, angeforderte URL, User-Agent), um die Website sicher und stabil
            bereitzustellen.
          </p>
          <p className="mt-2">
            Bitte ergänze hier den tatsächlichen Hosting-Anbieter, Speicherdauer und Rechtsgrundlage gemäß
            deiner finalen Konfiguration.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">3. Cookies und Local Storage</h2>
          <p className="mt-2">
            Diese Website setzt keine optionalen Analyse- oder Marketing-Cookies ein.
          </p>
          <p className="mt-2">
            Es kann ausschließlich technisch notwendige lokale Speicherung für die Darstellung der Seite
            verwendet werden (z. B. Theme-Einstellung).
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">4. Externe Links</h2>
          <p className="mt-2">
            Die Website verlinkt auf externe Plattformen (z. B. GitHub, LinkedIn). Beim Anklicken gelten die
            Datenschutzbestimmungen der jeweiligen Anbieter.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">5. Deine Rechte (EU/CH)</h2>
          <p className="mt-2">
            Je nach anwendbarem Recht bestehen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
            Widerspruch und Datenübertragbarkeit. Anfragen können per E-Mail gestellt werden.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">6. Drittlandübermittlung</h2>
          <p className="mt-2">
            Soweit Anbieter außerhalb der EU/CH eingesetzt werden, erfolgt die Verarbeitung nach den jeweils
            anwendbaren datenschutzrechtlichen Garantien des Anbieters.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">7. Stand</h2>
          <p className="mt-2">07.04.2026</p>
        </section>
      </div>
    </main>
  );
}
