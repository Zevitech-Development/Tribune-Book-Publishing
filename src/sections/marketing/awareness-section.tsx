import React from "react";

function AwarenessSection() {
  return (
    <section className="layout-standard flex flex-col gap-7 items-center section-padding-standard">
      <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] max-w-[600px] text-heading font-libre font-bold text-center">
        Drive <span className="text-primary"> Awareness</span> to Your Book and
        Author Platform
      </h1>
      <div className="text-center space-y-4">
        <p className="md:text-base text-sm lg:max-w-[700px]">
          Our book marketing services are tailored to your goals, genre, and
          publishing stage. Whether you&apos;re just getting started or
          enhancing your existing efforts, we&apos;re here to help you promote
          with purpose and precision.
        </p>
      </div>
    </section>
  );
}

export default AwarenessSection;
