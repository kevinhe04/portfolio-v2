import React from "react";
import { FileText } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-20 fixed mt-3">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <ul className="hidden md:flex gap-x-6 absolute right-10 p-2 rounded-xl border-black border-2 text-black hover:text-white hover:bg-black transition-all duration-500">
            <li>
              <a
                href="https://drive.google.com/file/d/1JWfl8-4oR-525v0Jn7hS2tYlR8kE_zR9/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;