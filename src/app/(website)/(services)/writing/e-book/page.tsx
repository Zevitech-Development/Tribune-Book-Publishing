import React from "react";
import { Metadata } from "next";

import EBookPage from "@/customs/services/writing/e-book-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "eBook Writing | Professional Ghostwriting for Authors - Tribune Book Publishing",
  description:
    "Need help writing your eBook? Tribune Book Publishing offers expert eBook writing and ghostwriting services to bring your ideas to life. From concept to manuscript, we help authors create compelling, market-ready content.",
});

function EBook() {
  return <EBookPage />;
}

export default EBook;
