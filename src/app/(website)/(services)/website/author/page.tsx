import React from "react";
import { Metadata } from "next";

import AuthorPage from "@/customs/services/website/author-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Author Website Design Services | Build Your Author Platform - Tribune Book Publishing",
  description:
    "Establish your online presence with a custom author website. Tribune Book Publishing builds professional, mobile-friendly websites for authors to showcase books, grow their brand, and connect with readers.",
});

function Author() {
  return <AuthorPage />;
}

export default Author;
