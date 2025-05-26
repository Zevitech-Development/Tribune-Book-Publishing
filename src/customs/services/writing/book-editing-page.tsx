import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWritingBookEditingImg01 from "../../../../public/images/services/services-writing-book-edit-img-01.jpg";
import ServicesWritingBookEditingImg02 from "../../../../public/images/services/services-writing-book-edit-img-02.jpg";

function BookEditingPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Refine Your Work"
        headingPrimary="With Professional"
        remaningHeading="Book Editing Services."
        text="At Tribune Book Publishing, we polish your manuscript to perfection. From grammar and structure to clarity and tone, our editors ensure your book is publication-ready while preserving your voice."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Every Word"
        headingPrimary="Matters — So Does"
        remaningHeading="Professional Editing"
        text01="Our editing services go beyond basic proofreading. We refine sentence structure, pacing, and flow to make your content stronger and more impactful."
        text02="Whether it's fiction or nonfiction, we make sure your message is clear, consistent, and ready for your audience."
        img={ServicesWritingBookEditingImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Developmental to Final Edits —"
        headingPrimary="We Cover"
        remaningHeading="Every Stage"
        text01="We offer developmental editing, copyediting, and line editing based on your manuscript's needs. Our team works closely with you to elevate your work without changing your voice."
        text02="Let us help you turn your draft into a polished, professional book that stands out."
        img={ServicesWritingBookEditingImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BookEditingPage;
