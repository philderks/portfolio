export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted">
        <span>&copy; {currentYear} Philipp Derks</span>
        <span>Zurich, CH</span>
      </div>
    </footer>
  );
}
