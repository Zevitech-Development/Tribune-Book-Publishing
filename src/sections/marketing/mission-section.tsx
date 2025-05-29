import React from "react";
import Image from "next/image";

import MissionSectionImg from "../../../public/images/marketing-mission-section-img.webp";

import { MissionSectionContent } from "@/content/marketing-book-page-content";

function MissionSection() {
  return (
    <section className="layout-standard section-padding-standard grid lg:grid-cols-2 gap-16 lg:gap-4 mb-12 mt-4">
      <div className="flex-center">
        <Image
          className="w-[280px] md:w-[440px]"
          src={MissionSectionImg}
          alt="Our Mission"
        />
      </div>

      <div className="space-y-5">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold max-md:text-center">
          Calling All The <span className="text-primary">Authors</span> To{" "}
          <span className="text-primary">Embrace</span> The Spotlight
        </h1>
        <p className="md:text-base text-sm">
          Tribune Book Publishing is all ears to your voice and story and share
          it with the world. We firmly believe in the power of narrative and the
          profound influence of a well-crafted story. Therefore, we emphasize
          you tell your story and get it published
        </p>
        <p className="md:text-base text-sm">
          Whether you're an aspiring storyteller, a professional author, or
          anyone in between, we're here to guide you through
        </p>

        <div className="flex justify-between items-center">
          {MissionSectionContent.map((data, index) => (
            <div key={index} className="flex items-center md:flex-row flex-col gap-2">
              <div className="border rounded-md shadow-md p-1">
                <Image
                  className="w-[40px]"
                  src={data.sectionIcon}
                  alt={data.sectionText}
                />
              </div>
              <div className="max-md:text-center">
                <p className="text-base sm:text-lg md:text-2xl font-bold">
                  {data.noOfCounts}
                </p>
                <p className="text-xs font-semibold mt-1">{data.sectionText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
