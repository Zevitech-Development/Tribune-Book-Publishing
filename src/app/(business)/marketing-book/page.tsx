import React from "react";
import { Metadata } from "next";

import MarketingBookPage from "@/customs/business/marketing-book-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Book Marketing Services That Sell | Promote Your Book Like a Pro - Tribune Book Publishing",
  description:
    "Struggling to get your book noticed? Our expert book marketing services help authors boost visibility, grow readership, and increase sales. From social media ads to Amazon optimization — start marketing your book today with Tribune Book Publishing.",
});

function MarketingBook() {
  return <MarketingBookPage />;
}

export default MarketingBook;
