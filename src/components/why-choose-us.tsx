"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarCheck,
  FileHeart,
  Stethoscope,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Healthcare Professionals",
    description:
      "Our board-certified physicians bring years of experience and a commitment to excellence in every patient interaction.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Online Scheduling",
    description:
      "Book appointments in seconds with our intuitive online booking system. Same-day appointments available for urgent needs.",
  },
  {
    icon: FileHeart,
    title: "Personalized Treatment Plans",
    description:
      "Every patient is unique. We develop customized care plans tailored to your specific health needs and goals.",
  },
  {
    icon: Stethoscope,
    title: "Modern Medical Technology",
    description:
      "We invest in state-of-the-art diagnostic equipment and digital health tools to provide the highest standard of care.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "We explain your condition, treatment options, and costs clearly. No jargon, no surprises — just honest healthcare.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Patient Care",
    description:
      "From the moment you walk in, you'll be treated with dignity, respect, and genuine compassion by our entire team.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Built Around You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe healthcare should be accessible, understandable, and
            compassionate. Here&apos;s what sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
