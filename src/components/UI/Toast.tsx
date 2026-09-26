"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  show: boolean;
  onClose: () => void;
  duration?: number;
};

const Toast = ({ message, show, onClose, duration = 2000 }: ToastProps) => {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed top-5 right-5 z-50 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-lg
        dark:border-slate-700 dark:bg-slate-800
        animate-in fade-in slide-in-from-top-2 duration-300"
    >
      <p className="text-sm font-medium text-gray-800 dark:text-slate-100">
        {message}
      </p>
    </div>
  );
};

export default Toast;
