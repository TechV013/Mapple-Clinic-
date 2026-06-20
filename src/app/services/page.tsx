import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Stethoscope, Shield, Microscope, UserPlus, Video, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive range of healthcare services including general consultation, preventive care, diagnostics, telehealth, and more.",
};

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Shield, Microscope, UserPlus, Video, Heart,
};

export default function ServicesPage() {
  return (
    <div className="container py-16 animate-fade-in">
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          Our Services
        </div>
        <h1 className="font-heading text-5xl font-bold mb-4">
          Comprehensive Care, All in One Place
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From routine checkups to specialized care, we offer a complete range
          of healthcare services designed to meet you wherever you are on your
          health journey.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Stethoscope;
          return (
            <Card key={service.slug} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all group">
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="h-10 w-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">
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
          );
        })}
      </section>

      <section className="mt-20 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">
          Not Sure What You Need?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Our team can help determine the right care for your specific needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="rounded-full">
            Talk to Our Team
          </Button>
        </Link>
      </section>
    </div>
  );
}
