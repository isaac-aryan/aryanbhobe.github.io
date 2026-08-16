import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  const base =
    "flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-medium transition-all [&_svg]:w-3.5 [&_svg]:h-3.5";
  const variants = {
    primary:
      "bg-accent text-white shadow-[0_4px_16px_-4px_rgba(91,157,240,0.5)] hover:bg-accent-hover hover:shadow-[0_4px_20px_-2px_rgba(91,157,240,0.65)]",
    secondary:
      "bg-surface backdrop-blur-xl text-accent-mid border border-rule hover:bg-accent-subtle hover:border-accent-border",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
