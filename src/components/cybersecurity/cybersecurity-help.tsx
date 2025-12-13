"use client";

import Image from "next/image";
import phoneIllustration from "@/assets/cybersecurity/Cyber Security Phone Image.png";

const points = [
  "Know the Industry – every industry has a different set of regulations and compliances to meet. Understanding the specifics of the industry you are in is the first step to designing cyber security solutions for you.",
  'Understanding you – after the industry, it is important for Appstone to "know the customer". This best helps us assess the situation and offer a solution.',
  "Assess your cyber security needs.",
  "Customize the cyber security solutions to keep in sync with you and the industry.",
  "Implement cyber security for your organization after getting approval.",
];

const CybersecurityHelp = () => {
  return (
    <section className="bg-[#377DFF1A] py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src={phoneIllustration}
              alt="Cyber security phone illustration"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            How We Can Help You:
          </h2>
          <ol className="space-y-3 text-lg leading-8 text-[#888D97]">
            {points.map((point, idx) => (
              <li key={point} className="flex gap-2">
                <span className="font-semibold text-[#888D97]">{idx + 1}.</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityHelp;

