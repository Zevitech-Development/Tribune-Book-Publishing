import React from "react";

import MarketingBookHeroSection from "@/sections/marketing/marketing-book-hero-section";
import AchievementSection from "@/components/common/achievement-section";
import AwarenessSection from "@/sections/marketing/awareness-section";
import PlanSection from "@/sections/marketing/plan-section";
import MarketingTechniquesSection from "@/sections/marketing/marketing-techniques-section";
import WhyMarketingServiceSection from "@/sections/marketing/why-marketing-service-section";
import MarketingCallToActionSection from "@/sections/marketing/marketing-call-to-action-section";
import MissionSection from "@/sections/marketing/mission-section";

function MarketingBookPage() {
  return (
    <main>
      <MarketingBookHeroSection />
      <AchievementSection />
      <AwarenessSection />
      <PlanSection />
      <MarketingTechniquesSection />
      <MarketingCallToActionSection />
      <WhyMarketingServiceSection />
      <MissionSection />
    </main>
  );
}

export default MarketingBookPage;
