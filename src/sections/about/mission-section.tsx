import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import MissionSectionImg from "../../../public/images/mission-section-img.webp";

function MissionSection() {
  return (
    <section className="layout-standard section-padding-standard flex items-center lg:flex-row flex-col lg:justify-between lg:gap-12 gap-8 lg:mb-12 mb-4">
      <div className="flex flex-col justify-center gap-4 lg:order-1 order-2">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold max-w-[600px]">
          Elevate Your Story with{" "}
          <span className="text-primary">Professional Publishing</span>
        </h1>

        <p className="md:text-base text-sm max-w-[700px]">
          Transforming your ideas into a bestselling book requires expertise,
          precision, and the right publishing partner. At Tribune Book
          Publishing, we offer comprehensive solutions from expert ghostwriting
          and meticulous editing to seamless publishing,distribution, and
          marketing. Our team of industry professionals ensures that your book
          not only meets high-quality standards but also reaches the right
          audience. Whether you&apos;re a first time author or a seasoned
          writer, we&apos;re here to bring your vision to life and position your
          book for success. Let&apos;s craft a masterpiece together.
        </p>

        <div className="flex items-center lg:gap-4 gap-2 mt-4">
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm">
            Live Chat
          </Button>
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover max-md:w-full md:text-base text-sm">
            Contact Us
          </Button>
        </div>
      </div>

      <Image
        src={MissionSectionImg}
        alt="Our Mission"
        className="md:w-[500px] rounded-2xl shadow-xl lg:order-2 order-1"
      />
    </section>
  );
}

export default MissionSection;
