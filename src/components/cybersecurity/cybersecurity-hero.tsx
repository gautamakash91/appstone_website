"use client";

import Image from "next/image";
import integrationIllustration from "@/assets/cybersecurity/Rectangle 57 (2).png";

const CyberCityHero = () => {
  return (
    <section className="bg-[#377DFF1A]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 pt-10 md:flex-row md:items-start md:justify-between md:gap-12 md:pb-16 md:pt-14">
        <div className="space-y-4 md:space-y-6">
          <span className="inline-flex w-fit rounded-full bg-[#F1F6FF] px-4 py-1 text-sm font-medium text-[#3D7CFF]">
            Service
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-[#1F2933] sm:text-5xl">
          Cyber Security
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[#888D97]">
        Our #1 priority is cyber security. We employ technology, policies, and regulations to protect systems, networks, processes, devices, and data against cyber-attacks.

        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 md:pb-16">
        <div className="overflow-hidden rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.08)]">
          <Image
            src={integrationIllustration}
            alt="Dashboard on laptop showing integration analytics"
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CyberCityHero;
