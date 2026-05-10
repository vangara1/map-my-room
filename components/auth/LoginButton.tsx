"use client";

import { useState } from "react";
import { signInWithGoogle } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signInWithGoogle();
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 font-semibold hover:shadow-glow transition-all disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign in with Google"
        )}
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
