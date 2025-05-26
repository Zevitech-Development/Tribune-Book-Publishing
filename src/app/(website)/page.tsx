import React from "react";
import { Metadata } from "next";

import HomePage from "@/customs/home-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Publish Your Book with Ease | Expert eBook Publishing Services - Tribune Book Publishing",
  description:
    "Ready to become a published author? Tribune Book Publishing offers professional eBook publishing, ghostwriting, editing, and global distribution services. No hassle, no hidden fees — just expert support from draft to digital shelves. Start your publishing journey today!",
});

function Home() {
  return <HomePage />;
}

export default Home;
