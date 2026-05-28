"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Plane } from "lucide-react";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#content-creation", label: "Content Creation" },
  { href: "#my-life-in-pictures", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function MenuPortfolio() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 right-5 z-50 p-2 text-warm-700"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed inset-0 z-[60] bg-warm-900/20 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 bg-warm-50 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-warm-400 hover:text-warm-700 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="px-8 py-4">
          <ul className="space-y-5">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-warm-600 hover:text-warm-900 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-6 border-t border-warm-200">
              <a
                href="/exchange"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-lg text-warm-600 hover:text-warm-900 transition-colors"
              >
                <Plane size={18} />
                Exchange
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1JWfl8-4oR-525v0Jn7hS2tYlR8kE_zR9/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2 text-lg text-warm-600 hover:text-warm-900 transition-colors"
              >
                <FileText size={18} />
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
