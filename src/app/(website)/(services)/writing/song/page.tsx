import React from "react";
import { Metadata } from "next";

import SongPage from "@/customs/services/writing/song-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Song Writing | Professional Lyric Writing & Music Publishing - Tribune Book Publishing",
  description:
    "Create impactful lyrics with our expert songwriting services. Tribune Book Publishing helps artists craft original songs and offers support for lyric writing, editing, and digital publishing across major platforms.",
});

function Song() {
  return <SongPage />;
}

export default Song;
