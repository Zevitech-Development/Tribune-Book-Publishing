import React from "react";
import { Metadata } from "next";

import AboutUsPage from "@/customs/about-us-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "About Us | Tribune Book Publishing - Professional eBook Publishing Services",
  description:
    "Discover how Tribune Book Publishing helps authors publish eBooks effortlessly across platforms like Amazon Kindle and Apple Books. Learn more about our expert editing, cover design, and global distribution services.",
});

function AboutUs() {
  return <AboutUsPage />;
}

export default AboutUs;
