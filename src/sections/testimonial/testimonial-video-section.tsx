import React from "react";

import { TestimonialVideoSectionContent } from "@/content/testimonial-page-content";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function TestimonialVideoSection() {
  return (
    <section className="layout-standard  section-padding-standard flex flex-col gap-4 max-lg:mt-4 max-md:mt-8">
      <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre text-center">
        What Our{" "}
        <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
          Authors
        </span>{" "}
        Say About Us
      </h1>

      <Carousel className="w-full mx-auto mt-4">
        <CarouselContent>
          {TestimonialVideoSectionContent.map((data, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-2 py-8"
            >
              <div className="shadow-lg rounded-lg flex flex-col h-full">
                <iframe
                  className="w-full lg:h-64 h-[200px] rounded-t-lg"
                  src={data.videoSource}
                  title={`Testimonial Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="w-full p-4 space-y-4 flex-grow flex flex-col justify-between">
                  <p className="text-sm font-medium text-center">
                    {data.userReview}
                  </p>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-heading">
                      {data.userName}
                    </h3>
                    <p className="text-xs text-primary">{data.designation}</p>
                  </div>
                </div>
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

export default TestimonialVideoSection;
