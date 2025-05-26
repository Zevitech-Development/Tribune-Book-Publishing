import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesDistributionAmazonKDPImg01 from "../../../../public/images/services/services-distribution-amazon-kdp-img-01.jpg";
import ServicesDistributionAmazonKDPImg02 from "../../../../public/images/services/services-distribution-amazon-kdp-img-02.jpg";

function AmazonKdpPage() {
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
        img={ServicesDistributionAmazonKDPImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading=""
        headingPrimary=""
        remaningHeading=""
        text01=""
        text02=""
        img={ServicesDistributionAmazonKDPImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default AmazonKdpPage;
