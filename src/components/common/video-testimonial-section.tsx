import React from "react";

function VideoTestimonialSection() {
  return (
    <section className="layout-standard section-padding-standard flex flex-col lg:gap-12 gap-8 max-lg:mt-4 max-md:mt-8">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl !leading-[135%] text-heading font-libre font-bold text-center">
          What Our <span className="text-primary">Authors</span> Say About Us
        </h1>
        <p className="font-medium lg:text-lg md:text-base text-sm max-w-[900px] text-center">
          See what they have to say about their journey with us.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {/* VIDEO 01 */}
        <div className="w-full lg:w-1/3 md:1/2">
          <iframe
            className="w-full lg:h-64 h-[300px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/EhTCYMKZXy4"
            title="Testimonial Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* VIDEO 02 */}
        <div className="w-full lg:w-1/3 md:1/2">
          <iframe
            className="w-full lg:h-64 h-[300px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/EhTCYMKZXy4"
            title="Testimonial Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default VideoTestimonialSection;
