import CallToActionSection from "@/components/common/call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import VideoTestimonialSection from "@/components/common/video-testimonial-section";
import AboutHeroSection from "@/sections/about/about-hero-section";
import AboutNoteSection from "@/sections/about/about-note-section";
import MissionSection from "@/sections/about/mission-section";
import PlanSection from "@/sections/about/plan-section";
import React from "react";

function AboutUsPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutNoteSection />
      <MissionSection />
      {/* <PlanSection /> -- rebuild ui like left right left image and content */}
      <CallToActionSection />
      <FaqSection />
      <VideoTestimonialSection />
    </main>
  );
}

export default AboutUsPage;
