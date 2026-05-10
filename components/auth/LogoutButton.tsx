"use client";

import { signOut } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-dark-300 hover:text-gold-500 hover:bg-glass transition-all disabled:opacity-50"
    >
      <LogOut className="h-4 w-4" />
      {isLoading ? "Signing out..." : "Sign out"}
    </button>
  );
}
