import React from "react";

import ServicesNoteSection from "@/sections/services/services-note-section";
import ServicesProfileSection from "@/sections/services/services-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesPublishingAudiobookImg01 from "../../../../public/images/services/services-publishing-audiobook-01.jpg";
import ServicesPublishingAudiobookImg02 from "../../../../public/images/services/services-publishing-audiobook-02.jpg";

function AudiobookPage() {
  return (
    <main>
      <ServicesNoteSection
        heading="Turn Your Book"
        headingPrimary="Into an Audiobook"
        remaningHeading="That Speaks Volumes"
        text="Expand your reach with professionally produced audiobooks. Tribune Book Publishing offers end-to-end audiobook services — from narration and editing to mastering and distribution on platforms like Audible and more."
      />

      <ServicesProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Professional Narration"
        headingPrimary="That Captures"
        remaningHeading="Your Story's Voice"
        text01="We work with skilled voice actors and narrators to ensure your audiobook reflects the tone, pacing, and emotion of your written work."
        text02="From fiction to business books, we match the right voice to your genre — giving your story the performance it deserves."
        img={ServicesPublishingAudiobookImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Distributed Everywhere"
        headingPrimary="Audiences Listen"
        remaningHeading="And Buy"
        text01="We distribute your audiobook on top platforms like Audible, iTunes, and Amazon, making it easy for readers to find you across the globe."
        text02="Let us handle production, technical standards, and uploads — so you can focus on your next big idea."
        img={ServicesPublishingAudiobookImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default AudiobookPage;
