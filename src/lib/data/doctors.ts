import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "sarah-mitchell",
    name: "Dr. Sarah Mitchell",
    credentials: "MD, MPH",
    specialization: "Family Medicine",
    experience: "15+ years",
    bio: "Dr. Mitchell believes in treating the whole person, not just the symptoms. She earned her medical degree from Johns Hopkins and completed her residency at Mayo Clinic. She has a special interest in preventive medicine and chronic disease management.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
  },
  {
    id: "james-chen",
    name: "Dr. James Chen",
    credentials: "MD, FACC",
    specialization: "Internal Medicine",
    experience: "18+ years",
    bio: "Dr. Chen brings extensive experience in internal medicine with a focus on diagnostic excellence. A graduate of Stanford Medical School, he is known for his meticulous approach to patient care and his ability to solve complex medical puzzles.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    id: "emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    credentials: "MD, FAAP",
    specialization: "Pediatrics",
    experience: "12+ years",
    bio: "Dr. Rodriguez is passionate about children's health and development. She creates a warm, welcoming environment where kids feel safe and parents feel informed. She completed her training at Children's Hospital of Philadelphia.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
];
