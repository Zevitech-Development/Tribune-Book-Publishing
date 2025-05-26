import React from "react";
import { Metadata } from "next";

import BookCoverPage from "@/customs/services/design/book-cover-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Book Cover Design Services | Custom Covers for Authors - Tribune Book Publishing",
  description:
    "Make a lasting first impression with a stunning book cover. Tribune Book Publishing offers professional book cover design services tailored to your genre, audience, and vision. Stand out on the shelf and online.",
});

function BookCover() {
  return <BookCoverPage />;
}

export default BookCover;
