"use client";

import { Button } from "@/components/ui/button";
import { FiUsers, FiAward, FiSend } from "react-icons/fi";

const steps = [
  {
    title: "Nurturing",
    description:
      "Our process starts with nurturing our employees/students. Based on our experienced tech leads, we impart knowledge to our employees to build skills that come handy in projects.",
    Icon: FiUsers,
  },
  {
    title: "Experience",
    description:
      "Once we believe that our team is skilled and ready to pick up something more challenging, we make them work on projects that are not too complicated. This process teaches them a lot more about development and debugging that just training cannot. We believe that this is one of the most critical steps in our process.",
    Icon: FiAward,
  },
  {
    title: "Deploy",
    description:
      "Once the team has worked on projects and are able to handle tasks independently we deploy them to our clients so that they can continue to work on impactful projects.",
    Icon: FiSend,
  },
];

const OutsourcingSteps = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-[#3D7CFF]">Our Process</p>
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Steps We Strongly
          </h2>
          <h3 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Follow
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex h-full flex-col items-center gap-4 rounded-3xl border border-neutral-200 bg-white px-6 py-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:px-8 sm:py-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2D73FF] text-white">
                <Icon className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold leading-7 text-[#1F2933]">
                  {title}
                </h4>
                <p className="text-base leading-7 text-[#888D97]">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
       
        </div>
      </div>
    </section>
  );
};

export default OutsourcingSteps;

