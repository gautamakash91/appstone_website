"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import project1 from "@/assets/project/project 1.png";
import project2 from "@/assets/project/project 2.png";
import project3 from "@/assets/project/project 3.png";
import project4 from "@/assets/project/project 4.png";
import project5 from "@/assets/project/project5.png";
import project6 from "@/assets/project/project 6.png";
import project8 from "@/assets/project/project 8.png";
import project9 from "@/assets/project/project 9.png";
import project10 from "@/assets/project/project 10.png";
import project11 from "@/assets/project/project 11.png";
import project12 from "@/assets/project/project 12.png";

interface WorkItem {
  id: number;
  title: string;
  image: StaticImageData;
}

const workItems: WorkItem[] = [
  // Newest projects first
  {
    id: 9,
    title: "GYMNADZ",
    image: project9,
  },
  {
    id: 10,
    title: "CITYCENTRE MALL",
    image: project10,
  },
  {
    id: 11,
    title: "HELMET HEAD",
    image: project11,
  },
  {
    id: 12,
    title: "KRISHNA TRANSPORT",
    image: project12,
  },
  // Existing catalogue
  {
    id: 1,
    title: "SOSH",
    image: project1,
  },
  {
    id: 2,
    title: "ImGrows",
    image: project2,
  },
  {
    id: 3,
    title: "Dr. Signet",
    image: project3,
  },
  {
    id: 4,
    title: "Advantage Club",
    image: project4,
  },
  {
    id: 5,
    title: "Billionlives",
    image: project5,
  },
  {
    id: 6,
    title: "Socus",
    image: project6,
  },
  {
    id: 7,
    title: "NextStacks",
    image: project8,
  },
];

// Accent colors for borders
const accentColors = [
  "#DBE5F8", // Blue
  "#FFDFD8", // Orange/Peach
  "#D1F2EB", // Green/Mint
  "#FCE4EC", // Pink
  "#FFF9C4", // Yellow
];

const AmazingWorks = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Right-side floating bubble background */}
      <div className="absolute top-[10%] -right-[200px] w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Left-side subtle vertical border/curve shape */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[70%] bg-gradient-to-r from-blue-50/30 via-blue-50/10 to-transparent rounded-r-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Centered Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
            Some Of The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Amazing Works
            </span>{" "}
            We&apos;ve Done
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {workItems.map((item, index) => {
            const accentColor = accentColors[index % accentColors.length];
            
            return (
              <Link key={item.id} href={`/portfolio/${item.id}`} className="block">
                {/* Card - Exact copy from integration-previous-works */}
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    style={{
                      borderTop: `12px solid ${accentColor}`,
                      borderLeft: `12px solid ${accentColor}`,
                    }}
                  />
                  <div className="relative flex flex-col gap-5 px-5 pb-6 pt-6 sm:px-7 sm:pt-7 sm:pb-7">
                    {/* Image - No border */}
                    <div className="overflow-hidden rounded-2xl bg-white">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Title - Outside the card, below it */}
                <h3 className="mt-5 text-lg font-semibold leading-snug text-[#2A2E32] sm:text-xl hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmazingWorks;

