"use client";

import React from "react";
import { FiCpu, FiUsers, FiBookOpen } from "react-icons/fi";

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: FiCpu,
      title: "Technology",
      description:
        "To Adapt To The Ever Changing World Of Technology And To Leverage These Technologies To Initiate Meaningful Impact For Both Clients And Ourselves. Appstone Not Only Provides Services To Our Clients But Also Outsourced Resources To Enable Our Clients To Continue To Do Great Things.",
    },
    {
      icon: FiUsers,
      title: "Client",
      description:
        "Our primary focus is building strong, lasting relationships with our clients. We understand that every client has unique needs and challenges, and we tailor our solutions to meet those specific requirements while delivering exceptional value.",
    },
    {
      icon: FiBookOpen,
      title: "Education",
      description:
        "We believe in continuous learning and knowledge sharing. Through our educational initiatives, we empower our team and clients with the latest industry insights, best practices, and innovative approaches to technology and business.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Section - Our Objective */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Subtitle */}
            <p className="text-base sm:text-base md:text-base lg:text-base font-medium text-[#377DFF]">
              Our Objective
            </p>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-neutral-900 leading-tight">
            Our aim is for your business to create a positive impact on the community!

            </h2>

            {/* One-line Description */}
            <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-500 leading-relaxed">
              We strive to deliver exceptional value through innovative solutions
              and unwavering commitment to excellence.
            </p>
          </div>

          {/* Right Section - Objectives Cards */}
          <div className="lg:col-span-3 space-y-10 sm:space-y-12">
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/40 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-md hover:border-gray-300"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon with modern styling */}
                    <div className="shrink-0">
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-[#377DFF]/20 blur-xl" />
                        {/* Icon container with gradient and shadow */}
                        <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-[#377DFF] to-[#0059FF] flex items-center justify-center shadow-lg shadow-[#377DFF]/30">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                        {objective.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-500 leading-relaxed">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;