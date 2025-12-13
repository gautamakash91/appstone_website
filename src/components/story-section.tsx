"use client";

import Image from "next/image";
import { FC } from "react";
import { FiCheckCircle } from "react-icons/fi";
import StoryImage from "@/assets/ourstory.png";

interface Counter {
  value: string;
  label: string;
}

const counters: Counter[] = [
  { value: "30+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "10,000+", label: "Lines of code" },
];

const StorySection: FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/40 via-white to-blue-50/20 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-100/30 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Phone Mockup with Chat Bubbles */}
          <div className="relative flex justify-center lg:justify-start animate-fade-right">
            <div className="relative w-full max-w-md">
              {/* Phone Mockup */}
              <div className="relative isolate overflow-hidden rounded-[32px] border-4 border-white/60 bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_24px_80px_rgba(59,130,246,0.2)] -rotate-1">
                <Image
                  src={StoryImage}
                  alt="Our Story"
                  className="h-auto w-full object-cover"
                  priority
                />
                {/* Inner shadow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] border-2 border-white/40 shadow-[inset_0_2px_20px_rgba(0,0,0,0.1)]" />
                {/* Reflection gradient */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/20 via-transparent to-transparent" />
              </div>

              {/* Top Chat Bubble */}
              <div className="absolute top-8 left-4 sm:top-12 sm:left-8 w-[240px] sm:w-[280px] animate-float z-20">
                <div className="rounded-3xl bg-white/80 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/50 p-4 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md" />
                      {/* Online indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white shadow-sm flex items-center justify-center">
                        <FiCheckCircle className="h-2 w-2 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs sm:text-sm font-semibold text-gray-800">
                          Client
                        </p>
                        <span className="text-[10px] text-gray-400">•</span>
                        <p className="text-[10px] text-gray-400">2 Min Ago</p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        Hey, I Need Small Changes!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Chat Bubble */}
              <div
                className="absolute bottom-12 right-4 sm:bottom-16 sm:right-8 w-[240px] sm:w-[280px] animate-float-delayed z-20"
                style={{ animationDelay: "1s" }}
              >
                <div className="rounded-3xl bg-white/80 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/50 p-4 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-white shadow-md" />
                      {/* Online indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white shadow-sm flex items-center justify-center">
                        <FiCheckCircle className="h-2 w-2 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs sm:text-sm font-semibold text-gray-800">
                          Support
                        </p>
                        <span className="text-[10px] text-gray-400">•</span>
                        <p className="text-[10px] text-gray-400">Just Now</p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        No Problem! We&apos;re Here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-left">
            {/* Section Label */}
            <p className="text-sm sm:text-base font-medium text-blue-600">
              Our Story
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-neutral-900 leading-tight">
              A Team Of Passionate People Dedicated To Your Growth
            </h2>

            {/* Description */}
            <p className="text-base sm:text-base md:text-base lg:text-base text-gray-600 leading-relaxed max-w-2xl">
              We have a committed team dedicated to exceeding your expectations and helping you achieve your goals.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {counters.map((counter, index) => (
                <div
                  key={counter.label}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {counter.value}
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 font-medium">
                    {counter.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
