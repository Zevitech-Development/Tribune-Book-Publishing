import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { PublishingPlatformsSectionContent } from "@/contents/common-component-content";

const PublishingPlatformsSection = () => {
  return (
    <section className="layout-standard section-padding-standard flex flex-col gap-12">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[120%] text-heading font-libre font-bold text-center">
          Get Yourself <span className="text-primary">Published</span> on
          Various Platforms
        </h1>
        <p className="font-medium lg:text-lg md:text-base text-sm">
          Here are some of the platforms we work with
        </p>
      </div>

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
