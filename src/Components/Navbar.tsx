"use client";
import Image from "next/image";
import Logo from "../../public/image/logo.png";
import Khayron from "../../public/image/KHAYRON.png";
import Button from "@/Components/Button";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { gsap } from "gsap";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    if (isMenuOpen && menuRef.current instanceof HTMLElement) {
      const items = menuRef.current.querySelectorAll(".menu-link");
      gsap.fromTo(
        items,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Features" },
    { href: "/get-the-app", label: "How it works" },
    { href: "/features", label: "Docs" },
    { href: "/about", label: "Contact" },
  ];

  return (
    <div className="relative w-full">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-[9999] bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md py-3 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Khayroun logo" className="w-8 h-8 object-contain" priority />
          <Image src={Khayron} alt="Khayroun text" className="h-4 w-auto object-contain" priority />
        </Link>

        <button
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white text-2xl focus:outline-none hover:text-[#ED7D31] transition-colors duration-200"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <HiOutlineMenuAlt2 className="w-6 h-6 text-white" />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#1e1e1e]/95 z-40 p-4 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div ref={menuRef} className="mt-16 space-y-1 w-full max-w-md mx-auto font-['Average']">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="menu-link block text-white py-3 text-base hover:text-[#ED7D31] transition-colors duration-200"
              onClick={handleMenuToggle}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4">
            <Link
              href="/Login"
              className="menu-link flex justify-between items-center text-white py-3 text-base hover:text-[#ED7D31] transition-colors duration-200"
              onClick={handleMenuToggle}
            >
              Sign In <FaArrowRightLong className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div>
            <Link
              href="/Register"
              className="menu-link flex justify-between items-center text-white py-3 text-base hover:text-[#ED7D31] transition-colors duration-200"
              onClick={handleMenuToggle}
            >
              Register <FaArrowRightLong className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center mt-8 px-8">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Logo" className="h-10 w-9" />
          <Image src={Khayron} alt="Khayron Word" className="h-4 w-30" />
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-[#D9D9D9] font-['Average']">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/Login">
              <Button className="bg-[#3B6F70] font-['Average'] rounded-[8px] text-[#FFFBFB]">Sign in</Button>
            </Link>
            <Link href="/Register">
              <Button className="bg-[#EE951B] font-['Average'] rounded-[8px] border border-white text-[#FFFBFB]">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
