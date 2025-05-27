import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWebsiteLandingImg01 from "../../../../public/images/services/services-website-landing-01.png";
import ServicesWebsiteLandingImg02 from "../../../../public/images/services/services-website-landing-02.jpg";

function LandingPage() {
  return (
    <main>
      <WritingNoteSection
        heading="High-Converting"
        headingPrimary="Landing Pages"
        remaningHeading="Built for Authors"
        text="Capture attention and drive action with professionally designed landing pages. Tribune Book Publishing crafts author-focused landing pages perfect for book launches, email opt-ins, events, and promotions—designed to convert visitors into loyal readers."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Strategic Design"
        headingPrimary="Focused on"
        remaningHeading="Conversions"
        text01="Every landing page we build is designed with a purpose—whether it's selling your book, growing your email list, or promoting an event."
        text02="We use persuasive layout, compelling copy, and clear calls to action to guide visitors toward the results you want."
        img={ServicesWebsiteLandingImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Optimized for Success"
        headingPrimary="Mobile-Ready,"
        remaningHeading="Fast & Trackable"
        text01="Your landing page will be responsive across all devices, optimized for fast load times, and integrated with tracking tools like Google Analytics and Facebook Pixel."
        text02="Monitor performance, tweak campaigns, and grow your reach with measurable, data-driven results."
        img={ServicesWebsiteLandingImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default LandingPage;
