import React from "react";

import ServicesNoteSection from "@/sections/services/services-note-section";
import ServicesProfileSection from "@/sections/services/services-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesPrintingPrintOnDemandImg01 from "../../../../public/images/services/services-printing-print-on-demand-01.jpg";
import ServicesPrintingPrintOnDemandImg02 from "../../../../public/images/services/services-printing-print-on-demand-02.jpg";

function PrintOnDemandPage() {
  return (
    <main>
      <ServicesNoteSection
        heading="Print Only"
        headingPrimary="When You Need It"
        remaningHeading="With On-Demand Services"
        text="Avoid the cost and hassle of inventory. Tribune Book Publishing offers reliable print-on-demand solutions — your book is printed and shipped only when ordered, giving you full control and zero waste."
      />

      <ServicesProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Flexible Printing"
        headingPrimary="For Indie Authors"
        remaningHeading="And Small Presses"
        text01="Our print-on-demand service allows you to publish professionally without large upfront costs. Perfect for first-time authors, niche genres, or testing the market before committing to bulk runs."
        text02="Your readers get fast, high-quality copies — while you manage everything from a single dashboard."
        img={ServicesPrintingPrintOnDemandImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Distribute Globally"
        headingPrimary="With Zero"
        remaningHeading="Inventory Risk"
        text01="We connect your book to major platforms like Amazon, IngramSpark, and more — so it's available worldwide without needing storage or shipping from your side."
        text02="Focus on writing, while we handle printing and delivery — one order at a time."
        img={ServicesPrintingPrintOnDemandImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default PrintOnDemandPage;
