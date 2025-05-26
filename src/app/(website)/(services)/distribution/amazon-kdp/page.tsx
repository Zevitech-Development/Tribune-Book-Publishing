import React from "react";
import { Metadata } from "next";

import AmazonKDPPage from "@/customs/services/distribution/amazon-kdp-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Amazon KDP Publishing Services | Self-Publish with Ease - Tribune Book Publishing",
  description:
    "Publish your book on Amazon with confidence. Tribune Book Publishing offers expert KDP setup, formatting, and distribution services to help authors launch their books on the world's largest online marketplace.",
});

function AmazonKDP() {
  return <AmazonKDPPage />;
}

export default AmazonKDP;
