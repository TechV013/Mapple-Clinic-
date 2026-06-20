import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { doctors } from "@/lib/data/doctors";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet our team of board-certified healthcare professionals dedicated to your well-being.",
};

export default function DoctorsPage() {
  return (
    <div className="container py-16 animate-fade-in">
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          Our Team
        </div>
        <h1 className="font-heading text-5xl font-bold mb-4">
          Meet Our Healthcare Providers
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our team of board-certified physicians and healthcare professionals is
          dedicated to providing you with compassionate, expert care.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <Card
            key={doctor.id}
            className="border-none shadow-sm hover:shadow-md transition-all text-center"
          >
            <CardHeader className="items-center pt-8">
              <Avatar className="h-36 w-36 ring-4 ring-primary/10 mb-2">
                <AvatarImage src={doctor.image} alt={doctor.name} />
                <AvatarFallback className="text-3xl bg-primary/10 text-primary">
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="font-heading text-2xl mt-2">
                {doctor.name}
              </CardTitle>
              <CardDescription className="text-primary font-medium">
                {doctor.credentials} &mdash; {doctor.specialization}
              </CardDescription>
              <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                {doctor.experience}
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {doctor.bio}
              </p>
              <Link href="/contact">
                <Button className="w-full rounded-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book with {doctor.name.split(" ").pop()}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
