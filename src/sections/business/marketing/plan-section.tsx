import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { OpenLiveChat } from "@/utils/open-live-chat";

import MarketingPlanSectionImg01 from "../../../../public/images/marketing-plan-section-img-01.jpg";
import MarketingPlanSectionImg02 from "../../../../public/images/marketing-plan-section-img-02.jpg";

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
        <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre max-md:text-center mb-4">
          Marketing That{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            Sells
          </span>{" "}
          Books
        </h1>

        <p className="md:text-base text-sm leading-relaxed max-md:text-center">
          Every author&apos;s journey is different — that&apos;s why our
          marketing plans are built to match your goals, budget, and audience.
          Whether you&apos;re launching your first book or promoting a growing
          backlist, we have a strategy that fits.
        </p>

        <p className="md:text-base text-sm leading-relaxed max-md:text-center">
          From targeted advertising and influencer outreach to ongoing campaign
          support, our flexible plans help boost discoverability and grow
          long-term visibility — all while you stay focused on writing.
        </p>

        <div className="flex items-center gap-4 !mt-8">
          <Button
            onClick={OpenLiveChat}
            className="cta-button-animation md:h-[45px] h-[40px] md:px-6 max-md:w-full hover:bg-primary-hover md:text-base text-sm"
          >
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
