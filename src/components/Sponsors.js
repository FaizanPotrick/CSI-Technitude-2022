import React from "react";

const Sponsors = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-20 py-5 px-3">
      <h2 className="title">Sponsors</h2>
      <div className="flex justify-evenly items-center w-full flex-wrap gap-4">
        <img
          src={require("../assets/sponsors/IMG-20220913-WA0005.jpg")}
          alt=""
          className="h-16 sm:h-20 md:h-32 rounded-lg"
        />
        <img
          src={require("../assets/sponsors/Farmhouse logo normal size.png")}
          alt=""
          className="h-24 sm:h-32 md:h-44"
        />
        <img
          src={require("../assets/sponsors/IMG-20220913-WA0007.jpg")}
          alt=""
          className="h-16 sm:h-20 md:h-32 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Sponsors;
