import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";

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
      <ServicesCallToActionSection />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BiographyPage;
