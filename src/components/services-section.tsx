"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  Shield,
  Microscope,
  UserPlus,
  Video,
  Heart,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Shield,
  Microscope,
  UserPlus,
  Video,
  Heart,
};

export function ServicesSection() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Our Services
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Care Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to specialized care, we offer a full range of
            healthcare services under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Card className="group h-full border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-heading text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
