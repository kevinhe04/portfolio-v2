"use client";

import React, { useEffect, useState } from "react";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#content-creation", label: "Content Creation" },
  { href: "#my-life-in-pictures", label: "Gallery" },
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
      <div className="text-warm-900 mb-16">
        <div className="text-3xl font-serif">Kevin He</div>
        <div className="text-sm tracking-wide text-warm-400">
          Schulich Leader 2023
        </div>
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
                    ? "text-warm-900 translate-x-2"
                    : "text-warm-400 hover:text-warm-600 hover:translate-x-2"
                }`}
              >
                <span
                  className={`h-px rounded-full transition-all duration-300 ${
                    isActive ? "w-6 bg-accent" : "w-0 bg-transparent"
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
