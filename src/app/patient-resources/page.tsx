import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Access new patient forms, insurance information, patient portal, and other resources to help you prepare for your visit.",
};

const resources = [
  {
    title: "New Patient Forms",
    description:
      "Save time during your first visit by completing our new patient registration forms online before your appointment.",
    icon: FileText,
    items: [
      "New Patient Registration Form",
      "Medical History Questionnaire",
      "HIPAA Consent Form",
      "Insurance Information Form",
    ],
  },
  {
    title: "Insurance & Billing",
    description:
      "Information about accepted insurance plans, billing policies, and payment options.",
    icon: ExternalLink,
    items: [
      "List of Accepted Insurance Plans",
      "Self-Pay Pricing Information",
      "Payment Plan Options",
      "Superbill for Reimbursement",
    ],
  },
  {
    title: "Patient Portal",
    description:
      "Access your medical records, lab results, and communicate securely with your care team through our online portal.",
    icon: Download,
    items: [
      "View Lab Results",
      "Request Prescription Refills",
      "Message Your Provider",
      "Update Personal Information",
    ],
  },
];

export default function PatientResourcesPage() {
  return (
    <div className="container py-16 animate-fade-in">
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          Patient Resources
        </div>
        <h1 className="font-heading text-5xl font-bold mb-4">
          Resources for Our Patients
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to prepare for your visit, understand your
          coverage, and manage your health.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <Card
              key={resource.title}
              className="border-none shadow-sm hover:shadow-md transition-all"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-heading text-xl">
                  {resource.title}
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 p-10 text-center">
        <h2 className="font-heading text-2xl font-bold mb-3">
          Have Questions?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Our team is happy to help you navigate any part of the process.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact">
            <Button className="rounded-full">Contact Us</Button>
          </Link>
          <a href="tel:(555) 123-4567">
            <Button variant="outline" className="rounded-full">
              Call the Clinic
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
