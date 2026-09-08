import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { ExtraActivities } from "@/components/ExtraActivities";
import { Pedagogy } from "@/components/Pedagogy";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { Routine } from "@/components/Routine";
import { Testimonials } from "@/components/Testimonials";
import { VisitCTA } from "@/components/VisitCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <TrustBadges />
        <About />
        <Programs />
        <ExtraActivities />
        <Pedagogy />
        <WhyChooseUs />
        <Gallery />
        <Routine />
        <Testimonials />
        <VisitCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
