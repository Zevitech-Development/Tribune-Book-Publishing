import React from "react";
import { Metadata } from "next";

import NovelPage from "@/customs/services/writing/novel-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Novel Writing | Professional Book Ghostwriting - Tribune Book Publishing",
  description:
    "Bring your story to life with our expert novel writing services. Tribune Book Publishing offers professional ghostwriting, editing, and publishing support to help you create captivating, publish-ready novels across all genres.",
});

function Novel() {
  return <NovelPage />;
}

export default Novel;
