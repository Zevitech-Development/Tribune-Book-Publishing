import React from "react";

import HomeHeroSection from "@/sections/home/home-hero-section";
import PublishingPlatformsSection from "@/components/common/achievement-section";
import OurVisionSection from "@/sections/home/our-vision-section";
import PortfolioSection from "@/sections/home/portfolio-section";
import CallToActionSection from "@/components/common/call-to-action-section";
import ProcessSection from "@/sections/home/process-section";
import WhyHireUsSection from "@/sections/home/why-hire-us-section";
import FaqSection from "@/components/common/faq-section";
import VideoTestimonialSection from "@/components/common/video-testimonial-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <PublishingPlatformsSection />
      <OurVisionSection />
      <PortfolioSection />
      <CallToActionSection />
      <ProcessSection />
      <WhyHireUsSection />
      <FaqSection />
      <VideoTestimonialSection />
    </main>
  );
}

export default HomePage;
