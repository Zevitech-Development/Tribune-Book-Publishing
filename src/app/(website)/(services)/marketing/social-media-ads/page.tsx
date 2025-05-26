import React from "react";
import { Metadata } from "next";

import SocialMediaAdsPage from "@/customs/services/marketing/social-media-ads-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Social Media Advertising for Authors | Book Marketing Services - Tribune Book Publishing",
  description:
    "Promote your book on Facebook, Instagram, and more. Tribune Book Publishing offers targeted social media advertising services to help authors increase visibility, generate leads, and boost book sales.",
});

function SocialMediaAds() {
  return <SocialMediaAdsPage />;
}

export default SocialMediaAds;
