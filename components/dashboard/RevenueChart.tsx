"use client";

import React from "react";
import { Card } from "@/components/common/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Week 1", revenue: 4200, target: 4500 },
  { date: "Week 2", revenue: 4800, target: 4500 },
  { date: "Week 3", revenue: 5200, target: 5000 },
  { date: "Week 4", revenue: 6100, target: 5500 },
];

export function RevenueChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">
        Revenue vs Target
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(107, 114, 128, 0.2)"
          />
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="revenue" fill="#f5c842" />
          <Bar dataKey="target" fill="#4b5563" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
