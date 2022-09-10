import React, { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <nav
      className={`navbar absolute w-full z-50 flex flex-col lg:flex-row justify-around items-center astro-space ${
        hamburger ? "bg-black/90" : "bg-transparent"
      } lg:bg-transparent`}
    >
      <div className="flex justify-around items-center w-full lg:w-fit py-3">
        <div className="flex items-center justify-center">
          <img
            src={require("../assets/logo.png")}
            className="mr-3 h-12 md:h-18 lg:h-20"
            alt="Logo"
          />
          <div className="sm:text-lg md:text-xl lg:text-2xl font-semibold astro-space">
            CSI-DMCE
          </div>
        </div>
        <button className="lg:hidden" onClick={() => setHamburger(!hamburger)}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          hamburger ? "flex p-5" : "hidden"
        } lg:flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 xl:gap-8 w-full lg:max-w-xl text-sm`}
        onBlur={() => setHamburger(false)}
      >
        <a href="#" className="text-white">
          Home
        </a>
        <a href="#timeline" className="text-white">
          Timeline
        </a>
        <a href="#events" className="text-white">
          Events
        </a>
        <a href="#sponsors" className="text-white">
          Sponsors
        </a>
        <a href="#about" className="text-white">
          About
        </a>
        <a href="#leads" className="text-white">
          Leads
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
