"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import awsLogo from "@/assets/Integration/AWS.png";
import firebaseLogo from "@/assets/Integration/Firebase.png";
import onfidoLogo from "@/assets/Integration/Onfido 1.png";
import razorpayLogo from "@/assets/Integration/Razorpay.png";
import sendGridLogo from "@/assets/Integration/SendGrid.png";
import twilioLogo from "@/assets/Integration/Twillio.png";
import qwikcilverLogo from "@/assets/Integration/Unknown.png";
import freshworksZohoLogo from "@/assets/Integration/Unknown 2.png";
import Testimonial from "../testimonial";

type IntegrationItem = {
  label: string;
  description: string;
  image: StaticImageData;
};

const integrations: IntegrationItem[] = [
  {
    label: "Firebase",
    description:
      "Firebase is a backend as a service platform which removed the need for you to create a backend for your application. With plethora of features like user authentication, hosting, database, storage, ML/AI and much more, you might not need to worry about backend ever again.",
    image: firebaseLogo,
  },
  {
    label: "AWS",
    description:
      "AWS brings scalable cloud infrastructure and services for your application, covering compute, storage, networking, databases, analytics, AI/ML, and more so you can focus on delivering value without backend worries.",
    image: awsLogo,
  },
  {
    label: "SendGrid",
    description:
      "SendGrid powers reliable transactional and marketing email delivery with templating, analytics, and deliverability tooling so your product can communicate at scale.",
    image: sendGridLogo,
  },
  {
    label: "Twilio",
    description:
      "Twilio enables messaging, voice, and verification features through simple APIs, letting you add secure communications without building telephony infrastructure.",
    image: twilioLogo,
  },
  {
    label: "RazorPay",
    description:
      "Razorpay simplifies payments with robust APIs for checkout, subscriptions, payouts, and compliance so you can accept and manage payments quickly.",
    image: razorpayLogo,
  },
  {
    label: "QwikCilver",
    description:
      "QwikCilver supports gift cards and stored value solutions, helping you launch and manage gifting programs with ease.",
    image: qwikcilverLogo,
  },
  {
    label: "Onfido",
    description:
      "Onfido provides identity verification using AI and document checks, helping you onboard users securely while reducing fraud.",
    image: onfidoLogo,
  },
  {
    label: "Freshworks And Zoho",
    description:
      "Freshworks and Zoho offer CRM and support tooling to centralize customer engagement, automate workflows, and scale service teams efficiently.",
    image: freshworksZohoLogo,
  },
];

const IntegrationTypes = () => {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xl font-semibold leading-7 text-[#2A2E32] sm:text-2xl">
              Types Of Integration
            </p>
            <p className="text-xl font-semibold leading-7 text-[#2A2E32] sm:text-2xl">
              We Do!
            </p>
          </div>
        
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {integrations.map(({ label, description, image }) => (
            <div
              key={label}
              className="flex gap-4 rounded-2xl border border-neutral-200 bg-white px-4 py-5 sm:px-5 sm:py-6"
            >
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0059FF] sm:h-14 sm:w-14">
                <Image
                  src={image}
                  alt={label}
                  className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold leading-6 text-[#2A2E32] sm:text-xl">
                  {label}
                </h3>
                <p className="text-base leading-7 text-[#888D97]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonial />
    </section>
  );
};

export default IntegrationTypes;

