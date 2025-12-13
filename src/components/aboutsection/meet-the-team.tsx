"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import akashImage from "@/assets/akash.png";
import djImage from "@/assets/dj.png";

const MeetTheTeam = () => {
  const teamMembers = [

    {
      id: 1,
      name: "Dibyajyoti Nayak",
      title: "Director Appstone",
      description:
        "Dibyajyoti Nayak Started His Career Off With Accenture In The IT Domain And Has Been Ever Fascinated With It. He Leads The Growth Of The Company And The Education Platform, Nextstacks. He Has Been Leading From The Front And Has Played A Crucial Role In The Growth Of The Company. Dibyajyoti Has Used His Inter-Personal Skills To Build Connections In The Industry And He Also Likes To Address Students Of Various Colleges To Bring Awareness To Them About The Ongoing Technical Advancements In The Field Of IT.",
      image: djImage,
      linkedinUrl: "https://www.linkedin.com/in/dibyajyoti-nayak-08b595126/",
    },
    {
      id: 2,
      name: "Akash Gautam",
      title: "Director Appstone",
      description:
        "Akash Gautam Is Heading The Technical Wing Of Appstone And Is Responsible For Growth Of The Technical Team, In Numbers And Skills. He Has A Masters Degree From Colorado State University, USA, Where He Started His Journey To Become A MERN Stack Developer. In His Experience Of More Than 8 Years He Has Achieved Technical Expertise To Be Able To Lead And Guide The Team In The Same Path.",
      image: akashImage,
      linkedinUrl: "https://www.linkedin.com/in/akash-gautam/",
    },
    
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-base lg:text-base font-medium text-[#0059FF] mb-2 sm:mb-3">
            Meet The Team
          </p>
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-black leading-tight">
            Faces Behind Our Success
          </h2>
        </div>

        {/* Team Members */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-8 lg:gap-10"
            >
              {/* Image Section */}
              <div className="w-full md:w-auto shrink-0">
                <div className="relative w-full sm:w-[280px] md:w-[320px] lg:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                  />
                </div>
              </div>

              {/* Text Box Section */}
              <div className="flex-1 bg-[#E6F0FF] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative">
                {/* Name */}
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-3">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-sm sm:text-base md:text-base lg:text-base font-medium text-[#0059FF] mb-4 sm:mb-5 md:mb-6">
                  {member.title}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-base lg:text-base text-black leading-relaxed mb-6 sm:mb-8">
                  {member.description}
                </p>

                {/* LinkedIn Icon */}
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0059FF] text-white rounded-lg hover:bg-[#0047CC] transition-colors duration-300"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;