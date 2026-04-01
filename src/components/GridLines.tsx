export function GridLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`border-l border-grid ${index === 3 ? "border-r" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
