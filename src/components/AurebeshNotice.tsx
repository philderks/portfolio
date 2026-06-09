"use client";

interface AurebeshNoticeProps {
  active: boolean;
  onDisable: () => void;
}

export function AurebeshNotice({ active, onDisable }: AurebeshNoticeProps) {
  if (!active) return null;

  return (
    <div className="aurebesh-escape fixed bottom-4 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 border border-cyan bg-bg/95 px-4 py-3 text-sm text-fg shadow-[0_0_24px_rgba(77,208,225,0.18)] backdrop-blur-md sm:bottom-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-cyan">
          Aurebesh mode on
        </p>
        <button
          type="button"
          onClick={onDisable}
          className="inline-flex min-h-11 items-center justify-center border border-border bg-bg-2 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-fg transition-colors hover:border-cyan hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
          Disable
        </button>
      </div>
    </div>
  );
}
