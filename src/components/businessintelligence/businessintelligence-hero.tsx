"use client";

import Image from "next/image";
import integrationIllustration from "@/assets/3512313.jpg";

const BusinessIntelligenceHero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 pt-10 md:flex-row md:items-start md:justify-between md:gap-12 md:pb-16 md:pt-14">
        <div className="space-y-4 md:space-y-6">
        
          <h1 className="text-4xl font-semibold leading-tight text-[#1F2933] sm:text-5xl">
            Business Intelligence
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[#888D97]">
          Business Intelligence is the umbrella term which comprises multiple
          topics ranging from data collection, storage, and analyzing data from
          business activities to improve the business performance.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 md:pb-16">
        <div className="overflow-hidden rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.08)]">
          <Image
            src={integrationIllustration}
            alt="Dashboard on laptop showing integration analytics"
            className="h-64 w-full object-cover sm:h-80 md:h-112 lg:h-128 xl:h-140"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligenceHero;
