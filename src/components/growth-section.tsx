"use client";

import Image from "next/image";
import { FC } from "react";
import { FiStar } from "react-icons/fi";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

import BelieveImg from "@/assets/believe.png";

const GrowthSection: FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf1ff] via-[#eef4ff] to-[#f6f9ff]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute right-[-120px] bottom-[-60px] h-96 w-96 rounded-full bg-blue-100/40 blur-[180px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Left column */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 animate-fade-up">
          <h3 className="text-sm sm:text-base md:text-base font-medium text-blue-600">
            Our Believe
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold leading-tight sm:leading-tight text-neutral-900">
            We Believe In Fast Growth
            <br />
            Of Your Business
          </h2>
          <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 leading-relaxed max-w-full">
            We believe in offering services that will assist your business in establishing a strong online presence. We specialise in design, web development, and mobile applications for businesses of all sizes, providing high-quality, cost-effective solutions to help you achieve your goals.
          </p>
        </div>

        {/* Right column */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            {/* Phone mockup */}
            <div className="relative isolate overflow-hidden rounded-2xl sm:rounded-[24px] border border-white/50 bg-white/50 shadow-xl sm:shadow-2xl shadow-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] sm:hover:shadow-[0_24px_70px_rgba(59,130,246,0.18)] animate-fade-left">
              <Image
                src={BelieveImg}
                alt="Growth Mockup"
                className="h-auto w-full object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-[24px] border border-white/40 mix-blend-screen" />
            </div>

            {/* Notification bubbles - Responsive positioning */}
            <div className="hidden sm:block absolute top-4 sm:top-6 md:top-10 right-[-20px] sm:right-[-24px] md:right-[-28px] w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] z-10 animate-slide-in">
              <div className="flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl bg-white shadow-md sm:shadow-lg shadow-blue-100 px-3 sm:px-4 py-2 sm:py-3 border border-white/70 transition-all duration-300 hover:scale-[1.02]">
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md shadow-blue-200/60 shrink-0">
                  <FiStar className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
                </span>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
                  58 New Meeting Fixed
                </p>
              </div>
            </div>

            <div className="hidden sm:block absolute top-20 sm:top-24 md:top-32 right-[-10px] sm:right-[-12px] md:right-[-14px] w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] z-10 animate-slide-in" style={{ animationDelay: "120ms" }}>
              <div className="flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl bg-white shadow-md sm:shadow-lg shadow-blue-100 px-3 sm:px-4 py-2 sm:py-3 border border-white/70 transition-all duration-300 hover:scale-[1.02]">
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md shadow-blue-200/60 shrink-0">
                  <FiStar className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
                </span>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">12 New Sales</p>
              </div>
            </div>

            {/* Graph card - Responsive positioning */}
            <div
              className="absolute -left-4 sm:-left-6 md:-left-8 lg:-left-10 bottom-[-20px] sm:bottom-[-24px] md:bottom-[-26px] w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] rounded-xl sm:rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] sm:shadow-[0_18px_60px_rgba(0,0,0,0.12)] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(59,130,246,0.15)] sm:hover:shadow-[0_24px_80px_rgba(59,130,246,0.18)] animate-zoom-in z-10"
              style={{ animationDelay: "180ms" }}
            >
              <p className="text-xs sm:text-sm font-semibold text-gray-800 flex items-center justify-between mb-2 sm:mb-3">
                Growth <span className="text-green-600 text-[10px] sm:text-xs font-bold">↑ 580%</span>
              </p>
              <div className="mt-1 sm:mt-2 h-[100px] sm:h-[120px] md:h-[140px] w-full">
                <ReactECharts
                  option={{
                    grid: {
                      left: 5,
                      right: 5,
                      top: 5,
                      bottom: 5,
                      containLabel: false,
                    },
                    xAxis: {
                      type: "category",
                      data: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                      show: false,
                    },
                    yAxis: {
                      type: "value",
                      show: false,
                    },
                    series: [
                      {
                        data: [200, 350, 280, 450, 380, 520, 480, 600, 550, 680, 620, 750, 700, 820, 780],
                        type: "line",
                        smooth: true,
                        symbol: "none",
                        lineStyle: {
                          color: "#3b82f6",
                          width: 2.5,
                        },
                        areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                              offset: 0,
                              color: "rgba(59, 130, 246, 0.3)",
                            },
                            {
                              offset: 1,
                              color: "rgba(59, 130, 246, 0.05)",
                            },
                          ]),
                        },
                        emphasis: {
                          focus: "series",
                        },
                      },
                    ],
                    tooltip: {
                      trigger: "axis",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      borderColor: "#e5e7eb",
                      borderWidth: 1,
                      textStyle: {
                        color: "#374151",
                        fontSize: 11,
                      },
                      formatter: (params: any) => {
                        const value = params[0].value;
                        return `$ ${value.toLocaleString()}`;
                      },
                    },
                  }}
                  style={{ height: "100%", width: "100%" }}
                  opts={{ renderer: "svg", locale: "EN" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;