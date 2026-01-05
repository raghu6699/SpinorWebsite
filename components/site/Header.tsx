"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "@/components/site/ThemeToggle";

type NavItem = { href: string; label: string };

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav: NavItem[] = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/ai-agents", label: "AI Agents" },
      { href: "/change-management", label: "Change Management" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Optional: prevent background scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/85 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-white font-bold">
            SI
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Spinor Innovations
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-opacity hover:opacity-80 ${
                  active ? "text-brand-primary" : "opacity-90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <ThemeToggle />

          <Link
            href="/contact"
            className="rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Talk to an Expert
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-brand-border bg-brand-card p-2"
          >
            {/* Hamburger / X icon (no external libraries) */}
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <>
          {/* Overlay */}
          <button
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="fixed left-0 right-0 top-[73px] z-50 md:hidden">
            <div className="mx-auto max-w-6xl px-6">
              <div className="rounded-lg border border-brand-border bg-brand-card p-4 shadow-card dark:shadow-cardDark">
                <div className="flex flex-col">
                  {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-md px-3 py-3 text-sm font-semibold hover:bg-brand-muted ${
                          active ? "text-brand-primary" : "opacity-90"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  <div className="mt-3">
                    <Link
                      href="/contact"
                      className="block rounded-md bg-brand-primary px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
                      onClick={() => setOpen(false)}
                    >
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
