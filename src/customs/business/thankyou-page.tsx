import React from "react";

import { FaCheckCircle } from "react-icons/fa";

function ThankyouPage() {
  return (
    <main className="layout-standard lg:h-[calc(100vh-138px)] h-[calc(100vh-158px)] flex flex-col justify-center items-center gap-10 px-4">
      <div className="flex flex-col items-center gap-8 ">
        <FaCheckCircle className="text-green-500" size={60} />
        <div className="text-center flex flex-col items-center gap-2">
          <h1 className="lg:text-5xl md:text-4xl text-2xl leading-none tracking-tight text-heading font-libre font-bold mb-4">
            Thank you for getting in touch!
          </h1>
          <h2 className="lg:text-xl md:text-lg text-base !leading-[135%] text-heading font-libre font-medium">
            Your request has been successfully submitted.
          </h2>
        </div>
      </div>
      <p className="md:text-base text-sm text-center">
        One of our seasoned publishing experts will examine your information and
        contact you shortly to discuss your goals, answer your questions, and
        offer customized support tailored to your book and vision. We&apos;re
        thrilled to assist you in taking the next step in your publishing
        journey with Tribune Book Publishing.
      </p>
    </main>
  );
}

export default ThankyouPage;
