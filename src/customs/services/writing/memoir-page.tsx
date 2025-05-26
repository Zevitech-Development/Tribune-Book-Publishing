import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingMemoirImg01 from "../../../../public/images/services/services-writing-memoir-img-01.webp";
import ServicesWritingMemoirImg02 from "../../../../public/images/services/services-writing-memoir-img-02.webp";

function MemoirPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Boost Your Narrative with Our Expert"
        headingPrimary="Memoir Writing"
        remaningHeading="Services."
        text="With Tribune Book Publishing, witness how your ideas and life story can be transformed into compelling narratives that genuinely sparkle. This is where your success journey starts."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Embrace The Art of"
        headingPrimary="Memoir"
        remaningHeading="Magic"
        text01="Every life holds a story worth telling. Our memoir writing services help you weave your personal experiences into a compelling narrative that reflects your voice, values, and journey. Whether you're documenting a legacy or sharing a personal transformation, we're here to guide every word."
        text02="Our skilled memoir writers specialize in turning lived experiences into captivating prose. Whether you're a public figure, a survivor, or simply someone with a powerful story, we help you craft a memoir that resonates deeply with readers."
        img={ServicesWritingMemoirImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Your Life"
        headingPrimary="Your Story"
        text01="Memoirs are more than memories — they are reflections of identity, resilience, and growth. At Tribune Book Publishing, we help you preserve those defining moments with sincerity and emotional depth, capturing the essence of who you are."
        text02="With a thoughtful blend of structure, emotion, and voice, our memoir writing team ensures your story is not only remembered, but felt. Let us help you create a powerful written legacy that will inspire generations."
        img={ServicesWritingMemoirImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default MemoirPage;
