import Technologies from "@/components/aboutsection/technology-used";
import ClientConnect from "@/components/client-connect";
import GrowthSection from "@/components/growth-section";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import ServicesSection from "@/components/services-section";
import StorySection from "@/components/story-section";
import Testimonial from "@/components/testimonial";
import ValuesSection from "@/components/valuesSection";
import StructuredData from "@/components/structured-data";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import React from "react";

export const metadata = generateSEOMetadata({
  title: "Appstone - Digital Solutions & Technology Services",
  description:
    "Transform your business with Appstone's innovative digital solutions. We offer web development, mobile apps, business intelligence, cybersecurity, integrations, and IT services. Based in Bhubaneswar, India.",
  keywords: [
    "web development",
    "mobile app development",
    "business intelligence",
    "cybersecurity",
    "IT services",
    "digital solutions",
    "software development",
    "app development",
    "web applications",
    "Bhubaneswar",
    "Odisha",
    "India",
  ],
  url: "https://appstone.in",
});

const page = () => {
  return (
    <>
      <StructuredData
        data={[
          {
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
              "https://www.facebook.com/appstoneOfficial",
              "https://x.com/AppstonePvtLtd",
            ],
          },
          {
            type: "WebSite",
            name: "Appstone",
            url: "https://appstone.in",
          },
        ]}
      />
      <HeroSection />
      <ValuesSection />
      <Technologies />
      <GrowthSection />
      <ServicesSection />
      <PortfolioSection />
      <StorySection />
      <Testimonial />
      <ClientConnect />
    </>
  );
};

export default page;