import CybersecurityOverview from "@/components/cybersecurity/cybersecurity-overview";
import CybersecurityReasons from "@/components/cybersecurity/cybersecurity-reasons";
import CybersecurityHelp from "@/components/cybersecurity/cybersecurity-help";
import CybersecurityServices from "@/components/cybersecurity/cybersecurity-services";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import React from "react";
import Testimonial from "@/components/testimonial";
import IntegrationPreviousWorks from "@/components/Integration/integration-previous-works";

export const metadata = generateSEOMetadata({
  title: "Cybersecurity Services - Protect Your Digital Assets",
  description:
    "Comprehensive cybersecurity services to protect your business from threats. Appstone offers security audits, vulnerability assessments, penetration testing, and security solutions.",
  keywords: [
    "cybersecurity services",
    "cyber security",
    "information security",
    "security audit",
    "vulnerability assessment",
    "penetration testing",
    "network security",
    "data protection",
    "cybersecurity consulting",
  ],
  url: "https://appstone.in/cybersecurity",
});

const page = () => {
  return (
    <>
      <CybersecurityOverview />
      <CybersecurityReasons />
      <CybersecurityHelp />
      <CybersecurityServices />
      <Testimonial />
      <IntegrationPreviousWorks />
    </>
  );
};

export default page;