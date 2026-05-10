"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium text-dark-300">{label}</label>}
      <input
        className={cn(
          "w-full px-4 py-2.5 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/50",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
