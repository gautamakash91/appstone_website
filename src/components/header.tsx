"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ChevronDownIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceItems = [
  { label: "Integration", href: "/integration" },
  { label: "Business Intelligence", href: "/businessintelligence" },
  { label: "Cyber Security", href: "/cybersecurity" },
  { label: "Outsourcing", href: "/outsourcing" },
  { label: "Web App Development", href: "/webappdevelopment" },
  { label: "Mobile App Development", href: "/mobileappdevelopment" },
];

const MobileServicesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  const hasActiveService = serviceItems.some((item) => isActive(item.href));

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative inline-flex w-fit items-center justify-between py-3 text-base font-medium transition-all duration-300 ease-in-out hover:text-blue-500 hover:opacity-90 before:absolute before:-bottom-[2px] before:left-0 before:h-[1.5px] before:w-full before:origin-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] ${
          hasActiveService ? "text-blue-500 before:scale-x-100" : "text-neutral-900"
        }`}
      >
        Services
        <span className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDownIcon className="size-4" />
        </span>
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-neutral-200 pl-4">
          {serviceItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:text-blue-500 ${
                  active ? "text-blue-500" : "text-neutral-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollY > 10);
    };
    
    // Check initial scroll position
    handleScroll();
    
    // Add scroll listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isElevated = isSticky || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out bg-white ${
        isElevated ? "shadow-md border-b border-neutral-100" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {/* Home */}
          {navLinks.slice(0, 1).map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative inline-flex w-fit text-base font-medium transition-all duration-300 ease-in-out hover:text-blue-500 hover:opacity-90 before:absolute before:-bottom-1 before:left-0 before:h-[1.5px] before:w-full before:origin-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] ${
                  active ? "text-blue-500 before:scale-x-100" : "text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          {/* Services */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`relative inline-flex w-fit text-base font-medium transition-all duration-300 ease-in-out hover:text-blue-500 hover:opacity-90 before:absolute before:-bottom-1 before:left-0 before:h-[1.5px] before:w-full before:origin-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent px-0 h-auto py-0 ${
                    isActive("/service") ? "text-blue-500 before:scale-x-100" : "text-neutral-900"
                  }`}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[260px] gap-1 p-2">
                    {serviceItems.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className={`block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 ${
                                active ? "bg-blue-50 text-blue-600" : ""
                              }`}
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Portfolio, About, Contact */}
          {navLinks.slice(1).map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative inline-flex w-fit text-base font-medium transition-all duration-300 ease-in-out hover:text-blue-500 hover:opacity-90 before:absolute before:-bottom-1 before:left-0 before:h-[1.5px] before:w-full before:origin-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] ${
                  active ? "text-blue-500 before:scale-x-100" : "text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-neutral-700 transition-all duration-300 ease-in-out hover:bg-neutral-100 active:scale-95 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-100 lg:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-80 sm:w-72 flex-col bg-white shadow-2xl transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-neutral-700 transition-all duration-300 ease-in-out hover:bg-neutral-100 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiX />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 pb-10">
            {/* Home */}
            {navLinks.slice(0, 1).map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex w-fit py-3 text-base font-medium transition-all duration-300 ease-in-out hover:text-blue-500 hover:opacity-90 before:absolute before:-bottom-[2px] before:left-0 before:h-[1.5px] before:w-full before:origin-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] ${
                    active ? "text-blue-500 before:scale-x-100" : "text-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Services */}
            <MobileServicesMenu />
            
            {/* Portfolio, About, Contact */}
            {navLinks.slice(1).map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex w-fit py-3 text-base font-medium transition-all duration-300 ease-in-out hover:text-blue-500 hover:opacity-90 before:absolute before:-bottom-[2px] before:left-0 before:h-[1.5px] before:w-full before:origin-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] ${
                    active ? "text-blue-500 before:scale-x-100" : "text-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

