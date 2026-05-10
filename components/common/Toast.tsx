"use client";

import React, { useContext } from "react";
import { Toast as ToastType, ToastContext } from "@/providers/ToastProvider";
import { X, AlertCircle, CheckCircle, Info } from "lucide-react";

export function Toast({ toast }: { toast: ToastType }) {
  const context = useContext(ToastContext);

  if (!context) return null;

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-500" />,
  };

  return (
    <div className="flex items-center gap-3 bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 animate-slide-up">
      {icons[toast.type]}
      <span className="text-dark-100">{toast.message}</span>
      <button
        onClick={() => context.removeToast(toast.id)}
        className="ml-auto text-dark-500 hover:text-dark-300"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ToastContainer() {
  const context = useContext(ToastContext);

  if (!context) return null;

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50 max-w-sm">
      {context.toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
