import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  const base =
    "flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-sm text-xs font-medium transition-all duration-200 [&_svg]:w-3.5 [&_svg]:h-3.5";
  const variants = {
    primary:
      "text-strong bg-[image:var(--gradient-accent)] [background-size:200%_200%] [animation:gradient-pan_10s_ease-in-out_infinite_alternate] hover:shadow-[0_4px_20px_rgba(76,106,146,0.35)]",
    secondary:
      "bg-transparent text-body border border-rule hover:border-accent-border hover:bg-surface-muted/60 hover:text-strong",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
