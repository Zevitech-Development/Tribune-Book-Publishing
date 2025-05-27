import React from "react";

import ServicesNoteSection from "@/sections/services/services-note-section";
import ServicesProfileSection from "@/sections/services/services-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingManuscriptAssessmentImg01 from "../../../../public/images/services/services-writing-manuscript-img-01.jpg";
import ServicesWritingManuscriptAssessmentImg02 from "../../../../public/images/services/services-writing-manuscript-img-02.jpg";

function ManuscriptAssessmentPage() {
  return (
    <main>
      <ServicesNoteSection
        heading="Get Honest Feedback"
        headingPrimary="With Our Expert"
        remaningHeading="Manuscript Assessment."
        text="Before publishing, make sure your manuscript is truly ready. At Tribune Book Publishing, we evaluate structure, flow, clarity, and market potential — offering clear, constructive feedback to help refine your book."
      />
      <ServicesProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Uncover Strengths"
        headingPrimary="Identify Gaps"
        remaningHeading="Improve Your Story"
        text01="Our manuscript assessment service gives you a professional review of your draft, focusing on plot, pacing, tone, character development, and audience alignment."
        text02="You'll receive a clear breakdown of what's working, what needs improvement, and actionable suggestions to elevate your manuscript before editing or publishing."
        img={ServicesWritingManuscriptAssessmentImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Your Draft Deserves"
        headingPrimary="Expert Insight"
        remaningHeading="Before You Publish"
        text01="Even great stories need refinement. We help ensure your manuscript meets professional standards and connects with your intended audience — without losing your voice."
        text02="From first-time authors to experienced writers, our assessment service is the smart first step to a successful book launch."
        img={ServicesWritingManuscriptAssessmentImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default ManuscriptAssessmentPage;
