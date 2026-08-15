"use client";

import { useEffect, useState } from "react";
import { isShopOpen } from "@/lib/hours";

export function OpenStatus({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isShopOpen());
    const id = window.setInterval(() => setOpen(isShopOpen()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const label =
    open === null ? "Checking hours…" : open ? "Open now" : "Closed now";

  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}
    >
      <span
        className={`size-2 rounded-full ${
          open === null
            ? "bg-white/60"
            : open
              ? "bg-[#7dffb0] shadow-[0_0_10px_#7dffb0]"
              : "bg-rose-300"
        } ${open ? "status-pulse" : ""}`}
      />
      {label}
      <span className="text-white/60">· Medical store</span>
    </p>
  );
}
