"use client";

import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import TonyImage from "@/assets/testimonial/Tony.jpeg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string | StaticImageData;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tony Alapatt",
    role: "CEO",
    company: "Paper Rocket Labs, Bangalore",
    text: "Been working with AppStone for a few years now. They have been giving us amazing resources over multiple projects. What I love the most is their consistency in delivering quality code.",
    avatar: TonyImage,
    rating: 5,
  },
];

const Testimonial: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-16 sm:py-20 md:py-24 lg:py-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-200/15 blur-[100px]" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-100/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center animate-fade-up">
          <p className="text-sm sm:text-base font-medium text-blue-600 mb-3 sm:mb-4">
            Reviews
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-neutral-900 leading-tight">
            What Our Clients Think About Us
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div
            key={currentIndex}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/50 p-8 sm:p-10 md:p-12 transition-all duration-500 ease-in-out animate-fade-up"
          >
            {/* Profile Avatar */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-blue-100/50">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center gap-1 mb-6 sm:mb-8">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FiStar
                  key={i}
                  className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-center mb-8 sm:mb-10">
              <p className="text-base sm:text-base md:text-base lg:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                &ldquo;{currentTestimonial.text}&rdquo;
              </p>
            </blockquote>

            {/* Client Info */}
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                {currentTestimonial.name}
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                {currentTestimonial.role}, {currentTestimonial.company}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Only show if more than one testimonial */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300 ease-out"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300 ease-out"
                aria-label="Next testimonial"
              >
                <FiArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}
        </div>

        {/* Dot Indicators - Only show if more than one testimonial */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ease-out ${
                  index === currentIndex
                    ? "bg-blue-600 w-8 sm:w-10 shadow-md shadow-blue-500/30"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
