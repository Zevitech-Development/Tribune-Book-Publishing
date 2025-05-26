import React from "react";
import { Metadata } from "next";

import PortfolioPage from "@/customs/services/website/portfolio-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Author Portfolio Website Design | Showcase Your Work Online - Tribune Book Publishing",
  description:
    "Create a stunning author portfolio website to highlight your books, achievements, and writing journey. Tribune Book Publishing designs professional portfolio sites that help authors build credibility and grow their audience.",
});

function Portfolio() {
  return <PortfolioPage />;
}

export default Portfolio;
