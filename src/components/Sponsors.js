import React from "react";

const Sponsors = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-20 py-5 px-3">
      <h2 className="title">Sponsors</h2>
      <div className="flex justify-evenly items-center w-full flex-wrap gap-4">
        <div className="flex flex-col justify-center items-center max-w-sm text-center">
          <img
            src={require("../assets/sponsors/IMG-20220913-WA0005.jpg")}
            alt="logo"
            className="h-16 sm:h-20 md:h-32 rounded-lg"
          />
          <div className="text-sm mt-3 astro-space">
            India's first RTO approved two wheeler electric conversion kit ! Go
            green go electric with GogoA1.com !!
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm text-center">
          <img
            src={require("../assets/sponsors/Farmhouse logo normal size.png")}
            alt="logo"
            className="h-24 sm:h-32 md:h-44"
          />
          <div className="text-sm mt-3 astro-space">FARM HOUSE CAFE</div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm text-center">
          <img
            src={require("../assets/sponsors/IMG-20220913-WA0007.jpg")}
            alt="logo"
            className="h-16 sm:h-20 md:h-32 rounded-lg"
          />
          <div className="text-sm mt-3 astro-space">ICFAI BUSINESS SCHOOL</div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-sm text-center">
          <img
            src={require("../assets/sponsors/Subject.png")}
            alt="logo"
            className="h-24 sm:h-32 md:h-40"
          />
          <div className="text-sm mt-3 astro-space">HOTEL VRUSHALI</div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
