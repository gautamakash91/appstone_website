"use client";

import Image from "next/image";
import benefitsIllustration from "@/assets/business/Group 74.png";

const bullets = [
  "Analyzing Data From Multiple Sources",
  "Comparative/Variance Analysis Across Periods And Applications",
  "NLG Libraries To Auto-Generate Comments.",
  "Advance Reporting With Drill Down Features.",
  "ML Algorithms To Do Forecasting And Predictive Analysis.",
  "What-If-Analysis Based On BIZ NeedS.",
  "User Securitization - A Person Can See Only The Data That He Would Be Authorized To See.",
];

const BusinessIntelligenceBenefits = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-start md:gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-[32px] bg-white">
            <Image
              src={benefitsIllustration}
              alt="Analytics dashboards showing benefits"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Benefits To The User Base
          </h2>
          <p className="text-lg leading-8 text-[#888D97]">
            There are multiple benefits which depend on the type of
            organization. Pointing some of them here.
          </p>
          <p className="text-lg leading-8 text-[#888D97]">
            This analysis allows the users to make data driven decisions for the
            future.
          </p>

          <ul className="space-y-3 text-base leading-7 text-[#888D97]">
            {bullets.map((item, index) => (
              <li key={item} className="flex gap-2">
                <span className="font-semibold text-[#888D97]">{index + 1}.</span>
                <span className="text-[#888D97]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligenceBenefits;

