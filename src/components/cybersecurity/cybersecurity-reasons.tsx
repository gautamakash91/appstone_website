"use client";

import { FiUsers, FiHeadphones, FiShield } from "react-icons/fi";

const cards = [
  {
    title: "Partners Not Vendors",
    description:
      "At Appstone, we are not just vendors – we are your partners in implementing cyber security for your organization. When it comes to security, trust is an important aspect. You can trust us with your data and your systems.",
    Icon: FiUsers,
  },
  {
    title: "Round-The-Clock Support",
    description:
      "We are there for you – 24/7/365. We understand that any glitches in systems, especially when it comes to cyber security, can bring work to a complete standstill. Appstone is there to resolve these problems on a real-time basis – save on the costs associated with avoidable delays.",
    Icon: FiHeadphones,
  },
  {
    title: "Complete Security Solutions",
    description:
      "Our experienced and expert team understands the importance of a holistic cyber security system. It is not just our job, but our responsibility to assess the gaps in your systems to make sure that every aspect of cyber security is accounted for. Appstone offers complete security solutions for your organization.",
    Icon: FiShield,
  },
];

const CybersecurityReasons = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Reason For Choosing Us
          </h2>
          <h3 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            As Your Partner
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex h-full flex-col items-center gap-4 rounded-3xl border border-neutral-200 bg-white px-6 py-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.05)] sm:px-8 sm:py-10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2D73FF] text-white sm:h-18 sm:w-18">
                <Icon className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold leading-7 text-[#1F2933] sm:text-2xl">
                  {title}
                </h4>
                <p className="text-base leading-7 text-[#888D97]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CybersecurityReasons;

