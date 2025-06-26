import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { OpenLiveChat } from "@/utils/open-live-chat";

import ROISectionImg01 from "../../../../public/images/roi-section-img-01.jpg";
import ROISectionImg02 from "../../../../public/images/roi-section-img-02.jpg";

function ROISection() {
  return (
    <section className="layout-standard grid lg:grid-cols-2 section-margin-standard gap-12 lg:pt-12 md:pt-4">
      <div className="space-y-4 col-span-1 lg:order-1 order-2">
        <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre max-md:text-center">
          Grow{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            Sales
          </span>{" "}
          with Results
        </h1>

        <p className="md:text-base text-sm leading-relaxed max-md:text-center">
          Our marketing delivers more than just visibility — it generates real
          book sales. Every campaign is strategically designed to maximize
          engagement, strengthen your author presence, and deliver a tangible
          return on investment.
        </p>

        <p className="md:text-base text-sm leading-relaxed max-md:text-center">
          From increasing discoverability to boosting conversions, we turn your
          goals into results. With data-driven insights and proven tactics, we
          help authors grow with purpose and measurable impact.
        </p>

        <div className="flex items-center gap-4 !mt-8">
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 max-md:w-full hover:bg-primary-hover md:text-base text-sm">
            Get Started
          </Button>
          <Button
            onClick={OpenLiveChat}
            className="cta-button-animation md:h-[45px] h-[40px] md:px-6 max-md:w-full hover:bg-primary-hover md:text-base text-sm"
          >
            Live Chat
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 lg:mt-8 lg:order-2 order-1">
        <Image
          className="w-full rounded-lg md:h-[270px] h-[250px] object-cover max-lg:shadow-xl max-md:hidden"
          src={ROISectionImg01}
          alt="Return on Investment"
        />
        <Image
          className="mt-4 w-full lg:mt-10 rounded-lg h-[270px] object-cover max-lg:shadow-xl"
          src={ROISectionImg02}
          alt="Return on Investment"
        />
      </div>
    </section>
  );
}

export default ROISection;
