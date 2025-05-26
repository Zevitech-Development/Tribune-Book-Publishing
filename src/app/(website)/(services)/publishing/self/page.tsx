import React from "react";
import { Metadata } from "next";

import SelfPage from "@/customs/services/publishing/self-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Self-Publishing Services | Publish Your Book Independently - Tribune Book Publishing",
  description:
    "Take control of your publishing journey. Tribune Book Publishing offers expert self-publishing services including editing, cover design, formatting, printing, and global distribution to help you publish your book your way.",
});

function Self() {
  return <SelfPage />;
}

export default Self;
