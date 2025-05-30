import React from "react";

import {
  WhyMarketingServiceSectionContent01,
  WhyMarketingServiceSectionContent02,
} from "@/content/marketing-book-page-content";

import { Button } from "@/components/ui/button";

import { GiCheckMark } from "react-icons/gi";

function WhyMarketingServiceSection() {
  return (
    <section className="layout-standard section-padding-standard space-y-6 lg:mb-12 mb-6">
      <h1 className="lg:text-4xl md:text-3xl text-2xl max-w-[600px] mx-auto !leading-[135%] text-heading font-libre font-bold text-center">
        Why <span className="text-primary">Choose Our</span> Book Marketing
        Services?
      </h1>

      <div className="w-full grid md:grid-cols-2 md:gap-3">
        <div className="p-3 space-y-3">
          {WhyMarketingServiceSectionContent01.map((data, index) => (
            <div key={index} className="flex items-start gap-4">
              <GiCheckMark className="text-primary translate-y-1" size={16} />
              <p className="text-sm md:text-base w-[calc(100%-16px)]">
                {data.sectionPoint}
              </p>
            </div>
          ))}
        </div>

        <div className="p-3 space-y-3">
          {WhyMarketingServiceSectionContent02.map((data, index) => (
            <div key={index} className="flex items-start gap-4">
              <GiCheckMark className="text-primary translate-y-1" size={16} />
              <p className="text-sm md:text-base w-[calc(100%-16px)]">
                {data.sectionPoint}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-center md:gap-4 gap-2 max-md:w-full">
        <Button className="cta-button-animation md:h-[45px] h-[40px] max-md:w-full md:px-6 hover:bg-primary-hover md:text-base text-sm">
          Get Started
        </Button>
        <Button className="cta-button-animation md:h-[45px] h-[40px] max-md:w-full md:px-6 hover:bg-primary-hover md:text-base text-sm">
          Live Chat
        </Button>
      </div>
    </section>
  );
}

export default WhyMarketingServiceSection;
