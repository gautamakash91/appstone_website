import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://appstone.in";
const siteName = "Appstone";
const defaultTitle = "Appstone - Digital Solutions & Technology Services | Web Development, Mobile Apps, IT Services";
const defaultDescription =
  "Appstone provides innovative digital solutions including web development, mobile apps, business intelligence, cybersecurity, integrations, and IT services. Transform your business with cutting-edge technology. Based in Bhubaneswar, Odisha, India.";

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = defaultTitle,
    description = defaultDescription,
    keywords = [
      "web development",
      "mobile app development",
      "business intelligence",
      "cybersecurity",
      "IT services",
      "digital solutions",
      "software development",
      "app development",
      "web applications",
      "UI/UX design",
      "DevOps engineering",
      "digital marketing",
      "data analysis",
      "AI services",
      "Appstone",
      "Bhubaneswar",
      "Odisha",
      "India",
      "IT company Bhubaneswar",
      "software company Odisha",
    ],
    image = `${siteUrl}/og-image.jpg`,
    url = siteUrl,
    type = "website",
    noindex = false,
    nofollow = false,
  } = config;

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Appstone" }],
    creator: "Appstone",
    publisher: "Appstone",
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@appstone",
      site: "@appstone",
    },
    category: "Technology",
    classification: "Business",
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=yes",
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(siteUrl),
    verification: {
      // Add your verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
  };
}

export function generateStructuredData(config: {
  type?: "Organization" | "WebSite" | "Service" | "Article";
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    email?: string;
  };
  sameAs?: string[];
  [key: string]: any;
}) {
  const {
    type = "Organization",
    name = siteName,
    description = defaultDescription,
    url = siteUrl,
    logo = `${siteUrl}/logo.png`,
    contactPoint,
    sameAs = [],
  } = config;

  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    logo,
    ...(contactPoint && { contactPoint }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  if (type === "Organization") {
    return {
      ...baseStructure,
      address: {
        "@type": "PostalAddress",
        streetAddress: "428 DLF Cybercity, Chandaka Industrial Estate, Patia",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751024",
        addressCountry: "IN",
      },
      contactPoint: contactPoint || {
        "@type": "ContactPoint",
        telephone: "+91-7809424281",
        contactType: "Customer Service",
        email: "info@appstone.in",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    };
  }

  if (type === "WebSite") {
    return {
      ...baseStructure,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };
  }

  return baseStructure;
}

