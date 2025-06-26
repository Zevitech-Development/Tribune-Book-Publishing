import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import Script from "next/script";

import { Toaster } from "@/components/ui/sonner";

import { GetPageMetadata } from "@/utils/meta-data";

// STYLE SHEETS SOURCE
import "../styles/globals.css";
import "../styles/includes.css";
import "../styles/animations.css";

// FONT CONFIGURATIONS
const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: ["400", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// WEBSITE METADATA AND VIEWPORT
export const metadata: Metadata = GetPageMetadata();
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${libre.variable} ${inter.variable} antialiased`}
      >
        {/* Google Analytics - Load with higher priority */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16565473053"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16565473053');
          `}
        </Script>

        {/* Microsoft Bing UET Tracking */}
        <Script id="bing-uet" strategy="afterInteractive">
          {`
            (function(w,d,t,r,u) {
              var f,n,i;
              w[u]=w[u]||[],f=function() {
                var o={ti:"97181856", enableAutoSpaTracking: true};
                o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
              },
              n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
                var s=this.readyState;
                s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
              },
              i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
          `}
        </Script>

        {/* LiveChat Widget */}
        <Script id="livechat-widget" strategy="afterInteractive">
          {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19021902;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n, t, c) {
              function i(n) {
                return e._h ? e._h.apply(null, n) : e._q.push(n)
              }
              var e = {
                _q: [],
                _h: null,
                _v: "2.0",
                on: function() {
                  i(["on", c.call(arguments)])
                },
                once: function() {
                  i(["once", c.call(arguments)])
                },
                off: function() {
                  i(["off", c.call(arguments)])
                },
                get: function() {
                  if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                  return i(["get", c.call(arguments)])
                },
                call: function() {
                  i(["call", c.call(arguments)])
                },
                init: function() {
                  var n = t.createElement("script");
                  n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n)
                }
              };
              !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e
            })(window, document, [].slice)
          `}
        </Script>

        {/* LiveChat Noscript Fallback */}
        <noscript>
          <a href="https://www.livechat.com/chat-with/19021902/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechat.com/?welcome"
            rel="noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
