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

const DigitalMarketingSection = ({
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
        {/* Left Box */}
        <div className="bg-[#dff0ff] rounded-xl p-6 sm:p-10 w-full lg:w-2/3 relative">
          {/* Icon box in corner */}
          <div className="absolute top-6 right-6 bg-[#0D2C45] text-white p-3 rounded-md hidden sm:block">
            <IconComponent size={24} />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {title}
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 mb-6">
            {fullDescription}
          </p>

          {/* Sub-heading */}
          <h3 className="text-lg font-semibold mb-2">
            {subHeading}
          </h3>

          {/* Description */}
          <p className="text-gray-700 mb-4">
            {subDescription}
          </p>

          {/* Feature list */}
          <ul className="space-y-2 text-sm sm:text-base text-black font-medium">
            {servicePoints.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="mt-6 inline-flex items-center bg-[#0D2C45] text-white px-5 py-2 rounded-md hover:bg-[#133f62] transition">
            Learn More <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3">
          <div className="rounded-xl overflow-hidden h-full w-full">
            <Image
              src={dummyImage}
              alt={title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
