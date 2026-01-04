"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-sm border border-brand-border bg-brand-card px-3 py-2 text-sm shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:bg-brand-muted dark:hover:bg-brand-muted/70"
      aria-label="Toggle theme"
      type="button"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 3v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 19v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4.22 4.22l1.42 1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18.36 18.36l1.42 1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4.22 19.78l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.8A7.2 7.2 0 1 1 11.2 3a5.6 5.6 0 1 0 9.8 9.8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
