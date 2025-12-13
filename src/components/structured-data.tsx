"use client";

import { generateStructuredData } from "@/lib/seo";
import { useEffect } from "react";

interface StructuredDataProps {
  data: Array<{
    type?: "Organization" | "WebSite" | "Service" | "Article";
    [key: string]: any;
  }>;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Add new structured data
    data.forEach((item) => {
      const structuredData = generateStructuredData(item);
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    });
  }, [data]);

  return null;
};

export default StructuredData;

