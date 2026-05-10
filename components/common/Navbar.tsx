"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import { LoginButton } from "@/components/auth/LoginButton";
import { useAuth } from "@/hooks/useAuth";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-dark-950/80 backdrop-blur-lg border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-gold-500">
            Map My Room
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark-300 hover:text-gold-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            {user ? (
              <Link
                href="/dashboard"
                className="px-6 py-2 bg-gold-500 text-dark-950 rounded-lg font-semibold hover:shadow-glow transition-all"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 bg-gold-500 text-dark-950 rounded-lg font-semibold hover:shadow-glow transition-all"
              >
                Sign In
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-300"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-dark-300 hover:text-gold-500"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              {user ? (
                <Link
                  href="/dashboard"
                  className="block px-6 py-2 bg-gold-500 text-dark-950 rounded-lg font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="block px-6 py-2 bg-gold-500 text-dark-950 rounded-lg font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
