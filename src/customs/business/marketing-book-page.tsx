import React from "react";

import MarketingBookHeroSection from "@/sections/marketing/marketing-book-hero-section";
import AchievementSection from "@/components/common/achievement-section";
import PlanSection from "@/sections/marketing/plan-section";
import MarketingTechniquesSection from "@/sections/marketing/marketing-techniques-section";
import WhyMarketingServiceSection from "@/sections/marketing/why-marketing-service-section";
import MarketingCallToActionSection from "@/sections/marketing/marketing-call-to-action-section";

function MarketingBookPage() {
  return (
    <main>
      <MarketingBookHeroSection />
      <AchievementSection />
      <PlanSection />
      <MarketingCallToActionSection />
      <MarketingTechniquesSection />
      <WhyMarketingServiceSection />
    </main>
  );
}

export default MarketingBookPage;
