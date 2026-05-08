"use client";

import React, { useEffect, useState } from "react";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#content-creation", label: "Content Creation" },
  { href: "#my-life-in-pictures", label: "My life in pictures" },
  { href: "#contact", label: "Contact" },
];

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
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="h-screen w-64 fixed top-0 left-0 p-8 flex-col hidden md:block">
      <div className="text-black mb-16">
        <div className="text-4xl font-bold">Kevin He</div>
        <div className="text-lg font-light text-gray-400">Schulich Leader 2023</div>
      </div>

      <div className="flex-grow flex items-center">
        <nav className="space-y-6 text-left">
          {navItems.map(({ href, label }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                className={`flex items-center gap-3 text-lg transition-all duration-300 ${
                  isActive
                    ? "text-black translate-x-2"
                    : "text-gray-400 hover:text-gray-600 hover:translate-x-2"
                }`}
              >
                <span
                  className={`h-px rounded-full transition-all duration-300 ${
                    isActive ? "w-6 bg-blue-500" : "w-0 bg-transparent"
                  }`}
                />
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
