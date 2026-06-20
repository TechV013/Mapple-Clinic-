import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { Stethoscope, Shield, Microscope, UserPlus, Video, Heart } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Shield, Microscope, UserPlus, Video, Heart,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Stethoscope;
  const index = services.findIndex((s) => s.slug === slug);
  const prev = index > 0 ? services[index - 1] : null;
  const next = index < services.length - 1 ? services[index + 1] : null;

  return (
    <div className="container py-16 animate-fade-in">
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.longDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                <Calendar className="mr-2 h-5 w-5" />
                Book This Service
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {(prev || next) && (
        <div className="border-t pt-10 flex flex-col sm:flex-row justify-between gap-6">
          {prev ? (
            <Link
              href={`/services/${prev.slug}`}
              className="group flex items-center gap-3 text-left"
            >
              <ArrowLeft className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-1" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Previous
                </p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/services/${next.slug}`}
              className="group flex items-center gap-3 text-right justify-end"
            >
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Next
                </p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}
    </div>
  );
}
