import IntegrationHero from "@/components/Integration/integration-hero";
import IntegrationTypes from "@/components/Integration/integration-types";
import IntegrationPreviousWorks from "@/components/Integration/integration-previous-works";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Third-Party Integration Services - API & System Integration",
  description:
    "Seamless third-party integrations for your applications. Appstone provides API integration, payment gateway integration, and system integration services to enhance your software capabilities.",
  keywords: [
    "third-party integration",
    "API integration",
    "system integration",
    "payment gateway integration",
    "software integration",
    "integration services",
    "API development",
    "webhook integration",
  ],
  url: "https://appstone.in/integration",
});

const IntegrationPage = () => {
  return (
    <>
      <IntegrationHero />
      <IntegrationTypes />
      <IntegrationPreviousWorks />
    </>
  );
};

export default IntegrationPage;