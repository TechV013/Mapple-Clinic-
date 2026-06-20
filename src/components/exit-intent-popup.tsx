"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const dismissedSession = sessionStorage.getItem("exit-intent-dismissed");
    if (dismissedSession) {
      setDismissed(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exit-intent-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-background rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center"
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2">
              Before You Go!
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
              Ready to prioritize your health? Schedule an appointment today and
              take the first step towards feeling your best.
            </p>
            <Link href="/contact" onClick={handleDismiss}>
              <Button className="w-full rounded-full mb-3">
                Book Appointment Now
              </Button>
            </Link>
            <button
              onClick={handleDismiss}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              I&apos;ll do this later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
