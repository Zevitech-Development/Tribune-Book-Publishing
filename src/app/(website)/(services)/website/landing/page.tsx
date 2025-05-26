import React from "react";
import { Metadata } from "next";

import LandingPage from "@/customs/services/website/landing-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Landing Page Design for Authors | High-Converting Pages - Tribune Book Publishing",
  description:
    "Boost your book sales and email signups with professionally designed landing pages. Tribune Book Publishing creates custom, high-converting landing pages tailored for authors, book launches, and promotions.",
});

function Landing() {
  return <LandingPage />;
}

export default Landing;
