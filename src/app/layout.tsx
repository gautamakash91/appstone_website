import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { cn } from "@/lib/utils";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/lib/seo";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  ...generateSEOMetadata(),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @keyframes jump {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}
        </style>
      </head>
      <body className={cn("relative bg-white text-neutral-900", roboto.className)}>
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateStructuredData({
                type: "Organization",
                name: "Appstone",
                description:
                  "Appstone provides innovative digital solutions including web development, mobile apps, business intelligence, cybersecurity, and IT services.",
                url: "https://appstone.in",
                logo: "https://appstone.in/logo.png",
                contactPoint: {
                  telephone: "+91-7809424281",
                  contactType: "Customer Service",
                  email: "info@appstone.in",
                },
                sameAs: [
                  "https://www.linkedin.com/company/appstone_in",
                  "https://x.com/AppstonePvtLtd",
                  "https://www.facebook.com/appstoneOfficial",
                ],
              })
            ),
          }}
        />
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateStructuredData({
                type: "WebSite",
                name: "Appstone",
                url: "https://appstone.in",
              })
            ),
          }}
        />
        <>{children}</>
      </body>
    </html>
  );
}
