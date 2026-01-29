import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { Expertise } from "@/components/Expertise";
import { Services } from "@/components/Services";
import { IndustryTargeting } from "@/components/IndustryTargeting";
import { PainPoints } from "@/components/PainPoints";
import { WhoWeAre } from "@/components/WhoWeAre";
import { WhySecureLife } from "@/components/WhySecureLife";
import { Blog } from "@/components/Blog";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

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
      <Blog />
      <FAQ />
      <Footer />
    </main>
  );
}
