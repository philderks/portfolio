export function GridLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="mx-auto flex h-full max-w-6xl justify-between">
        <div className="w-px bg-grid" />
        <div className="w-px bg-grid" />
        <div className="w-px bg-grid" />
        <div className="w-px bg-grid" />
      </div>
    </div>
  );
}
