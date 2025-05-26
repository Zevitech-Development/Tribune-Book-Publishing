import React from "react";
import { Metadata } from "next";

import BulkBookPage from "@/customs/services/printing/bulk-book-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Bulk Book Printing Services | High-Quality & Affordable - Tribune Book Publishing",
  description:
    "Print your books in bulk without compromising on quality. Tribune Book Publishing offers reliable bulk book printing services for authors, schools, businesses, and events — with fast turnaround and competitive pricing.",
});

function BulkBook() {
  return <BulkBookPage />;
}

export default BulkBook;
