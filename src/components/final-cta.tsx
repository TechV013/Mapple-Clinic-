"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5" />
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Health Is{" "}
            <span className="text-primary">Our Priority</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Take the first step towards better health. Schedule an appointment
            today and experience care that puts you first.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full text-base px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base px-8"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
