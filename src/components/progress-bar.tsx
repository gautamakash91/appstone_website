"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ProgressBar = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start loading when route changes
    setLoading(true);
    setProgress(0);

    // Smooth progress animation from 0% to 100%
    let currentProgress = 0;
    const startTime = Date.now();
    const duration = 800; // Total duration in ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      
      currentProgress = progressPercent;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Keep at 100% briefly, then hide
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 200);
      }
    }, 16); // ~60fps

    return () => {
      clearInterval(interval);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#0059FF] to-[#377DFF] shadow-lg shadow-[#0059FF]/50 transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;

