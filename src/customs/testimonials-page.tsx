import React from "react";

import TestimonialHeroSection from "@/sections/testimonial/testimonial-hero-section";
import TestimonialSection from "@/sections/testimonial/testimonial-section";
import TestimonialVideoSection from "@/sections/testimonial/testimonial-video-section";

function TestimonialsPage() {
  return (
    <main>
      <TestimonialHeroSection />
      <TestimonialSection />
      <TestimonialVideoSection />
    </main>
  );
}

export default TestimonialsPage;
