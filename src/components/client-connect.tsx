"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookMeetingModal } from "@/components/book-meeting-modal";

const ClientConnect: FC = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-blue-100/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-50/30 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full lg:w-4/3 max-w-7xl px-4 sm:px-6 md:px-8">
        {/* CTA Card */}
        <div className="relative rounded-3xl  bg-[#377DFF96] shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/50 p-8 sm:p-10 md:p-12 lg:p-12 transition-all duration-300 hover:shadow-[0_12px_60px_rgba(0,89,255,0.25)]">
          {/* Content */}
          <div className="text-center space-y-5 sm:space-y-6 lg:space-y-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-white leading-tight">
              Have A Project To Discuss?
              <br />
              Let&apos;s Connect
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-base lg:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            Share your brief with us, and we will evaluate the best way forward.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
              {/* Primary Button - Blue with white text */}
              <Button
                size="lg"
                onClick={() => setShowBookingModal(true)}
                className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-8 py-5 sm:py-6 lg:py-5 text-sm sm:text-base lg:text-base font-semibold bg-[#377DFF] text-white rounded-xl shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
              >
                <span className="relative z-10">Book A Meeting</span>
                <div className="absolute inset-0 bg-[#377DFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* Secondary Button - White with blue border and blue text */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto px-6 sm:px-8 lg:px-8 py-5 sm:py-6 lg:py-5 text-sm sm:text-base lg:text-base font-semibold border-2 border-[#377DFF] text-[#0059FF] bg-white rounded-xl hover:bg-blue-50 hover:border-[#0059FF] hover:scale-105 hover:shadow-lg hover:shadow-blue-200/20 transition-all duration-300 ease-out"
              >
                <Link href="mailto:info@appstone.in">
                  Drop a Mail
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookMeetingModal open={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </section>
  );
};

export default ClientConnect;
