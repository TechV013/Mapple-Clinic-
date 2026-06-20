"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site";

const heroFeatures = [
  "Same-day appointments",
  "Board-certified physicians",
  "Modern facilities",
  "Insurance accepted",
];

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Welcome to {siteConfig.name}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Compassionate Care.
            <br />
            <span className="text-primary">Modern Healthcare.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full text-base px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Clinic
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {heroFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
