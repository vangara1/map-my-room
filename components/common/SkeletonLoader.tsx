"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  height?: string;
}

export function SkeletonLoader({
  count = 1,
  height = "h-4",
  className,
}: SkeletonLoaderProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "bg-gradient-to-r from-dark-800 via-dark-700 to-dark-800 rounded animate-pulse",
            height,
            className
          )}
        />
      ))}
    </>
  );
}
