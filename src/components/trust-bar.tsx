"use client";

import { motion } from "framer-motion";
import { Users, Award, Star, ShieldCheck } from "lucide-react";

const stats = [
  { value: "5,000+", label: "Patients Served", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "4.9", label: "Star Rating", icon: Star, suffix: "/5" },
  { value: "100%", label: "Board Certified", icon: ShieldCheck },
];

export function TrustBar() {
  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="font-heading text-3xl font-bold text-foreground">
                {stat.value}
                {"suffix" in stat && <span className="text-muted-foreground text-xl">{stat.suffix}</span>}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
