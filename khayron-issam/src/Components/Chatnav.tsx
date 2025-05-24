"use client";

import { useState, useRef, useEffect } from "react";
import { FiMenu, FiEdit2, FiChevronDown, FiSettings } from "react-icons/fi";
import gsap from "gsap";
import Image from "next/image";

import Logo from "../../public/image/logoblack.png";
import Khayron from "../../public/image/KHAYRONblack.png";
import ProfilePic from "../../public/image/profile.png"; // Replace with your actual profile image

export default function Chatbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        x: isNavOpen ? 0 : "-100%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isNavOpen]);

  return (
    <>
      {/* Top Nav Button */}
      <div className="p-4 flex items-center justify-between bg-white z-10 relative">
        <button
          onClick={() => setIsNavOpen(true)}
          className="text-2xl text-gray-800"
        >
          <FiMenu />
        </button>
        <FiEdit2 className="text-xl text-gray-600 cursor-pointer" />
      </div>

      {/* Sidebar Nav */}
      <div
        ref={navRef}
        className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 transform -translate-x-full flex flex-col justify-between"
      >
        {/* Header */}
        <div>
          <div className="p-4 border-b border-gray-300 flex items-center gap-3">
            <Image src={Logo} alt="Logo" className="w-6 h-6" />
            <Image src={Khayron} alt="Khayron" className="h-4 w-auto" />
          </div>

          {/* Today Section */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex justify-between items-center text-gray-700 font-semibold text-sm mb-2">
              <span>Today</span>
              <span className="flex items-center gap-1 text-gray-500 font-normal">
                12 Total <FiChevronDown />
              </span>
            </div>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>How to be a better person?</li>
              <li>Power of Forgiveness</li>
              <li className="flex justify-between items-center bg-[#DAE4E4] px-2 py-1 rounded">
                <span>Quranic versets patience</span>
                <FiEdit2 className="text-gray-600 text-xs" />
              </li>
              <li>Reason & Revelation</li>
              <li>Wealth and Charity</li>
            </ul>
          </div>

          {/* Previous 7 Days Section */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex justify-between items-center text-gray-700 font-semibold text-sm mb-2">
              <span>Previous 7 Days</span>
              <span className="flex items-center gap-1 text-gray-500 font-normal">
                118 <FiChevronDown />
              </span>
            </div>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>Divine Justice</li>
              <li>Predestination & Free Will</li>
              <li>The Origin of Life</li>
              <li>Caring of the earth</li>
              <li>Meaning of Taqwa</li>
            </ul>
          </div>
        </div>

        {/* Footer: Settings & Profile */}
        <div className="p-4 flex flex-col items-center gap-3 border-t border-gray-200">
          <FiSettings className="text-2xl text-gray-600" />
          <Image
            src={ProfilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsNavOpen(false)}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ✕
        </button>
      </div>
    </>
  );
}
