import React from "react";

function ProcessSection() {
  return (
    <section className="layout-standard section-margin-standard section-padding-standard flex flex-col lg:gap-16 gap-8 -mb-8">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[120%] text-heading font-libre font-bold text-center">
          Our Publishing <span className="text-primary">Process</span> -
          Infinity Fiction
        </h1>
        <p className="font-medium lg:text-lg md:text-base text-sm max-w-[900px] text-center">
          Our portfolio includes every genre and subject while ensuring your
          ideas and picky choices. Tribune Book Publishing goes beyond blazing
          creativity and delivers firing results.
        </p>
      </div>

      <div className="w-full section-padding-standard">
        <div className="relative flex flex-col justify-center border-l-4 border-black rounded-[0px] px-20 h-auto sm:h-[150px] ">
          <h1 className="md:text-2xl text-base font-bold text-heading font-libre">
            Pre-Launch Planning
          </h1>
          <p className="text-base mt-2 max-w-[550px]">
            We help you create a solid marketing strategy, identify your target
            audience, and set clear goals
          </p>
          <div className="w-10 h-10 rounded-full text-2xl font-bold bg-primary text-primary-foreground flex items-center justify-center absolute -left-5 top-[calc(50%-20px)]">
            1
          </div>
        </div>

        <div className="relative flex flex-col items-end border-t-4 border-r-4 border-black rounded-[0px_12px_0px] h-auto sm:h-[150px] px-6 sm:px-20 py-4 sm:py-6">
          <h1 className="md:text-2xl text-base font-bold text-heading font-libre">
            Online Promotion
          </h1>
          <p className="text-base mt-2 max-w-[550px] text-right">
            We use digital platforms, including social media and email
            marketing, to reach your audience effectively.
          </p>
          <div className="w-10 h-10 rounded-full text-[23px] font-bold bg-primary text-primary-foreground flex items-center justify-center absolute -right-5 bottom-[55px]">
            2
          </div>
        </div>

        <div className="relative border-t-4 border-l-4 border-black rounded-[12px_0pc] px-6 sm:px-20 py-6 h-auto sm:h-[150px]">
          <h1 className="md:text-2xl text-base font-bold text-heading font-libre">
            Offline Promotion
          </h1>
          <p className="text-base mt-2 max-w-[550px]">
            We organize events like book fairs and author signings to connect
            with readers in person.
          </p>
          <div className="w-10 h-10 rounded-full text-[23px] font-bold bg-primary text-primary-foreground flex items-center justify-center absolute -left-5 bottom-[55px]">
            3
          </div>
        </div>

        <div className="relative flex flex-col border-r-4 border-t-4 items-end border-black rounded-[0_12px] px-6 sm:px-20 py-6 h-auto sm:h-[150px]">
          <h1 className="md:text-2xl text-base font-bold text-heading font-libre">
            Book Reviews & Word Of Mouth
          </h1>
          <p className="text-base mt-2 max-w-[550px] text-right">
            We encourage reviews and leverage personal recommendations to build
            your book's reputation.
          </p>
          <div className="w-10 h-10 rounded-full text-[23px] font-bold bg-primary text-primary-foreground flex items-center justify-center absolute -right-5 top-[55px]">
            4
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
