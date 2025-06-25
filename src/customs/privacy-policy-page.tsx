import React from "react";

import {
  PrivacyPolicyContent01,
  PrivacyPolicyContent02,
  PrivacyPolicyContent03,
} from "@/content/privacy-policy-page-content";

import { IoMdArrowDropright } from "react-icons/io";

function PrivacyPolicyPage() {
  return (
    <main className="layout-standard section-margin-standard flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="lg:text-6xl md:text-4xl text-3xl !leading-[135%] text-heading font-libre font-bold">
            Privacy Policy
          </h1>
          <p className="md:text-base text-sm">
            This policy explains how tribunebookpublishing.com handles personal
            information. As a result, this privacy policy only applies to data
            acquired through this site. Read the following information to
            explore how Tribune Book Publishing respects your privacy.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PrivacyPolicyContent01.map((data, index) => (
            <div key={index} className="flex gap-1">
              <IoMdArrowDropright size={22} />
              <p className="md:text-base text-sm">{data.sectionPoint}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="lg:text-2xl md:text-xl text-lg !leading-[135%] text-primary font-libre font-bold">
            YOUR CONTROL AND ACCESS TO INFORMATION
          </h1>
          <p className="md:text-base text-sm">
            You have the option to stop contacting us in the future.
            Furthermore, you can contact us at any time to take any of the
            following steps by contacting us using the email address or phone
            number listed on our website:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PrivacyPolicyContent02.map((data, index) => (
            <div key={index} className="flex gap-1">
              <IoMdArrowDropright size={22} />
              <p className="md:text-base text-sm">{data.sectionPoint}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {PrivacyPolicyContent03.map((data, index) => (
          <div key={index} className="space-y-4">
            <h1 className="lg:text-xl md:text-lg text-base !leading-[135%] text-primary font-libre font-bold">
              {data.sectionHeading}
            </h1>
            <p className="md:text-base text-sm">
              {data.sectionText}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
