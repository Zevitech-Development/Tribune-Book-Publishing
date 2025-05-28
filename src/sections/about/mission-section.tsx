import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import MissionSectionImg from "../../../public/images/mission-section-img.webp";

function MissionSection() {
  return (
    <section className="layout-standard section-padding-standard flex items-center justify-between gap-12 mb-12">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold max-w-[600px]">
          Elevate Your Story with{" "}
          <span className="text-primary">Professional Publishing</span>
        </h1>

        <p className="md:text-base text-sm max-w-[700px]">
          Transforming your ideas into a bestselling book requires expertise,
          precision, and the right publishing partner. At Tribune Book
          Publishing, we offer comprehensive solutions from expert{" "}
          <span className="font-semibold">ghostwriting</span> and{" "}
          <span className="font-semibold">meticulous editing</span> to seamless{" "}
          <span className="font-semibold">publishing</span>,{" "}
          <span className="font-semibold">distribution</span>, and{" "}
          <span className="font-semibold">marketing</span>. Our team of industry
          professionals ensures that your book not only meets high-quality
          standards but also reaches the right audience. Whether you&apos;re a
          first time author or a seasoned writer, we&apos;re here to bring your
          vision to life and position your book for success.{" "}
          <span className="font-semibold">
            Let&apos;s craft a masterpiece together.
          </span>
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Button className="cta-button-animation md:h-[45px] md:px-6 hover:bg-primary-hover max-md:w-full text-base">
            Live Chat
          </Button>
          <Button className="cta-button-animation md:h-[45px] md:px-6 hover:bg-primary-hover max-md:w-full text-base">
            Contact Us
          </Button>
        </div>
      </div>

      <Image
        src={MissionSectionImg}
        alt="Our Mission"
        className="w-[500px] rounded-2xl shadow-xl"
      />
    </section>
  );
}

export default MissionSection;
