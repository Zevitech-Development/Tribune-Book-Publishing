import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesPublishingBookImg01 from "../../../../public/images/services/services-publishing-book-01.jpg";
import ServicesPublishingBookImg02 from "../../../../public/images/services/services-publishing-book-02.jpg";

function BookPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Bring Your Words"
        headingPrimary="To Life in Print"
        remaningHeading="and Digital Formats"
        text="Tribune Book Publishing helps authors turn manuscripts into professionally published books. From editing and design to ISBN registration and global distribution — we handle it all so you can focus on your story."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Complete Publishing"
        headingPrimary="Solutions for"
        remaningHeading="Every Author"
        text01="Our comprehensive book publishing services cover everything from copyediting and interior layout to custom cover design and formatting."
        text02="Whether you're publishing fiction, nonfiction, memoirs, or business books, we ensure your work meets the highest industry standards."
        img={ServicesPublishingBookImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Global Reach"
        headingPrimary="On Shelves and"
        remaningHeading="Screens Worldwide"
        text01="We distribute your book across major retailers like Amazon, Barnes & Noble, and IngramSpark — in both print and eBook formats."
        text02="With our publishing experts managing production and listings, your book will be professionally presented and widely accessible."
        img={ServicesPublishingBookImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BookPage;
