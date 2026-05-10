"use client";

import React from "react";
import { Card } from "@/components/common/Card";
import { Room } from "@/types/hotel";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

const statusIcons = {
  available: <CheckCircle className="h-5 w-5 text-green-500" />,
  occupied: <AlertCircle className="h-5 w-5 text-yellow-500" />,
  maintenance: <AlertCircle className="h-5 w-5 text-red-500" />,
  blocked: <Clock className="h-5 w-5 text-gray-500" />,
};

const statusColors = {
  available: "bg-green-500/20 text-green-500",
  occupied: "bg-yellow-500/20 text-yellow-500",
  maintenance: "bg-red-500/20 text-red-500",
  blocked: "bg-gray-500/20 text-gray-500",
};

export function RoomCard({
  number,
  type,
  capacity,
  pricePerNight,
  status,
}: Omit<Room, "id" | "floor" | "amenities">) {
  return (
    <Card className="p-4 hover:scale-105 transition-transform">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-dark-400">Room</p>
          <p className="text-2xl font-bold text-white">{number}</p>
        </div>
        <div className={`p-2 rounded-lg ${statusColors[status]}`}>
          {statusIcons[status]}
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-dark-400">Type:</span>
          <span className="text-white capitalize">{type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-dark-400">Capacity:</span>
          <span className="text-white">{capacity} guests</span>
        </div>
        <div className="flex justify-between">
          <span className="text-dark-400">Price:</span>
          <span className="text-gold-500 font-semibold">${pricePerNight}</span>
        </div>
      </div>
    </Card>
  );
}
