"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { siteConfig } from "@/lib/data/site";
import { toast } from "sonner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="container py-16 animate-fade-in">
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          Contact Us
        </div>
        <h1 className="font-heading text-5xl font-bold mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;re here to help. Whether you&apos;re booking an appointment,
          have a question, or need assistance, don&apos;t hesitate to reach out.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                Clinic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{siteConfig.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.address}
                    <br />
                    {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  {siteConfig.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-2xl overflow-hidden h-72 bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5!2d-122.6784!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzU0LjciTiAxMjLCsDQwJzQyLjMiVw!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">
              Send Us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Doe" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full">
                    Send Message
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
