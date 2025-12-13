"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/projects/project1.png";
import project2 from "@/assets/projects/project2.png";

type Project = {
  title: string;
  accent: string;
  image: StaticImageData;
};

const projects: Project[] = [
  {
    title: "Ecommerce Website For A Jewellery Supplier",
    accent: "#DBE5F8",
    image: project1,
  },
  {
    title: "Web App For A School Management System",
    accent: "#FFDFD8",
    image: project2,
  },
];

const IntegrationPreviousWorks = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Some Of Our Previous Works
          </h2>
          <Link href="/portfolio">
            <Button className="w-fit rounded-full bg-[#0059FF] px-5 py-2 text-sm font-semibold text-white shadow-none hover:bg-[#0047d6]">
              See More
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  borderTop: `12px solid ${project.accent}`,
                  borderLeft: `12px solid ${project.accent}`,
                }}
              />
              <div className="relative flex flex-col gap-5 px-5 pb-6 pt-6 sm:px-7 sm:pt-7 sm:pb-7">
                <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-[#2A2E32] sm:text-xl">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationPreviousWorks;

