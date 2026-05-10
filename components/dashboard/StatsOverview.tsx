"use client";

import React from "react";
import { AnalyticsCard } from "./AnalyticsCard";
import { LayoutGrid, TrendingUp, Users, DollarSign } from "lucide-react";

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnalyticsCard
        title="Total Rooms"
        value={24}
        change={5}
        icon={<LayoutGrid className="h-6 w-6" />}
      />
      <AnalyticsCard
        title="Occupancy Rate"
        value="78%"
        change={12}
        icon={<TrendingUp className="h-6 w-6" />}
      />
      <AnalyticsCard
        title="Total Guests"
        value={156}
        change={8}
        icon={<Users className="h-6 w-6" />}
      />
      <AnalyticsCard
        title="Monthly Revenue"
        value="$24,580"
        change={23}
        icon={<DollarSign className="h-6 w-6" />}
      />
    </div>
  );
}
