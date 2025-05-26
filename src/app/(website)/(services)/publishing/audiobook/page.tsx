import React from "react";
import { Metadata } from "next";

import AudiobookPage from "@/customs/services/publishing/audiobook-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Audiobook Publishing Services | Turn Your Book Into Audio - Tribune Book Publishing",
  description:
    "Reach a wider audience with professional audiobook publishing. Tribune Book Publishing offers narration, production, and distribution services to bring your book to life in audio format for platforms like Audible and more.",
});

function AudioBook() {
  return <AudiobookPage />;
}

export default AudioBook;
