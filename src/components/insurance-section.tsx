"use client";

import { motion } from "framer-motion";
import { insuranceProviders } from "@/lib/data/insurance";

export function InsuranceSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Insurance
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            We Accept Most Major Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re in-network with most major insurance providers. Contact
            our office to verify your specific coverage.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {insuranceProviders.map((provider, i) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-center p-6 rounded-xl border bg-card hover:shadow-sm transition-shadow"
            >
              <span className="font-heading text-lg font-semibold text-muted-foreground text-center leading-tight">
                {provider.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Not seeing your provider? Call us at{" "}
          <a
            href="tel:(555) 123-4567"
            className="text-primary font-medium hover:underline"
          >
            (555) 123-4567
          </a>{" "}
          and we&apos;ll help verify your coverage.
        </motion.p>
      </div>
    </section>
  );
}
