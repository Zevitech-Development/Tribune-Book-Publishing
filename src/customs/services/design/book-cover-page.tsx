import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesDesignBookCoverImg01 from "../../../../public/images/services/services-design-book-cover-img-01.jpg";
import ServicesDesignBookCoverImg02 from "../../../../public/images/services/services-design-book-cover-img-02.jpg";

function BookCoverPage() {
  return (
    <main>
      <WritingNoteSection
        heading="First Impressions"
        headingPrimary="Start With"
        remaningHeading="Great Design"
        text="A powerful book cover captures attention and sparks curiosity. At Tribune Book Publishing, we create custom, genre-appropriate covers that reflect your story and connect with your audience — online and on the shelf."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Custom Covers"
        headingPrimary="That Capture"
        remaningHeading="Your Story"
        text01="Our designers craft visually stunning covers that align with your genre, tone, and audience expectations. Every detail — from typography to imagery — is purposefully designed to make your book stand out."
        text02="We collaborate closely with you to ensure your vision shines through while following industry design standards for both print and digital formats."
        img={ServicesDesignBookCoverImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Stand Out"
        headingPrimary="On Every Shelf"
        remaningHeading="And Screen"
        text01="Whether it's a bold fiction cover or a clean, professional nonfiction design, we tailor every element to enhance your book's visibility and appeal."
        text02="With attention to genre trends and market demands, we design covers that not only look great — but sell."
        img={ServicesDesignBookCoverImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BookCoverPage;
