"use client";

import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      const sections = [
        "#experience",
        "#about",
        "#projects",
        "#content-creation",
        "#contact",
      ];
      sections.forEach((sectionId) => {
        const section = document.querySelector(sectionId);
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-64 bg-darkBlue fixed top-0 left-0 p-8 flex-col hidden md:block">
      <div className="text-white text-3xl font-bold mb-16">
        <div className="text-4xl">Kevin He</div>
        <div className="text-lg font-light">Schulich Leader 2023.</div>
      </div>

      <div className="flex-grow flex items-center">
        <nav className="text-white space-y-8 text-left">
          <a
            href="#experience"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#experience"
              ? "text-white"
              : "text-gray-500 hover:text-white"
              }`}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#projects"
              ? "text-white"
              : "text-gray-500 hover:text-white"
              }`}
          >
            Projects
          </a>
          <a
            href="#content-creation"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#content-creation"
              ? "text-white"
              : "text-gray-500 hover:text-white"
              }`}
          >
            Content Creation
          </a>
          <a
            href="#contact"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#contact"
              ? "text-white"
              : "text-gray-500 hover:text-white"
              }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
