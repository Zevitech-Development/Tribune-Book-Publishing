import React from "react";
import { Metadata } from "next";

import BookFormattingPage from "@/customs/services/design/book-formatting-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Book Formatting Services | Professional Layout & Typesetting - Tribune Book Publishing",
  description:
    "Get your manuscript ready for print and digital publishing. Tribune Book Publishing offers expert book formatting services, ensuring clean layouts, proper styling, and industry-standard formatting for every platform.",
});

function BookFormatting() {
  return <BookFormattingPage />;
}

export default BookFormatting;
