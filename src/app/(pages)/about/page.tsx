import AboutHeroSection from "@/components/aboutsection/hero-section";
import ObjectivesSection from "@/components/aboutsection/objectives-section";
import TechnologiesUsed from "@/components/aboutsection/technology-used";
import MeetTheTeam from "@/components/aboutsection/meet-the-team";
import React from "react";
import ClientConnect from "@/components/client-connect";

const page = () => {
  return (
    <>
      <AboutHeroSection />
      <ObjectivesSection />
      <TechnologiesUsed />
      <MeetTheTeam />
      <ClientConnect />
    </>
  );
};

export default page;
