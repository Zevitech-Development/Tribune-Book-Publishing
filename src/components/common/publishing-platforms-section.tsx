import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { PublishingPlatformsSectionContent } from "@/content/common-components-content";

const PublishingPlatformsSection = () => {
  return (
    <section className="layout-standard section-padding-standard flex flex-col md:gap-12 gap-8">
      <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[120%] text-heading font-libre font-bold text-center">
        Publish on <span className="text-primary">Top Platforms</span>
      </h1>

      <Marquee>
        {PublishingPlatformsSectionContent.map((data, index) => (
          <Image
            key={index}
            src={data.img}
            alt={`Platform 0${index + 1}`}
            width={100}
            className="mx-12"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default PublishingPlatformsSection;
