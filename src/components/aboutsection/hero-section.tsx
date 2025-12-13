"use client";

import React from "react";
import Image from "next/image";
import AboutImage from "@/assets/about.png";

const AboutHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top Section - Text Content */}
      <div className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-up">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-neutral-900 leading-tight">
              We&apos;re A{" "}
              <span className="text-[#377DFF]">Result Driven</span> Web App
              Design Agency
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Appstone Was Established In 2016 With The Aim To Provide Premium
              IT Services To Our Clients. We At Appstone Have Always Been
              Inclined To Learn And Leverage The Power Of New And Upcoming
              Technologies To Create An Impact For Ourselves And Our Clients.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Image with Overlay */}
      <div className="relative w-full">
        {/* Mobile and MD: Show full image */}
        <div className="relative w-full block lg:hidden">
          <div className="relative w-full">
            <Image
              src={AboutImage}
              alt="Appstone Office"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain block"
              priority
            />
            {/* Color Overlay - 30% opacity */}
            <div className="absolute inset-0 bg-[#377DFF4D] pointer-events-none" />
          </div>
        </div>

        {/* LG: Fixed height with cover */}
        <div className="relative w-full hidden lg:block h-[500px]">
          <Image
            src={AboutImage}
            alt="Appstone Office"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Color Overlay - 30% opacity */}
          <div className="absolute inset-0 bg-[#377DFF4D]" />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;