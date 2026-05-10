"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hover?: boolean;
}

export function Card({
  glass = true,
  hover = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-dark-700",
        glass && "bg-glass backdrop-blur-glass shadow-glass",
        hover && "hover:shadow-lg transition-all cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
