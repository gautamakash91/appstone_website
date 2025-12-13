"use client";

import React from "react";
import Image from "next/image";

interface PortfolioGalleryProps {
  gallery: string;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ gallery }) => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
        Gallery
      </h2>
      <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-video w-full">
        <Image
          src={gallery}
          alt="Project Gallery"
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
    </div>
  );
};

export default PortfolioGallery;

