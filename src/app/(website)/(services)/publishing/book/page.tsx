import React from "react";
import { Metadata } from "next";

import BookPage from "@/customs/services/publishing/book-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Book Publishing Services | End-to-End Publishing Support - Tribune Book Publishing",
  description:
    "Publish your book with confidence. Tribune Book Publishing offers complete book publishing services including editing, design, formatting, printing, and distribution — everything you need to go from manuscript to market.",
});

function Book() {
  return <BookPage />;
}

export default Book;
