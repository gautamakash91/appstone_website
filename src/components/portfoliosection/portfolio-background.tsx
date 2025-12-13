"use client";

import React from "react";

const PortfolioBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large curved circular background shape - top right */}
      <div className="absolute -top-20 -right-20 h-[800px] w-[800px] rounded-full bg-blue-100/40 blur-[120px]" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-50/50 blur-[100px]" />
      <div className="absolute top-20 right-20 h-[400px] w-[400px] rounded-full bg-white/70 blur-[80px]" />
      
      {/* Large curved circular background shape - bottom left */}
      <div className="absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-blue-50/20 blur-[130px]" />
      <div className="absolute bottom-10 left-0 h-[400px] w-[400px] rounded-full bg-pink-50/25 blur-[110px]" />
    </div>
  );
};

export default PortfolioBackground;

