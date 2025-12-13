"use client";
import { FiUserCheck, FiFeather, FiSettings } from "react-icons/fi";

const steps = [
  {
    title: "Research",
    description:
      "Our prime objective is to get to know our clients and their requirements. We go deep into how we can make it effective for their business and them with technology based on our client's needs.",
    Icon: FiUserCheck,
  },
  {
    title: "Design",
    description:
      "The company's identity is held by design. We continue the process by focusing on the designing area, based on our study into the client's requirements and after determining which technology is best suited for the client's business. ",
    Icon: FiFeather,
  },
  {
    title: "Development",
    description:
      "Following all of the research and design, the major development process begins, and this is when the magic happens. The team begins to engage in the project's development and ensure that the client's expectations are met to the greatest extent possible.",
    Icon: FiSettings,
  },
];

export default function WebAppSteps() {
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

      </div>
    </section>
  );
}
