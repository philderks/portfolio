import { ObfuscatedEmailLink } from "@/components/ObfuscatedEmailLink";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-sm text-muted">03 &mdash; Contact</p>

        <h2 className="font-mono text-4xl font-extrabold tracking-tight md:text-5xl">
          Let&apos;s build something good.
        </h2>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          Got an interesting project or just want to say hi? I&apos;m always
          open to discussing new opportunities and ideas.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <ObfuscatedEmailLink className="text-base text-text underline decoration-accent underline-offset-4 transition-colors hover:text-accent" />
          <a
            href="https://github.com/philippderks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
