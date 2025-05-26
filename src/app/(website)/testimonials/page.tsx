import React from "react";
import { Metadata } from "next";

import TestimonialsPage from "@/customs/testimonials-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Client Testimonials | See What Authors Say About Tribune Book Publishing",
  description:
    "Discover real stories from authors who've published with us. Read testimonials about our eBook publishing, ghostwriting, and editing services to see why writers trust Tribune Book Publishing.",
});

function Testimonials() {
  return <TestimonialsPage />;
}

export default Testimonials;
