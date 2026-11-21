import type { ButtonHTMLAttributes, CSSProperties } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

const base: CSSProperties = {
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
    fontFamily: "inherit"
};

const variants: Record<NonNullable<ButtonProps["variant"]>, CSSProperties> = {
  primary: { background: "#2563eb", color: "#fff" },
  secondary: { background: "#e5e7eb", color: "#111827" },
};

const sizes: Record<NonNullable<ButtonProps["size"]>, CSSProperties> = {
  sm: { padding: "6px 12px", fontSize: 14 },
  md: { padding: "10px 16px", fontSize: 16 },
  lg: { padding: "14px 24px", fontSize: 18 },
};

export function Button({
  variant = "primary",
  size = "md",
  style,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      style={{
        ...base,
        ...variants[variant],
        ...sizes[size],
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      {...props}
    />
  );
}