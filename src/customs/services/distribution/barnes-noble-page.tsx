import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesDistributionBarnesNobleImg01 from "../../../../public/images/services/services-distribution-barnes-noble-img-01.jpg";
import ServicesDistributionBarnesNobleImg02 from "../../../../public/images/services/services-distribution-barnes-noble-img-02.jpg";

function BarnesNoblePage() {
  return (
    <main>
      <WritingNoteSection
        heading="Get Your Book"
        headingPrimary="Into Barnes & Noble"
        remaningHeading="The Right Way"
        text="Distribute your book through one of the most trusted bookstore networks. Tribune Book Publishing helps you list your title on Barnes & Noble with proper formatting, metadata, and retail-readiness."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Sell Nationwide"
        headingPrimary="With Barnes & Noble"
        remaningHeading="Distribution"
        text01="We manage the listing process from start to finish, ensuring your book meets B&N's guidelines for both physical and online stores. We also handle ISBN registration, file uploads, and product page setup."
        text02="Get access to a wider market through one of America's most respected book retailers — all with professional support."
        img={ServicesDistributionBarnesNobleImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Boost Visibility"
        headingPrimary="With Professional Setup"
        remaningHeading="And Support"
        text01="We optimize your book's metadata, pricing, and category placement to increase discoverability and sales potential on Barnes & Noble."
        text02="Whether you're a new author or seasoned publisher, we simplify the distribution process so you can focus on what you do best — writing."
        img={ServicesDistributionBarnesNobleImg02}
        secClassName="lg:mb-8"
      />

      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default BarnesNoblePage;
