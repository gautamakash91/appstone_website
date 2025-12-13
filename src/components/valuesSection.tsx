"use client";

import { FC } from "react";
import { FiGlobe, FiMonitor, FiUsers } from "react-icons/fi";
import type { IconType } from "react-icons";

type Value = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

const values: Value[] = [
  {
    id: 1,
    title: "Building An Online Presence",
    description:
      "We believe in using digital marketing to help both startups and established businesses develop a credible online presence.",
    icon: FiGlobe,
  },
  {
    id: 2,
    title: "Building Long-Term Relations",
    description:
      "We strive to establish long-term relationships with our customers by providing high-quality and cost-effective solutions.",
    icon: FiUsers,
  },
  {
    id: 3,
    title: "Bringing New Technologies",
    description:
      "We bring in the latest and emerging technologies for your business to grow faster.",
    icon: FiMonitor,
  },
];

const ValuesSection: FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* soft backdrop accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-[-120px] h-72 w-72 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute left-10 bottom-[-80px] h-80 w-80 rounded-full bg-blue-100/50 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-28 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Our Values
        </p>
        <h2 className="mt-4 text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold leading-tight text-neutral-900">
          Values We Strongly Follow
        </h2>

        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ animation: "fade-up 0.9s ease both", animationDelay: `${idx * 120}ms` }}
              >
                <div className="relative mx-auto mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
                  {value.title}
                </h3>
                <p className="mt-3 mx-auto max-w-md text-base text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;