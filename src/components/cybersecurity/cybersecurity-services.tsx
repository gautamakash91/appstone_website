"use client";

import { Button } from "@/components/ui/button";

type Service = {
  id: number;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "GDPR Compliance",
    description:
      "GDPR serves as the framework against which privacy of data is maintained for any organization that deals with anyone from the EU. If your organization works with the EU, then it is mandatory to be GDPR compliant – individual privacy rights form the core of this framework. Appstone ensures that your systems are GDPR compliant to avoid any legal and/or political tangles during your operations.",
  },
  {
    id: 2,
    title: "Implementation Of ISO 27001",
    description:
      "Information security is crucial for any organization, but this is an international concern as well. ISO 27001 is an international standard on managing information security. Being ISO 27001 compliant not only ensures that your own data and systems are secure, but it also adds to the brand value of your organization as vendors and clients alike feel more secure in taking their business to you and bringing you more business.",
  },
  {
    id: 3,
    title: "Strengthening Data Security",
    description:
      "Depending upon the extent of your digital footprint including systems, networks, and data, we customize measures and solutions to ensure that you are secure digitally. This includes setting up firewalls, making sure that information and data is secure, and CIA (confidentiality, integrity and availability) of information is maintained.",
  },
  {
    id: 4,
    title: "Training Modules",
    description:
      "While one-time implementation of cyber security measures can help you get started, it is important for your IT team to be updated with the latest in terms of compliances as well as security measures. Our cyber security training modules make sure that you keep up to date in this field.",
  },
];

const CybersecurityServices = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:gap-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            We Can Do Many Things To
          </h2>
          <h3 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Secure You
          </h3>
          <p className="text-base leading-7 text-[#888D97] sm:text-lg sm:leading-8">
            At Appstone, we offer a comprehensive range of cyber security
            services to make sure that we leave no stone unturned when it comes
            to data privacy and digital security.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map(({ id, title, description }) => (
            <div
              key={id}
              className="flex h-full gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:gap-5 sm:px-6 sm:py-7"
            >
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2D73FF] text-base font-semibold text-white">
                {id}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold leading-7 text-[#1F2933] sm:text-xl">
                  {title}
                </h4>
                <p className="text-base leading-7 text-[#888D97] sm:text-base">
                  {description}
                </p>
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

export default CybersecurityServices;

