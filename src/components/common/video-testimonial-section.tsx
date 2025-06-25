import React from "react";

function VideoTestimonialSection() {
  return (
    <section className="layout-standard section-padding-standard flex flex-col lg:gap-12 md:gap-8 gap-6 max-lg:mt-4 max-md:mt-8">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="mb-4 lg:text-5xl font-extrabold !leading-[140%] tracking-tigh md:text-4xl text-3xl text-heading font-libre text-center">
          Praise from{" "}
          <span className="text-primary underline underline-offset-3 decoration-8 decoration-primary italic">
            Authors
          </span>
        </h1>
        <p className="font-medium md:text-base text-sm max-w-[900px] text-center max-md:hidden">
          See what they have to say about their journey with us. See what they
          have to say about their journey with us. See what they have to say
          about their journey with us.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {/* VIDEO 01 */}
        <div className="w-full lg:w-1/3 md:1/2">
          <video
            className="w-full lg:h-64 h-[300px] rounded-lg shadow-lg object-cover"
            controls
            preload="metadata"
          >
            <source src="./videos/review-01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* VIDEO 02 */}
        <div className="w-full lg:w-1/3 md:1/2">
          <video
            className="w-full lg:h-64 h-[300px] rounded-lg shadow-lg object-cover"
            controls
            preload="metadata"
          >
            <source src="./videos/review-02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoTestimonialSection;
