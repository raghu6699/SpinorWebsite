import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

import Hero from "@/components/home/Hero";
import ProofChips from "@/components/home/ProofChips";
import PainOutcome from "@/components/home/PainOutcome";
import ServicePillars from "@/components/home/ServicePillars";
import UseCases from "@/components/home/UseCases";
import HowItWorks from "@/components/home/HowItWorks";
import PricingPreview from "@/components/home/PricingPreview";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofChips />
        <PainOutcome />
        <ServicePillars />
        <UseCases />
        <HowItWorks />
        <PricingPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
