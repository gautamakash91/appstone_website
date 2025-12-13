"use client";

import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useParams } from "next/navigation";
import PortfolioHeader from "@/components/portfoliosection/portfolio-header";
import PortfolioScreenshots from "@/components/portfoliosection/portfolio-screenshots";
import PortfolioInfoSection from "@/components/portfoliosection/portfolio-info-section";
import PortfolioBackground from "@/components/portfoliosection/portfolio-background";
import { portfolioDetails } from "@/lib/portfolio-data";
import Testimonial from "@/components/testimonial";
import ClientConnect from "@/components/client-connect";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const PortfolioDetailPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const portfolio = portfolioDetails[id];

  if (!portfolio) {
    return (
      <div className={`${inter.variable} font-sans`}>
        <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Portfolio Not Found</h1>
            <Link href="/portfolio" className="text-blue-600 hover:underline">
              Back to Portfolio
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={`${inter.variable} font-sans`}>
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Background decorative elements */}
        <PortfolioBackground />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Header Section */}
          <PortfolioHeader
            category={portfolio.category}
            title={portfolio.title}
            brief={portfolio.brief}
            description={portfolio.description}
            technologies={portfolio.technologies}
          />

          {/* Screenshots Section */}
          <PortfolioScreenshots screenshots={portfolio.screenshots} />

          {/* Problems, Approach, Results Section */}
          <PortfolioInfoSection
            problems={portfolio.problems}
            approach={portfolio.approach}
            results={portfolio.results}
          />

          {/* Back Button */}
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm sm:text-base text-[#0059FF] hover:underline font-medium"
            >
              ← Back to Portfolio
            </Link>
          </div>

          <Testimonial />

          <ClientConnect />
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;

