import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "general-consultation",
    title: "General Consultation",
    description:
      "Comprehensive health assessments and primary care for patients of all ages.",
    longDescription:
      "Our general consultation services provide thorough health evaluations for patients of all ages. Our board-certified physicians take the time to understand your medical history, discuss your concerns, and develop personalized care plans. We believe in building lasting relationships with our patients through open communication and trust.",
    icon: "Stethoscope",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    slug: "preventive-care",
    title: "Preventive Care",
    description:
      "Annual physicals, health screenings, and wellness exams to keep you healthy.",
    icon: "Shield",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    longDescription:
      "Prevention is the foundation of good health. Our preventive care programs include annual physical examinations, routine health screenings, immunizations, and lifestyle counseling. We work with you to identify risk factors early and implement strategies that keep you healthy for the long term.",
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    description:
      "On-site laboratory services and advanced diagnostic testing for accurate results.",
    icon: "Microscope",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    longDescription:
      "Our on-site diagnostic laboratory is equipped with modern technology to provide rapid and accurate test results. From routine blood work to advanced imaging referrals, we ensure you receive timely diagnoses so treatment can begin as soon as possible.",
  },
  {
    slug: "specialist-referrals",
    title: "Specialist Referrals",
    description:
      "Coordinated care with trusted specialists for advanced medical needs.",
    icon: "UserPlus",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    longDescription:
      "When specialized care is needed, we coordinate seamlessly with a network of trusted specialists. We handle the referral process, share your medical records, and follow up to ensure continuity of care. Your health journey remains connected under one roof.",
  },
  {
    slug: "telehealth",
    title: "Telehealth Visits",
    description:
      "Virtual consultations from the comfort of your home or office.",
    icon: "Video",
    image:
      "https://images.unsplash.com/photo-1598257006458-087169a1f08b?w=800&q=80",
    longDescription:
      "Our telehealth platform makes it easy to connect with your provider from anywhere. Ideal for follow-up appointments, medication management, and minor concerns, virtual visits save you time while delivering the same quality of care you expect from an in-person visit.",
  },
  {
    slug: "wellness-programs",
    title: "Wellness Programs",
    description:
      "Personalized health coaching, nutrition guidance, and lifestyle medicine.",
    icon: "Heart",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    longDescription:
      "Our wellness programs go beyond treating illness — we help you thrive. Through personalized health coaching, nutritional counseling, stress management techniques, and fitness guidance, we empower you to take charge of your health and achieve your wellness goals.",
  },
];
