import React from "react";
import Image from "next/image";

import MarketingMissionSectionImg01 from "../../../public/images/marketing-mission-section-img-01.jpg";
import MarketingMissionSectionImg02 from "../../../public/images/marketing-mission-section-img-02.jpg";
import MarketingMissionSectionImg03 from "../../../public/images/marketing-mission-section-img-03.jpg";

function MissionSection() {
  return (
    <section className="layout-standard py-[2rem]">
      <div className="text-center mb-8 flex flex-col items-center gap-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold text-center mx-auto lg:max-w-[600px]">
          Amplifying Authors Through{" "}
          <span className="text-primary">Strategic Book</span> Marketing
        </h1>
        <p className="font-medium lg:text-lg md:text-base text-sm">
          At Tribune Book Publishing, our mission is simple — to help authors
          rise above the noise. We combine creative storytelling with proven
          digital strategies to increase book visibility, grow readership, and
          drive real results. Your success is our goal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Image
          src={MarketingMissionSectionImg01}
          alt="Our Mission"
          className="rounded-lg object-cover w-full md:h-[350px] h-[200px] order-1"
        />

        <Image
          src={MarketingMissionSectionImg03}
          alt="Our Mission"
          className="rounded-lg object-cover w-full h-[350px] md:col-span-2 lg:order-2 order-3 max-md:hidden"
        />

        <Image
          src={MarketingMissionSectionImg02}
          alt="Our Mission"
          className="rounded-lg object-cover w-full md:h-[350px] h-[200px] lg:order-3 order-2"
        />
      </div>
    </section>
  );
}

export default MissionSection;
