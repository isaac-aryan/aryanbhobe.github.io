import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = false, className = "", children, ...rest }: CardProps) {
  const base = "rounded-xl border border-rule bg-surface backdrop-blur-xl";
  const hoverStyles = hover
    ? "transition-colors duration-200 hover:border-accent-border hover:bg-surface-muted"
    : "";

  return (
    <div className={`${base} ${hoverStyles} ${className}`} {...rest}>
      {children}
    </div>
  );
}
