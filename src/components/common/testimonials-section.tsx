import React from "react";

import { TestimonialsSectionContent } from "@/content/common-components-content";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa6";

function TestimonialsSection() {
  return (
    <section className="layout-standard section-margin-standard flex flex-col gap-8 mt-16">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[120%] text-heading font-libre font-bold text-center">
          What Our <span className="text-primary">Clients</span> Say
        </h1>
        <p className="font-medium lg:text-lg md:text-base text-sm max-w-[900px] text-center">
          At Ghost Book Writers, we take pride in the success of our clients.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="p-4">
          {TestimonialsSectionContent.map((data, index) => (
            <CarouselItem
              key={index}
              className="bg-orange-50 lg:basis-1/3 md:basis-1/2 w-full h-[300px] p-5 mx-2 border-2 !shadow-lg rounded-md cursor-move"
            >
              <div className="space-y-2">
                <ImQuotesLeft className="text-black/20 mb-4" size={30} />
                <h3 className="lg:text-xl md:text-lg text-base font-bold text-heading font-libre">
                  {data.userName}
                </h3>
                <p className="font-medium text-sm">{data.userReview}</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-300" size={17} />
                  <FaStar className="text-yellow-300" size={17} />
                  <FaStar className="text-yellow-300" size={17} />
                  <FaStar className="text-yellow-300" size={17} />
                  <FaStar className="text-yellow-300" size={17} />
                </div>
                <ImQuotesRight className="text-black/20" size={30} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default TestimonialsSection;
