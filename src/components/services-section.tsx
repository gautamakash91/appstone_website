"use client";

import { FC } from "react";
import {
  FiLink,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    id: 1,
    title: "Integrations",
    description:
      "The provision of an integration or API solution as a complete end-to-end service.",
    icon: FiLink,
  },
  {
    id: 2,
    title: "Business Intelligence",
    description:
      "Enable structured data-driven decision-making across the company.",
    icon: FiTrendingUp,
  },
  {
    id: 3,
    title: "Cyber Security",
    description:
      "Building security in a digitally connected society.",
    icon: FiShield,
  },
  {
    id: 4,
    title: "Outsourcing",
    description:
      "Our services itself means we outsource those categories ka services.",
    icon: FiUsers,
  },
  {
    id: 5,
    title: "Web Applications",
    description:
      "Client-focused, customer-centric, creating website solutions that deliver tangible business results.",
    icon: FiMonitor,
  },
  {
    id: 6,
    title: "Mobile Applications",
    description:
      "Creating high performing, digitally transformative and feature-packed native mobile applications for Android and iOS devices.",
    icon: FiSmartphone,
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-blue-100/30 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-200/20 blur-[100px]" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-100/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-10 lg:px-20">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center animate-fade-up">
          <p className="text-sm sm:text-base font-medium text-blue-600 mb-3 sm:mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-neutral-900 leading-tight">
            Magic We Can Do For You
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon Container */}
                <div className="mb-5 flex justify-center">
                  <div className="relative">
                    <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white transition-all duration-300 group-hover:scale-105">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
