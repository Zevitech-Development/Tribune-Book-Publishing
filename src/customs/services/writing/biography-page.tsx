import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingBiographyImg01 from "../../../../public/images/services/services-writing-biography-img-01.jpg";
import ServicesWritingBiographyImg02 from "../../../../public/images/services/services-writing-biography-img-02.jpg";

function BiographyPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Bring Your Story to Life with"
        headingPrimary="Biography Writing"
        remaningHeading="Experts."
        text="At Tribune Book Publishing, we craft compelling biographies that preserve your legacy and share your life's journey with authenticity. Our writers turn real experiences into meaningful, engaging narratives that connect with readers."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Your Journey,"
        headingPrimary="Your Legacy,"
        remaningHeading="Professionally Written"
        text01="A biography is more than just facts — it's your story, told with purpose. Whether you're documenting your personal journey or honoring someone else's, we bring life and emotion to every chapter."
        text02="Our expert biographers work closely with you to ensure your voice, values, and milestones are reflected in every word, creating a timeless story that leaves a lasting impression."
        img={ServicesWritingBiographyImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Capture Moments,"
        headingPrimary="Preserve History,"
        remaningHeading="With Expert Writers"
        text01="We help individuals, professionals, and families transform their memories into beautifully written biographies. From interviews to final edits, we handle the entire process with care and precision."
        text02="Let us help you tell your story — one that informs, inspires, and endures."
        img={ServicesWritingBiographyImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BiographyPage;
