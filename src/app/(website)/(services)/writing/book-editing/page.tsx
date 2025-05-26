import React from "react";
import { Metadata } from "next";

import BookEditingPage from "@/customs/services/writing/book-editing-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Book Editing Services | Professional Manuscript Editing - Tribune Book Publishing",
  description:
    "Ensure your manuscript is polished and publication-ready. Tribune Book Publishing offers professional book editing services, including developmental editing, copyediting, and proofreading to refine your work and elevate your story.",
});

function BookEditing() {
  return <BookEditingPage />;
}

export default BookEditing;
