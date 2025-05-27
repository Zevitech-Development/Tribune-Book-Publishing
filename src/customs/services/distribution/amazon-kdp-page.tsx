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
        heading="Launch Your Book"
        headingPrimary="On Amazon KDP"
        remaningHeading="With Confidence"
        text="Tribune Book Publishing helps you publish and distribute your book on Amazon Kindle Direct Publishing (KDP) with ease. From setup to optimization, we ensure your book is ready to reach millions of readers worldwide."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="End-to-End"
        headingPrimary="Amazon KDP"
        remaningHeading="Publishing Support"
        text01="We take care of your entire KDP process — from formatting and metadata setup to uploading your book and optimizing it for visibility. Whether it's a print book, eBook, or both, we handle the technicalities."
        text02="With our expertise, you'll avoid common pitfalls and position your book for long-term success on Amazon's massive platform."
        img={ServicesDistributionAmazonKDPImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Reach Readers"
        headingPrimary="Across the Globe"
        remaningHeading="Through Amazon"
        text01="Amazon KDP gives you access to a global audience, and we make sure you're ready for it. From keyword optimization to selecting the right categories, our team ensures your book is discoverable and competitive."
        text02="Let us help you make a strong debut — and keep your book performing with ongoing support and updates if needed."
        img={ServicesDistributionAmazonKDPImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default AmazonKdpPage;
