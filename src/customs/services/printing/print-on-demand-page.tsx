import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesPrintingPrintOnDemandImg01 from "../../../../public/images/services/services-printing-print-on-demand-01.jpg";
import ServicesPrintingPrintOnDemandImg02 from "../../../../public/images/services/services-printing-print-on-demand-02.jpg";

function PrintOnDemandPage() {
  return (
    <main>
      <WritingNoteSection
        heading=""
        headingPrimary=""
        remaningHeading=""
        text=""
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading=""
        headingPrimary=""
        remaningHeading=""
        text01=""
        text02=""
        img={ServicesPrintingPrintOnDemandImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading=""
        headingPrimary=""
        remaningHeading=""
        text01=""
        text02=""
        img={ServicesPrintingPrintOnDemandImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default PrintOnDemandPage;
