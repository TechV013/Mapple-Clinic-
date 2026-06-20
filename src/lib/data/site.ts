import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Maple Healthcare",
  tagline: "Compassionate Care. Modern Healthcare.",
  description:
    "Providing trusted healthcare solutions with convenient appointment scheduling and personalized patient care.",
  phone: "(555) 123-4567",
  email: "info@maplehealthcare.com",
  address: "123 Wellness Avenue",
  city: "Portland",
  state: "OR",
  zip: "97201",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { platform: "Facebook", url: "#", icon: "facebook" },
    { platform: "Instagram", url: "#", icon: "instagram" },
    { platform: "LinkedIn", url: "#", icon: "linkedin" },
  ],
};
