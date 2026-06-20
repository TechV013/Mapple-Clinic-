import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site";
import { doctors } from "@/lib/data/doctors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our mission, values, and the team dedicated to providing you with exceptional healthcare.",
};

export default function AboutPage() {
  return (
    <div className="container py-16 animate-fade-in">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          About Us
        </div>
        <h1 className="font-heading text-5xl font-bold mb-6">
          Your Health,{" "}
          <span className="text-primary">Our Mission</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At {siteConfig.name}, we believe healthcare should be accessible,
          compassionate, and built on trust. Our team is committed to providing
            personalized care that puts you at the center of everything we do.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1631217868264-e1b90db8221e?w=800&q=80"
            alt="Modern clinic interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded with a simple vision — to create a healthcare experience
            that treats patients like family. Our clinic was built on the belief
            that everyone deserves access to high-quality, compassionate medical
            care in a welcoming environment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over the years, we&apos;ve grown from a small practice into a
            trusted healthcare home for thousands of patients, while never
            losing sight of what matters most: the individual sitting across
            from us.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Meet Our Providers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="text-center p-6 rounded-2xl border bg-card"
            >
              <Avatar className="h-28 w-28 mx-auto mb-4 ring-4 ring-primary/10">
                <AvatarImage src={doctor.image} alt={doctor.name} />
                <AvatarFallback className="text-xl bg-primary/10 text-primary">
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-heading text-xl font-bold">{doctor.name}</h3>
              <p className="text-sm text-primary font-medium">
                {doctor.credentials} &mdash; {doctor.specialization}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {doctor.bio}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/doctors">
            <Button variant="outline" className="rounded-full">
              View Full Team
            </Button>
          </Link>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 p-12 text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">
          Ready to Experience Better Care?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Join thousands of patients who trust us with their health.
        </p>
        <Link href="/contact">
          <Button size="lg" className="rounded-full">
            Book Your Visit Today
          </Button>
        </Link>
      </section>
    </div>
  );
}
