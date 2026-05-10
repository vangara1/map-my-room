"use client";

import React from "react";
import { Card } from "@/components/common/Card";
import { Booking } from "@/types/dashboard";
import { formatDate, formatCurrency } from "@/lib/utils";

interface BookingWidgetProps {
  bookings: Booking[];
}

export function BookingWidget({ bookings }: BookingWidgetProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Recent Bookings</h3>
      <div className="space-y-4">
        {bookings.slice(0, 5).map((booking) => (
          <div
            key={booking.id}
            className="flex items-center justify-between pb-4 border-b border-dark-700 last:border-0"
          >
            <div>
              <p className="font-semibold text-white text-sm">
                {booking.guestName}
              </p>
              <p className="text-xs text-dark-400">Room {booking.roomNumber}</p>
              <p className="text-xs text-dark-500">
                {formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gold-500">
                {formatCurrency(booking.amount)}
              </p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  booking.status === "confirmed"
                    ? "bg-green-500/20 text-green-500"
                    : "bg-yellow-500/20 text-yellow-500"
                }`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
