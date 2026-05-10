"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { DashboardNavbar } from "./Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-950">
      <Sidebar />
      <DashboardNavbar />
      <main className="pt-16 sm:pl-64 p-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
