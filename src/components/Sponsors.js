import React from "react";
import Spons1 from '../assets/Sponsors/Farmhouse logo normal size.png'
import Spons2 from '../assets/Sponsors/IMG-20220913-WA0005.jpg'
import Spons3 from '../assets/Sponsors/IMG-20220913-WA0007.jpg'

const Sponsors = () => {
  return (
    <div
      id="sponsors"
      className="relative flex flex-col items-center justify-center mt-20 py-5 px-3"
    >
      <h2 className="title">Sponsors</h2>
      <div className="flex sponsor-images">
        <img src={Spons1} alt="" />
        <img src={Spons2} alt="" />
        <img src={Spons3} alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
