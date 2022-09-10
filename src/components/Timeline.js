import React from "react";
import TimeLine from "../assets/Timeline.png";

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="flex flex-col items-center justify-center mt-20 py-5"
    >
      <div className="title">Timeline</div>
      <div
        className="timeline flex flex-col items-center justify-center px-3 w-full overflow-hidden"
        style={{
          background: `url(${require("../assets/timeline_bg.png")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <img
          src={TimeLine}
          alt="Timeline"
          className="object-cover max-w-[1000px] w-full"
        />
      </div>
    </div>
  );
};

export default Timeline;
