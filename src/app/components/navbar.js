import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 fixed mt-3">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white absolute right-10 p-2 rounded-xl border-white border-2 hover:text-black hover:bg-white transition-all duration-500">
              <li>
                <Link href="/about">
                  <p>Resume</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
