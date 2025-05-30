import React from "react";
import Image from "next/image";

import MarketingPlanSectionImg01 from "../../../public/images/marketing-plan-section-img-01.jpg";
import MarketingPlanSectionImg02 from "../../../public/images/marketing-plan-section-img-02.jpg";

import { Button } from "@/components/ui/button";

function PlanSection() {
  return (
    <section className="layout-standard grid lg:grid-cols-2 section-margin-standard gap-12 pt-4 pb-8">
      <div className="grid md:grid-cols-2 gap-4 lg:mt-8">
        <Image
          className="w-full rounded-lg md:h-[270px] h-[250px] object-cover max-lg:shadow-xl"
          src={MarketingPlanSectionImg01}
          alt="Return on Investment"
        />
        <Image
          className="mt-4 w-full lg:mt-10 rounded-lg h-[270px] object-cover max-lg:shadow-xl max-md:hidden"
          src={MarketingPlanSectionImg02}
          alt="Return on Investment"
        />
      </div>

      <div className="space-y-4 col-span-1">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold max-md:text-center">
          Smart <span className="text-primary">Marketing</span> Plans That Drive
          Book Sales
        </h1>

        <p className="md:text-base text-sm leading-relaxed max-md:text-center">
          Every author&apos;s journey is different — that&apos;s why our marketing plans
          are built to match your goals, budget, and audience. Whether you&apos;re
          launching your first book or promoting a growing backlist, we have a
          strategy that fits.
        </p>

        <p className="md:text-base text-sm leading-relaxed max-md:text-center">
          From targeted advertising and influencer outreach to ongoing campaign
          support, our flexible plans help boost discoverability and grow
          long-term visibility — all while you stay focused on writing.
        </p>

        <div className="flex items-center gap-4 !mt-8">
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 max-md:w-full hover:bg-primary-hover md:text-base text-sm">
            Get Started
          </Button>
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 max-md:w-full hover:bg-primary-hover md:text-base text-sm">
            Live Chat
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PlanSection;
