import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Our terms of service govern your use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="container py-16 animate-fade-in max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: January 1, 2026
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the {siteConfig.name} website, you agree to be bound
            by these Terms of Service. If you do not agree with any part of these terms,
            you should not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">2. Medical Disclaimer</h2>
          <p>
            The content on this website is for informational purposes only and is not
            intended to be a substitute for professional medical advice, diagnosis, or
            treatment. Always seek the advice of your physician or other qualified health
            provider with any questions you may have regarding a medical condition.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">3. Appointments</h2>
          <p>
            Appointment requests submitted through our website are subject to availability.
            We will confirm your appointment via phone or email within 24 hours. We reserve
            the right to cancel or reschedule appointments as necessary.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">4. Use of Website</h2>
          <p>
            You agree to use our website only for lawful purposes and in a way that does not
            infringe upon the rights of others. You may not use our website to transmit any
            harmful code, collect information about others, or engage in any activity that
            disrupts the functioning of our website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">5. Contact</h2>
          <p>
            For questions about these terms, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
