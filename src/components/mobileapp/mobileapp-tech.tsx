"use client";

import {
  SiReact,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";

const techLogos = [
  { label: "React Native", Icon: SiReact },
  { label: "Flutter", Icon: SiFlutter },
  { label: "Swift", Icon: SiSwift },
  { label: "Kotlin", Icon: SiKotlin },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Firebase", Icon: SiFirebase },
  { label: "Node.js", Icon: SiNodedotjs },
];

const MobileAppTech = () => {
  return (
    <section className="bg-[#377DFF1A] py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:gap-10">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-[#3D7CFF]">Technology</p>
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Technology We Used To
          </h2>
          <h3 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Build Mobile Apps
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techLogos.map(({ label, Icon }, index) => {
            const accentColors = [
              "#DBE5F8", // Blue
              "#FFDFD8", // Orange/Peach
              "#D1F2EB", // Green/Mint
              "#FCE4EC", // Pink
              "#FFF9C4", // Yellow
            ];
            const accentColor = accentColors[index % accentColors.length];
            
            return (
              <div
                key={label}
                className="relative overflow-hidden flex h-32 flex-col items-center justify-center gap-3 rounded-2xl bg-white text-base font-medium text-[#1F2933] shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:h-36"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    borderTop: `12px solid ${accentColor}`,
                    borderLeft: `12px solid ${accentColor}`,
                  }}
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#2D73FF]">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="relative">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileAppTech;

