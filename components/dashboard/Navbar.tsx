"use client";

import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Bell, Search } from "lucide-react";

export function DashboardNavbar() {
  const { user } = useAuth();
  const { profile } = useUser(user);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 sm:left-64 h-16 bg-dark-900 border-b border-dark-800 flex items-center justify-between px-6 z-20">
      <div className="flex-1 max-w-xs hidden sm:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dark-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-sm text-white placeholder-dark-500 focus:outline-none focus:border-gold-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button className="relative p-2 rounded-lg hover:bg-dark-800 transition-all">
          <Bell className="h-5 w-5 text-dark-300" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-dark-800 transition-all"
          >
            <div className="h-8 w-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500 font-semibold text-sm">
              {user?.displayName?.[0] || "U"}
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute top-12 right-0 w-48 bg-dark-800 border border-dark-700 rounded-lg shadow-lg overflow-hidden z-50">
              <div className="p-4 border-b border-dark-700">
                <p className="text-sm font-semibold text-white">
                  {user?.displayName}
                </p>
                <p className="text-xs text-dark-400">{user?.email}</p>
              </div>
              <div className="p-2">
                <LogoutButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
