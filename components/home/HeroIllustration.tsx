export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 900 520" role="img" aria-label="Warm artisan illustration of AI agents" className="h-auto w-full">
      <rect x="0" y="0" width="900" height="520" rx="24" fill="var(--brand-bg)" />
      <rect x="60" y="70" width="780" height="380" rx="18" fill="var(--brand-card)" stroke="var(--brand-border)" />

      <path
        d="M140 150 C 250 80, 360 80, 470 150 C 580 220, 690 220, 800 150"
        fill="none"
        stroke="var(--brand-accent)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.9"
      />

      <g>
        <rect x="140" y="210" width="210" height="90" rx="14" fill="var(--brand-card)" stroke="var(--brand-border)" />
        <circle cx="165" cy="255" r="16" fill="var(--brand-primary)" />
        <text x="195" y="248" fontSize="18" fill="var(--brand-fg)" fontFamily="Inter, sans-serif" fontWeight="600">
          Support Agent
        </text>
        <text x="195" y="274" fontSize="14" fill="var(--brand-fg)" fontFamily="Inter, sans-serif" opacity="0.75">
          Capture • route • handoff
        </text>
      </g>

      <g>
        <rect x="345" y="210" width="210" height="90" rx="14" fill="var(--brand-card)" stroke="var(--brand-border)" />
        <circle cx="370" cy="255" r="16" fill="var(--brand-chart3)" />
        <text x="400" y="248" fontSize="18" fill="var(--brand-fg)" fontFamily="Inter, sans-serif" fontWeight="600">
          Sales Agent
        </text>
        <text x="400" y="274" fontSize="14" fill="var(--brand-fg)" fontFamily="Inter, sans-serif" opacity="0.75">
          Follow-up • qualify • book
        </text>
      </g>

      <g>
        <rect x="550" y="210" width="250" height="90" rx="14" fill="var(--brand-card)" stroke="var(--brand-border)" />
        <circle cx="575" cy="255" r="16" fill="var(--brand-chart2)" />
        <text x="605" y="248" fontSize="18" fill="var(--brand-fg)" fontFamily="Inter, sans-serif" fontWeight="600">
          Retention Agent
        </text>
        <text x="605" y="274" fontSize="14" fill="var(--brand-fg)" fontFamily="Inter, sans-serif" opacity="0.75">
          Email • SMS • WhatsApp
        </text>
      </g>

      <rect x="140" y="335" width="660" height="60" rx="14" fill="var(--brand-muted)" stroke="var(--brand-border)" />
      <text x="160" y="372" fontSize="14" fill="var(--brand-fg)" fontFamily="JetBrains Mono, monospace" opacity="0.9">
        Signals → Decide → Act → Handoff → Report
      </text>

      <path
        d="M740 92 C 790 92, 820 122, 820 172"
        fill="none"
        stroke="var(--brand-primary)"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}
