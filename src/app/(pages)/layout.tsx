"use client";
// import "../globals.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import ProgressBar from "@/components/progress-bar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProgressBar />
      <Navbar />
      {/* {comingSoon && <ComingSoonModal onClose={handleClose} />} */}

      <div className="pt-20">
        {/* <Sidebar /> */}
        <div>{children}</div>
      </div>
      <Footer />

      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/+258872526610"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed lg:bottom-20 md:bottom-20 bottom-24 right-4 sm:right-6 z-50 bg-green-500 text-white p-3 sm:p-3.5 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300 animate-jump"
        style={{
          animation: "jump 1.5s infinite",
        }}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
      </Link>

      {/* Contact Icon */}
      <Link
        href="/contact"
        className="fixed lg:bottom-4 md:bottom-5 bottom-4 right-4 sm:right-6 z-50 bg-blue-500 text-white p-3 sm:p-3.5 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300"
        aria-label="Contact us"
      >
        <FaPhoneAlt size={20} className="sm:w-6 sm:h-6" />
      </Link>
    </>
  );
}
