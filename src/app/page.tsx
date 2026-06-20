import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { TeamSection } from "@/components/team-section";
import { ReviewsCarousel } from "@/components/reviews-carousel";
import { BookingFlow } from "@/components/booking-flow";
import { InsuranceSection } from "@/components/insurance-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { Chatbot } from "@/components/chatbot";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { EmergencyNotice } from "@/components/emergency-notice";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <TeamSection />
      <ReviewsCarousel />
      <BookingFlow />
      <InsuranceSection />
      <FAQSection />
      <FinalCTA />
      <EmergencyNotice />
      <Chatbot />
      <ExitIntentPopup />
    </>
  );
}
