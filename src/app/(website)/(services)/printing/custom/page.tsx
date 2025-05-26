import React from "react";
import { Metadata } from "next";

import CustomPage from "@/customs/services/printing/custom-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Custom Book Printing Services | Unique Formats & Finishes - Tribune Book Publishing",
  description:
    "Create a book as unique as your story. Tribune Book Publishing offers custom printing options including special sizes, finishes, paper types, and binding to match your creative vision and publishing goals.",
});

function Custom() {
  return <CustomPage />;
}

export default Custom;
