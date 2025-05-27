import React from "react";

import WritingNoteSection from "@/sections/services/writing/writing-note-section";
import WritingProfileSection from "@/sections/services/writing/writing-profile-section";
import ServicesCallToActionSection from "@/sections/services/services-call-to-action-section";
import FaqSection from "@/components/common/faq-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import ServicesContentSection from "@/sections/services/services-content-section";

import ServicesMarketingSocialMediaAdsImg01 from "../../../../public/images/services/services-marketing-social-media-ads-01.jpg";
import ServicesMarketingSocialMediaAdsImg02 from "../../../../public/images/services/services-marketing-social-media-ads-02.jpg";

function SocialMediaAdsPage() {
  return (
    <main>
      <WritingNoteSection
        heading="Advertise Smarter"
        headingPrimary="With Social Media"
        remaningHeading="Book Campaigns"
        text="Reach your ideal readers where they already scroll. At Tribune Book Publishing, we run targeted ad campaigns on Facebook, Instagram, and other platforms to help authors grow visibility and drive book sales."
      />

      <WritingProfileSection />
      <ServicesContentSection
        isLeft={false}
        heading="Launch Campaigns"
        headingPrimary="That Convert"
        remaningHeading="And Scale"
        text01="Our team crafts data-driven social media ads that align with your book's genre and audience. From eye-catching visuals to compelling copy, we design every ad to stop the scroll and spark clicks."
        text02="Whether you're launching a new release or promoting a backlist title, our campaigns are optimized to generate real results."
        img={ServicesMarketingSocialMediaAdsImg01}
      />

      <ServicesCallToActionSection />
      <ServicesContentSection
        isLeft={true}
        heading="Target Readers"
        headingPrimary="By Interests"
        remaningHeading="And Behavior"
        text01="We don't guess — we target. Using advanced ad targeting and retargeting strategies, we put your book in front of readers who are most likely to buy."
        text02="Let us handle the strategy, creative, and optimization — while you focus on writing your next great book."
        img={ServicesMarketingSocialMediaAdsImg02}
        secClassName="lg:mb-8"
      />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default SocialMediaAdsPage;
