"use client";

import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur-lg md:hidden flex">
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-r"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium bg-primary text-primary-foreground"
      >
        <Calendar className="h-4 w-4" />
        Book Appointment
      </Link>
    </div>
  );
}
