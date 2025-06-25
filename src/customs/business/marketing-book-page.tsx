import React from "react";

import MarketingBookHeroSection from "@/sections/business/marketing/marketing-book-hero-section";
import AchievementSection from "@/components/common/achievement-section";
import PlanSection from "@/sections/business/marketing/plan-section";
import MarketingTechniquesSection from "@/sections/business/marketing/marketing-techniques-section";
import WhyMarketingServiceSection from "@/sections/business/marketing/why-marketing-service-section";
import MarketingCallToActionSection from "@/sections/business/marketing/marketing-call-to-action-section";
import MissionSection from "@/sections/business/marketing/mission-section";
import ROISection from "@/sections/business/marketing/roi-section";

function MarketingBookPage() {
  return (
    <main>
      <MarketingBookHeroSection />
      <AchievementSection />
      <ROISection />
      <MissionSection />
      <PlanSection />
      <MarketingCallToActionSection />
      <MarketingTechniquesSection />
      <WhyMarketingServiceSection />
    </main>
  );
}

export default MarketingBookPage;
