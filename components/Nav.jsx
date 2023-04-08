import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "./NavLinks";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="flex sticky top-0 z-10 bg-white items-center p-5 lg:px-5 shadow-sm">
      {/* Header Left */}
      <div className="">
        <Image
          className="hidden sm:block"
          src="/GDSC-COLOR.svg"
          alt="GDSC LOGO"
          width={250}
          height={100}
        />
        <Image
          className="block sm:hidden"
          src="/gdsc.png"
          alt="GDSC LOGO"
          width={50}
          height={50}
        />
      </div>
      {/* Header Middle */}
      <div className="flex md:hidden flex-grow justify-end">
        <div
          className="space-y-2 mx-4"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
        <div
          className={
            !isNavOpen
              ? "hidden"
              : "absolute w-screen h-screen top-0 left-0 z-50 flex flex-col justify-evenly items-center bg-white"
          }
        >
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#">Home</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#">About Us</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#">Team</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#">Events</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex md:justify-end lg:justify-center flex-grow">
        <div className="flex space-x-2 lg:space-x-4 ">
          <NavLinks name={"Home"} />
          <NavLinks name={"About Us"} />
          <NavLinks name={"Team"} />
          <NavLinks name={"Events"} />
          <NavLinks name={"Contact Us"} />
        </div>
      </div>
      {/* Header Right */}
      <div>
        <button
          type="button"
          className="hidden lg:block text-white border border-black bg-gradient-to-r bg-blue-500 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          onClick={() =>
            (window.location.href =
              "https://gdsc.community.dev/fet-jain-university-bengaluru/")
          }
        >
          Find Our Next Event
        </button>
      </div>
    </header>
  );
}

export default Nav;
