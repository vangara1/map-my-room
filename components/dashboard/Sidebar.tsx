"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  LayoutGrid,
  Door,
  Calendar,
  Users,
  Briefcase,
  Broom,
  DollarSign,
  BarChart3,
  Settings,
} from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";

const MENU_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { name: "Rooms", href: "/rooms", icon: Door },
  { name: "Bookings", href: "/bookings", icon: Calendar },
  { name: "Guests", href: "/guests", icon: Users },
  { name: "Staff", href: "/staff", icon: Briefcase },
  { name: "Housekeeping", href: "/housekeeping", icon: Broom },
  { name: "Expenses", href: "/expenses", icon: DollarSign },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isMobile } = useResponsive();

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-40 p-2 rounded-lg bg-dark-800 border border-dark-700 text-gold-500"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      )}

      <motion.aside
        className={`fixed top-0 left-0 h-screen bg-dark-900 border-r border-dark-800 z-30 overflow-y-auto ${
          isMobile
            ? "w-64 transform transition-transform duration-300"
            : "w-64 translate-x-0"
        } ${isOpen ? "translate-x-0" : isMobile ? "-translate-x-full" : ""}`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gold-500 mb-8">Map My Room</h1>

          <nav className="space-y-2">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.includes(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => isMobile && setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gold-500/20 text-gold-500 border border-gold-500/50"
                      : "text-dark-300 hover:text-gold-500 hover:bg-dark-800"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.aside>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
