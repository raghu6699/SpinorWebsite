export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm opacity-80">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-lg font-semibold opacity-100">Spinor Innovations</div>
          <div>© {new Date().getFullYear()} Spinor Innovations. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
