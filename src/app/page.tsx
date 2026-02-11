import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { Expertise } from "@/components/Expertise";
import { Services } from "@/components/Services";
import { IndustryTargeting } from "@/components/IndustryTargeting";
import { PainPoints } from "@/components/PainPoints";
import { WhoWeAre } from "@/components/WhoWeAre";
import { WhySecureLife } from "@/components/WhySecureLife";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SecureLife Fincorp - Expert Insurance & Financial Planning",
  description: "Secure your future with SecureLife Fincorp. We provide comprehensive insurance solutions and personalized financial planning for individuals and businesses in India.",
  alternates: {
    canonical: "https://www.securelifefincorp.com",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStats />
      <Expertise />
      <Services />
      <IndustryTargeting />
      <PainPoints />
      <WhoWeAre />
      <WhySecureLife />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
