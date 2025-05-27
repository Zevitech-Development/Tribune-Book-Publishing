import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesMarketingBookImg01 from "../../../../public/images/services/services-marketing-book-01.jpg";
import ServicesMarketingBookImg02 from "../../../../public/images/services/services-marketing-book-02.jpg";

function BookPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Promote Your Book"
        headingPrimary="With Smart Marketing"
        remaningHeading="That Sells"
        text="Publishing is just the beginning — real success comes with the right promotion. Tribune Book Publishing offers targeted book marketing services to help you reach more readers, boost sales, and build your author brand."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Book Marketing"
        headingPrimary="Built for Authors"
        remaningHeading="Who Want Results"
        text01="From strategic launch campaigns to ongoing promotions, we help you get your book in front of the right readers. Our services include Amazon optimization, reviews outreach, and audience targeting."
        text02="We tailor every campaign to fit your genre, goals, and audience — so your book stands out in a crowded market."
        img={ServicesMarketingBookImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Grow Visibility"
        headingPrimary="Build Authority"
        remaningHeading="Sell More Books"
        text01="We help you position your book — and yourself — as a credible voice in your genre. From social media strategies to PR and influencer outreach, we create multi-channel exposure that builds momentum."
        text02="With our support, you'll market smarter — not harder — and see measurable results from every campaign."
        img={ServicesMarketingBookImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BookPage;
