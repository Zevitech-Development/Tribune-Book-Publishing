import React from "react";

import {
  TermsServicesContent01,
  TermsServicesContent02,
  TermsServicesContent03,
} from "@/content/terms-services-page-content";

import { IoMdArrowDropright } from "react-icons/io";

function TermsServicesPage() {
  return (
    <main className="layout-standard section-margin-standard flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="lg:text-6xl md:text-4xl text-3xl !leading-[135%] text-heading font-libre font-bold">
            Terms & Conditions
          </h1>

          <p className="md:text-base text-sm">
            Your consent to the following terms and conditions is implied by
            your use of this Website and/or our services:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {TermsServicesContent01.map((data, index) => (
            <div key={index} className="flex gap-1">
              <IoMdArrowDropright size={22} />
              <p className="text-sm md:text-base">{data.sectionPoint}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="lg:text-2xl md:text-xl text-lg !leading-[135%] text-primary font-libre font-bold">
          DEFINITION OF TERMS
        </h1>

        <div className="flex flex-col gap-4">
          {TermsServicesContent02.map((data, index) => (
            <div key={index} className="flex gap-1">
              <p className="text-sm md:text-base">
                <span className="font-bold">{data.boldPoint}</span>{" "}
                {data.sectionPoint}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {TermsServicesContent03.map((data, index) => (
          <div key={index} className="space-y-8">
            <h1 className="lg:text-xl md:text-lg text-base !leading-[135%] text-primary font-libre font-bold">
              {data.sectionHeading}
            </h1>
            <div className="md:text-base text-sm space-y-4">
              {data.sectionText.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default TermsServicesPage;
