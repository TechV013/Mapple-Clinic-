"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Doctors", href: "/doctors" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Patient Resources", href: "/patient-resources" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-bold text-sm">
                MH
              </div>
              <span className="font-heading text-xl font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Providing trusted healthcare solutions with convenient appointment
              scheduling and personalized patient care.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-foreground transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>
                {siteConfig.address}
                <br />
                {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
              </span>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <h4 className="font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-semibold text-sm">Office Hours</h4>
            <ul className="space-y-2">
              {siteConfig.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between text-sm text-muted-foreground"
                >
                  <span>{h.day}</span>
                  <span className="font-medium text-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />{" "}
            for better healthcare.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
