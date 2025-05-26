import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesDesignBookFormattingImg01 from "../../../../public/images/services/services-design-book-formatting-img-01.jpg";
import ServicesDesignBookFormattingImg02 from "../../../../public/images/services/services-design-book-formatting-img-02.jpg";

function BookFormattingPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Professional Layout"
        headingPrimary="Clean Formatting"
        remaningHeading="Flawless Reading"
        text="Your book deserves to look as good as it reads. At Tribune Book Publishing, we offer professional formatting services to ensure your manuscript meets industry standards for both print and digital platforms."
      />
      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Perfect Pages"
        headingPrimary="Professional Layouts"
        remaningHeading="Every Time"
        text01="From margins to line spacing, we format your book with precision for Amazon Kindle, Apple Books, paperbacks, and more. Our design enhances readability while keeping your style intact."
        text02="Whether you're formatting for eBook or print, we deliver clean, polished pages that meet publishing standards across all platforms."
        img={ServicesDesignBookFormattingImg01}
      />
      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Fiction, Non-Fiction"
        headingPrimary="Or Technical Books"
        remaningHeading="We Format It All"
        text01="Our team handles various formats including novels, business guides, manuals, and illustrated books. We ensure consistency in styles, headers, footers, TOC, and more."
        text02="Get your book formatted right the first time — so you can publish with confidence and deliver a smooth reading experience."
        img={ServicesDesignBookFormattingImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BookFormattingPage;
