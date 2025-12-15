"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/Gemini_Generated_Image_r76ts5r76ts5r76t.png";
import Link from "next/link";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Heading with fade-up animation */}
          <h1
            className={`text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            We Build Digital Solutions That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Helps You Grow
            </span>{" "}
            Your Business Faster
          </h1>

          {/* Sub-text with fade-up animation */}
          <p
            className={`text-base sm:text-base md:text-base lg:text-base text-neutral-600 max-w-3xl mb-10 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ lineHeight: "1.6", transitionDelay: "150ms" }}
          >
            Transform your business with cutting-edge web and mobile applications designed
            to scale, perform, and deliver exceptional user experiences.
          </p>

          {/* Buttons with fade-up animation */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Button
              size="lg"
              className="group relative px-8 py-6 text-base sm:text-base md:text-base lg:text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
            >
              <Link
                href="/contact"
              >
               <span className="relative z-10">Book A Meeting</span>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-6 text-base sm:text-base md:text-base lg:text-base font-semibold border-2 border-blue-500 text-blue-600 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-blue-50 hover:border-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ease-out"
            >
              <Link href="/about">
                <span className="relative z-10">Know More</span>
              </Link>
            </Button>
          </div>

          {/* Dashboard Image with floating animation */}
          <div
            className={`relative w-full max-w-5xl transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400/20 via-blue-500/30 to-blue-400/20 rounded-3xl blur-3xl scale-110 animate-pulse" />

            {/* Image container with floating animation */}
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 bg-white/50 backdrop-blur-sm border border-white/50 animate-float">
              <Image
                src={HeroImage}
                alt="Dashboard Preview"
                className="w-full h-auto object-contain"
                priority
                quality={95}
              />
            </div>

            {/* Floating circular progress indicator */}
            <div className="absolute -bottom-6 -left-6 hidden lg:block animate-float-delayed">
              <div className="relative w-24 h-24 bg-white rounded-full shadow-xl shadow-blue-500/20 flex items-center justify-center border-4 border-blue-100">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin-slow" />
                <span className="relative z-10 text-2xl font-bold text-blue-600">
                  89%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
