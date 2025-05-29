import React from "react";
import Image from "next/image";

import PlanSectionImg from "../../../public/images/plan-section-img.webp";

import { Button } from "@/components/ui/button";

function PlanSection() {
  return (
    <section className="layout-standard section-padding-standard pt-0 grid md:grid-cols-3 gap-4">
      <div className="overflow-hidden flex-center animate-floating02">
        <Image
          className="md:w-[445px] w-[340px]"
          src={PlanSectionImg}
          alt="Our Planning"
        />
      </div>

      <div className="space-y-4 md:col-span-2">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold max-md:text-center">
          Boosting Your{" "}
          <span className="text-primary">Self-Published Book</span> with a
          Winning Marketing Strategy
        </h1>

        <p className="md:text-base text-sm leading-relaxed">
          Effective book marketing turns great ideas into visible successes.
          From book reviews and social media to email campaigns and launch
          strategies, our services help increase visibility and build your
          author brand.
        </p>

        <p className="md:text-base text-sm leading-relaxed">
          With tailored marketing plans and expert support, you can focus on
          writing while we handle the promotion. Reach your audience, grow your
          readership, and position your book for long-term success.
        </p>

        <div className="flex items-center gap-4 !mt-8">
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover md:text-base text-sm">
            Get Started
          </Button>
          <Button className="cta-button-animation md:h-[45px] h-[40px] md:px-6 hover:bg-primary-hover md:text-base text-sm">
            Live Chat
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PlanSection;
