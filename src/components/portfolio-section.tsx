"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import project1 from "@/assets/projects/project1.png";
import project2 from "@/assets/projects/project2.png";
import project3 from "@/assets/projects/project3.png";
import project4 from "@/assets/projects/project4.png";

type PortfolioItem = {
  id: number;
  title: string;
  image: StaticImageData;
  tag?: string;
};

const items: PortfolioItem[] = [
  {
    id: 1,
    title: "SOSH",
    image: project1,
  },
  {
    id: 2,
    title: "ImGrows",
    image: project2,
  },
  {
    id: 3,
    title: "Dr. Signet",
    image: project3,
  },
  {
    id: 4,
    title: "Advantage Club",
    image: project4,
  },
];

// Accent colors for borders
const accentColors = [
  "#DBE5F8", // Blue
  "#FFDFD8", // Orange/Peach
  "#D1F2EB", // Green/Mint
  "#FCE4EC", // Pink
  "#FFF9C4", // Yellow
];

const PortfolioSection: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white py-16 sm:py-20 md:py-24 lg:py-10">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute right-[-80px] bottom-0 h-80 w-80 rounded-full bg-blue-100/30 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-10 lg:px-20">
        <div className="mb-10 sm:mb-12 md:mb-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left animate-fade-up">
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-semibold text-blue-600">
              Our Portfolio
            </p>
            <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-neutral-900 leading-tight animate-slide-up">
              Some Of The Amazing Work{" "}
              <span className="block sm:inline">We've Created So Far</span>
            </h2>
          </div>
          <Link href="/portfolio">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_36px_rgba(59,130,246,0.45)]">
              See More <FiExternalLink className="h-4 w-4" />
            </button>
          </Link>
        </div>

        <div className="relative">
          {/* Carousel viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((item, idx) => {
                const accentColor = accentColors[idx % accentColors.length];
                
                return (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_66.666%] lg:flex-[0_0_50%] pr-4 sm:pr-6 md:pr-8"
                  >
                    <Link
                      href={`/portfolio/${item.id}`}
                      className="block"
                    >
                      {/* Card - Same UI as AmazingWorks */}
                      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-lg cursor-pointer">
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 rounded-3xl"
                          style={{
                            borderTop: `12px solid ${accentColor}`,
                            borderLeft: `12px solid ${accentColor}`,
                          }}
                        />
                        <div className="relative flex flex-col gap-5 px-5 pb-6 pt-6 sm:px-7 sm:pt-7 sm:pb-7">
                          {/* Image - No border */}
                          <div className="overflow-hidden rounded-2xl bg-white">
                            <div className="relative aspect-video w-full">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Title - Outside the card, below it */}
                      <h3 className="mt-5 text-lg font-semibold leading-snug text-[#2A2E32] sm:text-xl hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-end gap-3 sm:gap-4">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_36px_rgba(59,130,246,0.45)] disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={prevBtnDisabled}
            >
              <FiArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_36px_rgba(59,130,246,0.45)] disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={nextBtnDisabled}
            >
              <FiArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
