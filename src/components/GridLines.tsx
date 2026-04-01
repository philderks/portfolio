export function GridLines() {
  const columns = 12;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-12">
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={index}
            className={`border-l border-grid ${index === columns - 1 ? "border-r" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
