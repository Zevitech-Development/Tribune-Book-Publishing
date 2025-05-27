import React from "react";

import ServicesNoteSection from "@/sections/services/services-note-section";
import ServicesProfileSection from "@/sections/services/services-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesPrintingBulkBookImg01 from "../../../../public/images/services/services-printing-bulk-book-01.jpg";
import ServicesPrintingBulkBookImg02 from "../../../../public/images/services/services-printing-bulk-book-02.jpg";

function BulkBookPage() {
  return (
    <main>
      <ServicesNoteSection
        heading="High-Quality Printing"
        headingPrimary="In Large Volumes"
        remaningHeading="Delivered On Time"
        text="Need books printed in bulk? Tribune Book Publishing offers reliable, cost-effective bulk printing solutions for authors, schools, events, and businesses — with exceptional quality and quick turnaround."
      />

      <ServicesProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Bulk Book"
        headingPrimary="Printing Solutions"
        remaningHeading="For Every Need"
        text01="Whether you're preparing for a book launch, classroom distribution, or corporate gifting, we handle bulk orders with precision and care. Choose from various binding styles, paper types, and trim sizes."
        text02="We ensure every copy is consistent, professional, and aligned with your vision — all at competitive rates."
        img={ServicesPrintingBulkBookImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Fast Turnaround"
        headingPrimary="Affordable Pricing"
        remaningHeading="Trusted Quality"
        text01="Our streamlined process allows for fast production without sacrificing print quality. We work with trusted printing partners to ensure your books are delivered on time and exactly as expected."
        text02="Get expert support from order to delivery — and scale your book distribution with confidence."
        img={ServicesPrintingBulkBookImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BulkBookPage;
