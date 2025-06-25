import React from "react";
import Image from "next/image";

import MarketingMissionSectionImg01 from "../../../../public/images/marketing-mission-section-img-01.jpg";
import MarketingMissionSectionImg02 from "../../../../public/images/marketing-mission-section-img-02.jpg";
import MarketingMissionSectionImg03 from "../../../../public/images/marketing-mission-section-img-03.jpg";

function MissionSection() {
  return (
    <section className="layout-standard py-[2rem]">
      <div className="text-center mb-8 flex flex-col items-center gap-4">
        <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre text-center mx-auto lg:max-w-[800px] mb-4">
          Amplifying Authors Through{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            Strategic Book
          </span>{" "}
          Marketing
        </h1>
        <p className="md:text-base text-sm">
          At Tribune Book Publishing, our mission is simple — to help authors
          rise above the noise. We combine creative storytelling with proven
          digital strategies to increase book visibility, grow readership, and
          drive real results. Your success is our goal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
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
