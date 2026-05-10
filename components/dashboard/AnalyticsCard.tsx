"use client";

import React from "react";
import { Card } from "@/components/common/Card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

export function AnalyticsCard({
  title,
  value,
  change,
  icon,
}: AnalyticsCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-dark-400 text-sm mb-2">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          <div className="flex items-center gap-2 mt-2">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span
              className={`text-sm font-semibold ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {isPositive ? "+" : ""}{change}% from last month
            </span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-gold-500/10 text-gold-500">
          {icon}
        </div>
      </div>
    </Card>
  );
}
