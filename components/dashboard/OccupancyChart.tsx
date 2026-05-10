"use client";

import React from "react";
import { Card } from "@/components/common/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mon", occupied: 65, available: 35 },
  { date: "Tue", occupied: 72, available: 28 },
  { date: "Wed", occupied: 68, available: 32 },
  { date: "Thu", occupied: 80, available: 20 },
  { date: "Fri", occupied: 85, available: 15 },
  { date: "Sat", occupied: 92, available: 8 },
  { date: "Sun", occupied: 78, available: 22 },
];

export function OccupancyChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Occupancy Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          <Line
            type="monotone"
            dataKey="occupied"
            stroke="#f5c842"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
