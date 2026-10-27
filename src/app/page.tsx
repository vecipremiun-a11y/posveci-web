import Hero from "@/components/Hero";
import QuickBenefits from "@/components/QuickBenefits";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <QuickBenefits />
      <Features />
      <Steps />
      <Pricing />
      <FinalCta />
    </main>
  );
}
