import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { AchievementSectionContent } from "@/content/common-components-content";

const AchievementSection = () => {
  return (
    <section className="bg-black w-full h-[90px]">
      <div className="layout-standard h-full flex-center">
        <Marquee>
          {AchievementSectionContent.map((data, index) => (
            <Image
              key={index}
              src={data.img}
              alt={`Platform 0${index + 1}`}
              width={100}
              className="w-[170px] mx-[20px]"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AchievementSection;
