import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export default function ButtonLink({ href, variant = "primary", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-6 py-3 font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-primary/60";

  const primary =
    "bg-brand-primary text-white shadow-sm hover:bg-brand-primaryHover";

  const secondary =
    "border-2 border-brand-primary text-brand-primary hover:bg-brand-bg/40 dark:hover:bg-brand-muted";

  return (
    <Link href={href} className={`${base} ${variant === "primary" ? primary : secondary}`}>
      {children}
    </Link>
  );
}
