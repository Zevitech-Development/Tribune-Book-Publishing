import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

export const defaultMetadata: Metadata = {
  title: "Tribune Book Publishing",
  description:
    "You write it, we publish it. Tribune Book Publishing is your trusted partner for professional eBook publishing services. We help aspiring and established authors publish their digital books across major platforms like Amazon Kindle, Apple Books, Google Play Books, and more. Our all in one eBook publishing solutions include formatting, cover design, editing, ISBN assistance, and global distribution so you can focus on writing while we handle the rest.",

  creator: "Zevitech",

  applicationName: "Tribune Book Publishing",

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo.png",
        sizes: "834x408",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/favicons/logo.svg",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },
      {
        rel: "shortcut icon",
        type: "image/png",
        url: "/favicons/shortcut-icon.png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/favicons/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Tribune Book Publishing",
    description:
      "You write it, we publish it. Tribune Book Publishing is your trusted partner for professional eBook publishing services. We help aspiring and established authors publish their digital books across major platforms like Amazon Kindle, Apple Books, Google Play Books, and more. Our all in one eBook publishing solutions include formatting, cover design, editing, ISBN assistance, and global distribution so you can focus on writing while we handle the rest.",
    siteName: "Tribune Book Publishing",
    images: [
      {
        url: "/favicons/logo.svg",
        width: 96,
        height: 58,
        alt: "Tribune Book Publishing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tribune Book Publishing",
    description:
      "You write it, we publish it. Tribune Book Publishing is your trusted partner for professional eBook publishing services. We help aspiring and established authors publish their digital books across major platforms like Amazon Kindle, Apple Books, Google Play Books, and more. Our all in one eBook publishing solutions include formatting, cover design, editing, ISBN assistance, and global distribution so you can focus on writing while we handle the rest.",
    images: "/favicons/logo.svg",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export function GetPageMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    title: overrides.title ?? defaultMetadata.title,
    description: overrides.description ?? defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
      title: overrides.title || defaultMetadata.openGraph?.title,
      description:
        overrides.description || defaultMetadata.openGraph?.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
      title: overrides.title || defaultMetadata.twitter?.title,
      description:
        overrides.description || defaultMetadata.twitter?.description,
    },
  };
}
