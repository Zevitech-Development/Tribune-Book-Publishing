import React from "react";

import HeroSection from "@/sections/home/hero-section";
import PublishingPlatformsSection from "@/components/common/publishing-platforms-section";
import WhyHireUsSection from "@/sections/home/why-hire-us-section";
import CallToActionSection from "@/sections/home/call-to-action-section";
import TestimonialSection from "@/sections/home/testimonial-section";
import PortfolioSection from "@/sections/home/portfolio-section";
import ProcessSection from "@/sections/home/process-section";
import WhyHireUsSection02 from "@/sections/home/why-hire-us-section-02";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <PublishingPlatformsSection />
      <WhyHireUsSection />
      <PortfolioSection />
      <CallToActionSection />
      <ProcessSection />
      <WhyHireUsSection02 />
      <TestimonialSection />
    </main>
  );
}

export default HomePage;
