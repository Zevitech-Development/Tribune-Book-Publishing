import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesWebsiteAuthorImg01 from "../../../../public/images/services/services-website-author-01.jpg";
import ServicesWebsiteAuthorImg02 from "../../../../public/images/services/services-website-author-02.jpg";

function AuthorPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Build Your"
        headingPrimary="Author Website"
        remaningHeading="That Inspires Readers"
        text="Your online presence matters. Tribune Book Publishing creates custom websites for authors that showcase your books, grow your fan base, and establish your personal brand—all with a professional touch and seamless user experience."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Custom Website Design"
        headingPrimary="Tailored for"
        remaningHeading="Your Author Brand"
        text01="We design clean, mobile-friendly, and engaging websites that highlight your books, biography, media appearances, and more."
        text02="From layout to content integration, every element is built to reflect your unique voice and connect with your audience."
        img={ServicesWebsiteAuthorImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Sell More Books"
        headingPrimary="Connect, Promote,"
        remaningHeading="and Grow Online"
        text01="We integrate eCommerce features, mailing list signups, blog sections, and social media—giving readers multiple ways to interact with you and purchase your books."
        text02="Let us handle the technical side while you focus on writing and growing your author platform."
        img={ServicesWebsiteAuthorImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default AuthorPage;
