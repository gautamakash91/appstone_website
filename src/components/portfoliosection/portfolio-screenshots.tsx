"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface PortfolioScreenshotsProps {
  screenshots: string | StaticImageData;
}

const PortfolioScreenshots: React.FC<PortfolioScreenshotsProps> = ({
  screenshots,
}) => {
  return (
    <div className="mb-16 sm:mb-20">
      <div className="bg-white rounded-3xl border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-video w-full">
          <Image
            src={screenshots}
            alt="Project Screenshot"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioScreenshots;

