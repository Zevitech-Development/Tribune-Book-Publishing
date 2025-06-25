import React from "react";

import PublishBookHeroSection from "@/sections/business/publish/publish-book-hero-section";
import PPCCallToActionSection from "@/sections/business/publish/ppc-call-to-action-section";
import TestimonialsSection from "@/components/common/testimonials-section";
import FaqSection from "@/components/common/faq-section";
import AchievementSection from "@/components/common/achievement-section";
import IntroductionSection from "@/sections/business/publish/introduction-section";
import PorfolioSection from "@/sections/business/publish/porfolio-section";

function PublishBookPage() {
  return (
    <main>
      <PublishBookHeroSection />
      <AchievementSection />
      <IntroductionSection />
      <PorfolioSection />
      <PPCCallToActionSection />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
}

export default PublishBookPage;
