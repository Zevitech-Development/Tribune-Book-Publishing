import React from "react";
import { Metadata } from "next";

import PublishBookPage from "@/customs/business/publish-book-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Publish Your Book Today | Expert Self-Publishing Services - Tribune Book Publishing",
  description:
    "Ready to become a published author? Tribune Book Publishing offers complete self-publishing services including writing, editing, design, printing, and global distribution. Fast. Professional. Done for you. Get a free consultation today!",
});

function PublishBook() {
  return <PublishBookPage />;
}

export default PublishBook;
