import React from "react";
import { FileText, Plane } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-20 fixed mt-3 z-50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="hidden md:flex items-center gap-6 absolute right-10 text-warm-700">
            <a
              href="/exchange"
              className="flex items-center gap-2 hover:text-warm-900 transition-colors"
            >
              <Plane className="w-5 h-5" />
              <span>Exchange</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1JWfl8-4oR-525v0Jn7hS2tYlR8kE_zR9/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 hover:text-warm-900 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
