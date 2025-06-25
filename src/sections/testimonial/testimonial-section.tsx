import Image from "next/image";
import React from "react";

import { TestimonialSectionContent } from "@/content/testimonial-page-content";

import { ImQuotesLeft } from "react-icons/im";

function TestimonialSection() {
  return (
    <section className="layout-standard section-margin-standard space-y-12">
      <h1 className="lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre text-center">
        Jump In Our{" "}
        <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
          Client&apos;s
        </span>{" "}
        Reviews!
      </h1>

      <div className="h-full grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8 max-lg:gap-4 px-3 pt-6">
        {TestimonialSectionContent.map((data, index) => (
          <div
            key={index}
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
            className={`bg-white h-auto rounded-xl p-2 md:p-4 flex flex-col gap-4 justify-evenly items-center transition-transform duration-300 ${
              index === 1 ? "lg:rotate-[2deg]" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-center">
                <Image
                  className="w-full h-full object-cover rounded-full"
                  src={data.userImag}
                  alt="user-profile"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-base md:text-xl font-semibold text-heading mt-1">
                {data.userName}
              </h3>
              <p className="text-xs font-medium text-primary">
                {data.userDesignation}
              </p>
            </div>

            <p className="text-sm text-center">{data.userReview}</p>
            <div className="w-12 h-12 rounded-full shadow-lg flex-center">
              <ImQuotesLeft className="text-primary" size={22} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
