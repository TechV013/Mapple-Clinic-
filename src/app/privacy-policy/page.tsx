import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 animate-fade-in max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: January 1, 2026
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including your name, email address,
            phone number, and health information when you fill out forms on our website or
            communicate with us. We also automatically collect certain technical information
            when you visit our website, including your IP address, browser type, and pages visited.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to schedule appointments, communicate with you
            about your care, improve our services, and comply with legal obligations. We do
            not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">3. HIPAA Compliance</h2>
          <p>
            {siteConfig.name} is committed to protecting the privacy and security of your
            health information in accordance with HIPAA regulations. We maintain appropriate
            technical and organizational safeguards to protect your protected health
            information (PHI).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">4. Cookies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to enhance your
            browsing experience, analyze website traffic, and understand where our visitors
            come from. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">5. Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">
              {siteConfig.phone}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
