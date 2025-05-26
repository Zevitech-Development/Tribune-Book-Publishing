import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingGhostwritingImg01 from "../../../../public/images/services/services-writing-ghostwriting-img-01.jpg";
import ServicesWritingGhostwritingImg02 from "../../../../public/images/services/services-writing-ghostwriting-img-02.jpg";

function GhostwritingPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Your Story"
        headingPrimary="Our Words"
        remaningHeading="Professionally Written."
        text="At Tribune Book Publishing, we turn your ideas into polished, publication-ready books. Whether you're an expert, entrepreneur, or storyteller, our ghostwriters bring your vision to life with clarity and purpose."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Confidential"
        headingPrimary="Ghostwriting"
        remaningHeading="Tailored to You"
        text01="We write in your voice — so your story feels authentic. From business books to memoirs and novels, our team helps you express your ideas with impact."
        text02="You stay in control while we handle the heavy lifting — from research and writing to editing and structure."
        img={ServicesWritingGhostwritingImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Seamless Process"
        headingPrimary="From Concept"
        remaningHeading="To Completion"
        text01="Our ghostwriting process is collaborative, efficient, and fully confidential. We listen, plan, write, and refine until your manuscript is exactly how you envisioned it."
        text02="Let us help you turn your knowledge or story into a book that informs, inspires, or entertains — all under your name."
        img={ServicesWritingGhostwritingImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default GhostwritingPage;
