import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = false, className = "", children, ...rest }: CardProps) {
  const base = "rounded-lg border border-rule bg-surface";
  const hoverStyles = hover
    ? "transition-colors duration-150 hover:border-accent-border hover:bg-surface-muted"
    : "";

  return (
    <div className={`${base} ${hoverStyles} ${className}`} {...rest}>
      {children}
    </div>
  );
}
