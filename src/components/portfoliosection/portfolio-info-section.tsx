"use client";

import React from "react";

interface PortfolioInfoSectionProps {
  problems: string[];
  approach: string[];
  results: string[];
}

const PortfolioInfoSection: React.FC<PortfolioInfoSectionProps> = ({
  problems,
  approach,
  results,
}) => {
  return (
    <div className="mb-16 sm:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        {/* Problems */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Problems
          </h2>
          <ul className="space-y-3">
            {problems.map((problem, index) => (
              <li
                key={index}
                className="text-sm sm:text-base text-gray-600 leading-relaxed flex items-start"
              >
                <span className="text-[#0059FF] mr-2 mt-1">•</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Approach */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Approach
          </h2>
          <ul className="space-y-3">
            {approach.map((item, index) => (
              <li
                key={index}
                className="text-sm sm:text-base text-gray-600 leading-relaxed flex items-start"
              >
                <span className="text-[#0059FF] mr-2 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Results
          </h2>
          <ul className="space-y-3">
            {results.map((result, index) => (
              <li
                key={index}
                className="text-sm sm:text-base text-gray-600 leading-relaxed flex items-start"
              >
                <span className="text-[#0059FF] mr-2 mt-1">•</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfoSection;

