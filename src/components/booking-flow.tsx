"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { siteConfig } from "@/lib/data/site";
import { toast } from "sonner";

type BookingData = {
  service: string;
  doctor: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
};

const steps = [
  { id: 1, label: "Service" },
  { id: 2, label: "Doctor" },
  { id: 3, label: "Date" },
  { id: 4, label: "Time" },
  { id: 5, label: "Confirm" },
];

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

const dates = Array.from({ length: 14 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return d;
});

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function isToday(d: Date) {
  const today = new Date();
  return d.toDateString() === today.toDateString();
}

export function BookingFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>({
    service: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const update = (fields: Partial<BookingData>) =>
    setData((prev) => ({ ...prev, ...fields }));

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!data.service;
      case 2:
        return !!data.doctor;
      case 3:
        return !!data.date;
      case 4:
        return !!data.time;
      default:
        return true;
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
    toast.success("Appointment request submitted!", {
      description: "We'll contact you within 24 hours to confirm.",
    });
  };

  if (confirmed) {
    return (
      <section className="py-24">
        <div className="container max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent/10 text-accent mb-6">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-3">
              Request Received!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Thank you, {data.name}. We&apos;ll review your request and call or
              email you within 24 hours to confirm your appointment with{" "}
              {data.doctor}.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setConfirmed(false);
                setStep(1);
                setData({
                  service: "",
                  doctor: "",
                  date: "",
                  time: "",
                  name: "",
                  email: "",
                  phone: "",
                });
              }}
              className="rounded-full"
            >
              Book Another Appointment
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24" id="booking">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Book Appointment
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Choose your service, preferred doctor, and a time that works for you.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-1 mb-12">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                  s.id === step
                    ? "bg-primary text-primary-foreground"
                    : s.id < step
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {s.id < step ? <CheckCircle2 className="h-4 w-4" /> : s.id}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-0.5 w-8 sm:w-16 transition-colors ${
                    s.id < step ? "bg-primary/40" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">
              {step === 1 && "Select a Service"}
              {step === 2 && "Choose Your Doctor"}
              {step === 3 && "Pick a Date"}
              {step === 4 && "Select a Time"}
              {step === 5 && "Confirm Your Appointment"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Step 1: Service */}
                {step === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <button
                        key={s.slug}
                        onClick={() => {
                          update({ service: s.title });
                          setStep(2);
                        }}
                        className={`text-left p-4 rounded-xl border transition-all ${
                          data.service === s.title
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <p className="font-medium text-sm">{s.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {s.description}
                        </p>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 2: Doctor */}
                {step === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {doctors.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => {
                          update({ doctor: d.name });
                          setStep(3);
                        }}
                        className={`text-center p-4 rounded-xl border transition-all ${
                          data.doctor === d.name
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <p className="font-semibold text-sm">{d.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {d.specialization}
                        </p>
                        <Badge variant="secondary" className="mt-2 text-[10px]">
                          {d.experience}
                        </Badge>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 3: Date */}
                {step === 3 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d.toISOString()}
                        onClick={() => {
                          update({ date: d.toISOString() });
                          setStep(4);
                        }}
                        className={`text-center p-3 rounded-xl border transition-all ${
                          data.date === d.toISOString()
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <p className="text-xs text-muted-foreground">
                          {d.toLocaleDateString("en-US", { weekday: "short" })}
                        </p>
                        <p className="font-semibold text-lg mt-0.5">
                          {d.getDate()}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {d.toLocaleDateString("en-US", { month: "short" })}
                        </p>
                        {isToday(d) && (
                          <Badge className="mt-1 text-[9px] px-1.5 py-0">Today</Badge>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 4: Time */}
                {step === 4 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          update({ time: t });
                          setStep(5);
                        }}
                        className={`text-center p-3 rounded-xl border transition-all ${
                          data.time === t
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <Clock className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <p className="text-sm font-medium">{t}</p>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 5: Confirm */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          Service
                        </p>
                        <p className="font-medium">{data.service}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          Doctor
                        </p>
                        <p className="font-medium">{data.doctor}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          Date
                        </p>
                        <p className="font-medium">
                          {data.date
                            ? formatDate(new Date(data.date))
                            : ""}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          Time
                        </p>
                        <p className="font-medium">{data.time}</p>
                      </div>
                    </div>

                    <div className="border-t pt-6 space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                          type="text"
                          value={data.name}
                          onChange={(e) => update({ name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <input
                            type="email"
                            value={data.email}
                            onChange={(e) => update({ email: e.target.value })}
                            placeholder="jane@example.com"
                            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone</label>
                          <input
                            type="tel"
                            value={data.phone}
                            onChange={(e) => update({ phone: e.target.value })}
                            placeholder="(555) 123-4567"
                            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="ghost"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="rounded-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {step < 5 ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="rounded-full"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleConfirm}
                  disabled={!data.name || !data.email || !data.phone}
                  className="rounded-full"
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Confirm Appointment
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
