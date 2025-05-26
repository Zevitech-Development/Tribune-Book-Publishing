import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingScriptImg01 from "../../../../public/images/services/services-writing-script-img-01.jpg";
import ServicesWritingScriptImg02 from "../../../../public/images/services/services-writing-script-img-02.jpg";

function ScriptPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Turn Your Vision Into"
        headingPrimary="Screen-Ready Scripts"
        remaningHeading="With Ease."
        text="At Tribune Book Publishing, we transform your ideas into powerful screenplays. From short films to full-length features, our scriptwriters craft dialogue, scenes, and pacing that bring your story to life on screen."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="From Concept"
        headingPrimary="To Screenplay"
        remaningHeading="We've Got You Covered"
        text01="Writing for the screen requires precision, structure, and rhythm. Our writers understand the flow of visual storytelling and help you create compelling scripts for film, TV, and digital platforms."
        text02="Whether you're starting with a brief or a full concept, we develop engaging, production-ready scripts that captivate both readers and audiences."
        img={ServicesWritingScriptImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Scriptwriting That"
        headingPrimary="Captures Emotion"
        remaningHeading="And Drives Action"
        text01="We focus on character development, dialogue that feels real, and pacing that holds attention. Our goal is to bring out the heart of your story — with the structure and formatting producers expect."
        text02="Collaborate with experienced screenwriters who understand storytelling from both creative and commercial perspectives."
        img={ServicesWritingScriptImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default ScriptPage;
