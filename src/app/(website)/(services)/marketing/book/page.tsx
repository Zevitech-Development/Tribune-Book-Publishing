import React from "react";
import { Metadata } from "next";

import BookPage from "@/customs/services/marketing/book-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Book Marketing Services | Promote Your Book Effectively - Tribune Book Publishing",
  description:
    "Boost your book's visibility and reach the right audience. Tribune Book Publishing offers expert book marketing services including strategy, promotions, and platform management to help your book stand out and sell more.",
});

function Book() {
  return <BookPage />;
}

export default Book;
