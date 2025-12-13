"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Logo from "@/assets/Logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer: FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navigations = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  const services = [
    { label: "Integration", href: "/integration" },
    { label: "Business Intelligence", href: "/businessintelligence" },
    { label: "Cyber Security", href: "/cybersecurity" },
    { label: "Outsourcing", href: "/outsourcing" },
    { label: "Web App Development", href: "/webappdevelopment" },
    { label: "Mobile App Development", href: "/mobileappdevelopment" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/appstoneOfficial",
      icon: FaFacebook,
    },
    {
      name: "Twitter",
      href: "https://x.com/AppstonePvtLtd",
      icon: FaTwitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/appstone_in",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/appstoneofficial/?igsh=MXJ4ajVub3Y3MXp3eQ%3D%3D#",
      icon: FaInstagram,
    },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-100">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Column 1: Logo and Address */}
          <div className="space-y-4 sm:space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                <Image
                  src={Logo}
                  alt="Appstone Logo"
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                Appstone
              </span>
            </div>

            {/* Address Section */}
            <div className="space-y-2 sm:space-y-3 pt-2">
              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                Address
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                428 DLF Cybercity, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-3 pt-4">
              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                Follow Us
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Navigations */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-sm sm:text-base font-bold text-gray-900">
              Navigations
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigations.map((nav) => {
                const active = isActive(nav.href);
                return (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className={`text-sm sm:text-base transition-colors duration-200 hover:text-blue-600 ${
                        active
                          ? "text-blue-600 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {nav.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-sm sm:text-base font-bold text-gray-900">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => {
                const active = isActive(service.href);
                return (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className={`text-sm sm:text-base transition-colors duration-200 hover:text-blue-600 ${
                        active
                          ? "text-blue-600 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {service.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-sm sm:text-base font-bold text-gray-900">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-medium">Number:</span>{" "}
                  <a
                    href="tel:+917809424281"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    +91-7809424281
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:info@appstone.in"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    info@appstone.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-8">
          <p className="text-sm sm:text-base text-gray-600 text-center sm:text-left">
            © Copyright Appstone. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
