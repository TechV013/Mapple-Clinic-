import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";

const fontSans = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`;

export const metadata: Metadata = {
  title: {
    default: "Maple Healthcare | Compassionate Care. Modern Healthcare.",
    template: "%s | Maple Healthcare",
  },
  description:
    "Providing trusted healthcare solutions with convenient appointment scheduling and personalized patient care. Board-certified physicians, same-day appointments available.",
  keywords: [
    "healthcare",
    "clinic",
    "family medicine",
    "primary care",
    "same-day appointments",
    "board-certified physicians",
  ],
  openGraph: {
    title: "Maple Healthcare | Compassionate Care. Modern Healthcare.",
    description:
      "Providing trusted healthcare solutions with convenient appointment scheduling and personalized patient care.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Maple Healthcare",
              description:
                "Providing trusted healthcare solutions with convenient appointment scheduling and personalized patient care.",
              url: "https://maplehealthcare.com",
              telephone: "(555) 123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Wellness Avenue",
                addressLocality: "Portland",
                addressRegion: "OR",
                postalCode: "97201",
                addressCountry: "US",
              },
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
              medicalSpecialty: "Primary Care",
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans antialiased"
        style={{ fontFamily: fontSans }}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileCTA />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
