"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { getIconComponent } from "@/lib/service-icons";

interface ServiceProps {
  title: string;
  fullDescription: string;
  subHeading: string;
  subDescription: string;
  servicePoints: string[];
  dummyImage: string;
  icon: string;
}

const UIUXDesignSection = ({
  title,
  fullDescription,
  subHeading,
  subDescription,
  servicePoints,
  dummyImage,
  icon,
}: ServiceProps) => {
  const IconComponent = getIconComponent(icon);

  return (
    <section className="bg-[#f5f9fc] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* ✅ Image First on lg, Second on mobile */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden order-2 lg:order-1">
          <Image
            src={dummyImage}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* ✅ Content First on mobile, Second on lg */}
        <div className="bg-[#dff0ff] rounded-xl p-6 sm:p-10 w-full lg:w-1/2 relative order-1 lg:order-2">
          {/* Icon */}
          <div className="absolute top-6 right-6 bg-[#0D2C45] text-white p-3 rounded-md hidden sm:block">
            <IconComponent size={24} />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            {fullDescription}
          </p>

          <h3 className="text-lg font-semibold mb-2">
            {subHeading}
          </h3>

          {/* Features */}
          <ul className="space-y-2 text-sm sm:text-base text-black font-medium mt-4">
            {servicePoints.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-black rounded-full shrink-0 mt-1"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="mt-6 inline-flex items-center bg-[#0D2C45] text-white px-5 py-2 rounded-md hover:bg-[#133f62] transition">
            Learn More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UIUXDesignSection;
