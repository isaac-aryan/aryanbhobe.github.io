import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  const base =
    "flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-medium transition-colors [&_svg]:w-3.5 [&_svg]:h-3.5";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary:
      "bg-surface text-accent-mid border border-rule hover:bg-accent-subtle hover:border-accent-border",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
