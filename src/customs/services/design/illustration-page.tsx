import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesDesignIllustrationImg01 from "../../../../public/images/services/services-design-illustration-img-01.jpg";
import ServicesDesignIllustrationImg02 from "../../../../public/images/services/services-design-illustration-img-02.jpg";

function IllustrationPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Visual Storytelling"
        headingPrimary="Brought to Life"
        remaningHeading="With Custom Illustrations"
        text="At Tribune Book Publishing, we create captivating illustrations that elevate your story. Whether you're publishing a children's book, graphic novel, or educational content — our artists bring your vision to life, one image at a time."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Custom Art"
        headingPrimary="For Every Genre"
        remaningHeading="And Audience"
        text01="Our illustrators specialize in a wide range of styles — from whimsical children's book art to detailed technical and narrative illustrations. Every piece is tailored to your story and reader expectations."
        text02="We collaborate with you to create visuals that complement your content and elevate the overall reading experience."
        img={ServicesDesignIllustrationImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="From Sketch"
        headingPrimary="To Final Art"
        remaningHeading="We Handle It All"
        text01="We manage the full illustration process — from initial concepts and drafts to full-color, print-ready artwork. Every image is crafted with precision and storytelling in mind."
        text02="Let us turn your manuscript into a visually rich experience that stands out in any genre."
        img={ServicesDesignIllustrationImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default IllustrationPage;
