import BusinessIntelligenceHero from "@/components/businessintelligence/businessintelligence-hero";
import BusinessIntelligenceProcess from "@/components/businessintelligence/businessintelligence-process";
import BusinessIntelligenceBenefits from "@/components/businessintelligence/businessintelligence-benefits";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import React from "react";
import Testimonial from "@/components/testimonial";
import IntegrationPreviousWorks from "@/components/Integration/integration-previous-works";
import ClientConnect from "@/components/client-connect";

export const metadata = generateSEOMetadata({
  title: "Business Intelligence Services - Data Analytics & Insights",
  description:
    "Transform your business data into actionable insights with Appstone's Business Intelligence services. Data analytics, reporting, and visualization solutions to drive informed decision-making.",
  keywords: [
    "business intelligence",
    "data analytics",
    "BI services",
    "data visualization",
    "business analytics",
    "data reporting",
    "business intelligence solutions",
    "data insights",
    "analytics consulting",
  ],
  url: "https://appstone.in/businessintelligence",
});

const page = () => {
  return (
    <>
      <BusinessIntelligenceHero />
      <BusinessIntelligenceProcess />
      <BusinessIntelligenceBenefits />

      <Testimonial />
      <IntegrationPreviousWorks />
      <ClientConnect />
    </>
  );
};

export default page;
