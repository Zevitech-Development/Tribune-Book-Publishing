import React from "react";

import MarketingBookHeroSection from "@/sections/marketing/marketing-book-hero-section";
import AchievementSection from "@/components/common/achievement-section";
import AwarenessSection from "@/sections/marketing/awareness-section";
import PlanSection from "@/sections/marketing/plan-section";
import MarketingTechniquesSection from "@/sections/marketing/marketing-techniques-section";
import WhyMarketingServiceSection from "@/sections/marketing/why-marketing-service-section";

function MarketingBookPage() {
  return (
    <main>
      <MarketingBookHeroSection />
      <AchievementSection />
      <AwarenessSection />
      <PlanSection />
      <MarketingTechniquesSection />
      <WhyMarketingServiceSection />
    </main>
  );
}

export default MarketingBookPage;
