"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    toast.success("Subscribed!", {
      description: "You'll receive our latest health tips and updates.",
    });
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 p-8 md:p-10 text-center">
      {!subscribed ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
          <h4 className="font-heading text-xl font-bold mb-2">
            Stay Healthy & Informed
          </h4>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
            Subscribe to our newsletter for health tips, clinic updates, and
            wellness advice delivered to your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full"
            />
            <Button type="submit" className="rounded-full shrink-0">
              Subscribe
            </Button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-4" />
          <h4 className="font-heading text-xl font-bold mb-1">
            You&apos;re Subscribed!
          </h4>
          <p className="text-sm text-muted-foreground">
            Thanks for joining. Check your inbox for a welcome email.
          </p>
        </motion.div>
      )}
    </div>
  );
}
