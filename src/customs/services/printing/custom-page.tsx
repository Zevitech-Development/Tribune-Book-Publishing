import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesPrintingCustomImg01 from "../../../../public/images/services/services-printing-custom-01.jpg";
import ServicesPrintingCustomImg02 from "../../../../public/images/services/services-printing-custom-02.jpg";

function CustomPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Custom Printing"
        headingPrimary="Tailored to Fit"
        remaningHeading="Your Vision"
        text="Stand out with custom-printed books made just for you. At Tribune Book Publishing, we offer flexible printing options including custom sizes, finishes, paper types, and binding to match your creative and professional goals."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Unique Books"
        headingPrimary="Made to Order"
        remaningHeading="With Precision"
        text01="Whether you're producing a premium edition, a coffee table book, or a special print run, we work with you to customize every detail. From embossing to foil stamping, your book will look and feel exceptional."
        text02="No cookie-cutter templates — just custom solutions that reflect your story and style."
        img={ServicesPrintingCustomImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Specialty Projects"
        headingPrimary="Require Special"
        remaningHeading="Printing Options"
        text01="We help authors, creatives, and businesses bring their ideas to life through high-quality custom print work. Whether it's a short-run art book or a branded corporate piece, our team ensures flawless execution."
        text02="Let us handle the logistics — while you bring the vision."
        img={ServicesPrintingCustomImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default CustomPage;
