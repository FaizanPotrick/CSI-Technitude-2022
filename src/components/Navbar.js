import React, { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <nav
      className={`absolute w-full z-50 flex flex-col lg:flex-row justify-around items-center astro-space ${
        hamburger ? "bg-black/90" : "bg-transparent"
      } lg:bg-transparent`}
    >
      <div className="flex justify-between lg:justify-around items-center w-full lg:w-fit py-6 px-5 lg:py-2">
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
        className={`menu ${
          hamburger ? "flex p-5" : "hidden"
        } lg:flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 xl:gap-8 w-full lg:max-w-xl text-sm`}
        onBlur={() => setHamburger(false)}
      >
        <button
          onClick={() => (window.location.href = "#")}
          className="text-white tracking-widest"
        >
          Home
        </button>
        <button
          onClick={() => (window.location.href = "#timeline")}
          className="text-white tracking-widest"
        >
          Timeline
        </button>
        <button
          onClick={() => (window.location.href = "#events")}
          className="text-white tracking-widest"
        >
          Events
        </button>
        <button
          onClick={() => (window.location.href = "#sponsors")}
          className="text-white tracking-widest"
        >
          Sponsors
        </button>
        <button
          onClick={() => (window.location.href = "#about")}
          className="text-white tracking-widest"
        >
          About
        </button>
        <button
          onClick={() => (window.location.href = "#leads")}
          className="text-white tracking-widest"
        >
          Leads
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
