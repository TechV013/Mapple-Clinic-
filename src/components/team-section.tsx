"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/data/doctors";

export function TeamSection() {
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
            Meet Our Team
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Dedicated to Your Health
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of experienced healthcare professionals is here to provide
            you with the highest quality of care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <CardHeader className="items-center pt-8">
                  <Avatar className="h-32 w-32 ring-4 ring-primary/10 mb-2">
                    <AvatarImage src={doctor.image} alt={doctor.name} />
                    <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-heading text-xl mt-2">
                    {doctor.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {doctor.credentials} &mdash; {doctor.specialization}
                  </CardDescription>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {doctor.experience}
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doctor.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/doctors">
            <Button variant="outline" className="rounded-full">
              View All Providers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
