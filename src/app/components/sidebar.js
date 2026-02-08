"use client";

import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);


  return (
    <div className="h-screen w-64 bg-darkBlue fixed top-0 left-0 p-8 flex-col hidden md:block">
      <div className="text-black text-3xl font-bold mb-16">
        <div className="text-4xl">Kevin He</div>
        <div className="text-lg font-light">Schulich Leader 2023</div>
      </div>

      <div className="flex-grow flex items-center">
        <nav className="text-white space-y-8 text-left">
          <a
            href="#experience"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#experience"
              ? "text-black"
              : "text-gray-500 hover:text-black"
              }`}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#projects"
              ? "text-black"
              : "text-gray-500 hover:text-black"
              }`}
          >
            Projects
          </a>
          <a
            href="#content-creation"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#content-creation"
              ? "text-black"
              : "text-gray-500 hover:text-black"
              }`}
          >
            Content Creation
          </a>
          <a
            href="#my-life-in-pictures"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#my-life-in-pictures"
              ? "text-black"
              : "text-gray-500 hover:text-black"
              }`}
          >
            My life in pictures
          </a>
          <a
            href="#contact"
            className={`block text-lg hover:translate-x-10 transition-all duration-300 ${activeSection === "#contact"
              ? "text-black"
              : "text-gray-500 hover:text-black"
              }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
