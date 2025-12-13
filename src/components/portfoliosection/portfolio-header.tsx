"use client";

import React from "react";

interface PortfolioHeaderProps {
  category: string;
  title: string;
  brief: string;
  description?: string;
  technologies?: string[];
}

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({
  category,
  title,
  brief,
  description,
  technologies,
}) => {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div className="flex-1">
          {/* Category Tag */}
          <div className="inline-block bg-[#E6F0FF] rounded-lg px-4 py-2 mb-4">
            <p className="text-sm sm:text-base text-[#0059FF] font-medium">
              {category}
            </p>
          </div>
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {title}
          </h1>
          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              {description}
            </p>
          )}
          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">
                Technology Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Brief Section */}
        <div className="lg:w-96">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Brief
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {brief}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;

