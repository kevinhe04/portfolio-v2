import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 fixed mt-3">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white absolute right-10 p-2 rounded-xl border-white border-2 hover:text-black hover:bg-white transition-all duration-500">
              <li>
                <a
                  href="https://drive.google.com/file/d/1JWfl8-4oR-525v0Jn7hS2tYlR8kE_zR9/view?usp=sharing"
                  target="_blank"
                >
                  <p>Resume</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
