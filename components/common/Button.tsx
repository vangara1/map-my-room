"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 hover:shadow-glow disabled:opacity-50",
    secondary:
      "bg-dark-800 text-white hover:bg-dark-700 disabled:opacity-50",
    outline:
      "border border-gold-500 text-gold-500 hover:bg-gold-500/10 disabled:opacity-50",
    ghost: "text-dark-300 hover:text-gold-500 disabled:opacity-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        "font-semibold rounded-lg transition-all disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
