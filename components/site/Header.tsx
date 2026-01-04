import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          Spinor Innovations
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/ai-agents" className="hover:underline">AI Agents</Link>
          <Link href="/ai-agents#pricing" className="hover:underline">Pricing</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ButtonLink href="/contact" variant="primary">Talk to an Expert</ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
