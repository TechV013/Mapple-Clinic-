"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function EmergencyNotice() {
  return (
    <section className="bg-destructive/5 border-y border-destructive/20 py-4">
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
        <span className="font-semibold text-destructive flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
          For medical emergencies, call 911 immediately.
        </span>
        <span className="text-muted-foreground hidden sm:inline">|</span>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          <Phone className="h-3.5 w-3.5" />
          After-hours urgent line: {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}
