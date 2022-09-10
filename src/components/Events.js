import React from "react";

const Events = () => {
  const LeftCarousel = () => {
    const Carousel = document.getElementById("carousel");
    Carousel.scrollLeft -= Carousel.offsetWidth - 20;
  };
  const RightCarousel = () => {
    const Carousel = document.getElementById("carousel");
    Carousel.scrollLeft += Carousel.offsetWidth - 20;
  };
  return (
    <div
      id="events"
      className="relative flex flex-col items-center justify-center mt-20 py-5 px-3"
    >
      <h2 className="title">Events</h2>
      <div className="relative">
        <div className="absolute left-0 z-10 flex justify-center items-center h-full">
          <svg
            className="h-10 md:h-16 cursor-pointer hover:scale-125 bg-black/50 rounded-r-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onClick={LeftCarousel}
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div className="absolute right-0 z-10 flex justify-center items-center h-full">
          <svg
            className="h-10 md:h-16 cursor-pointer hover:scale-125 bg-black/50 rounded-l-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onClick={RightCarousel}
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        <div
          id="carousel"
          className="relative flex flex-shrink-0 gap-2 justify-start items-center scroll-smooth overflow-x-scroll no-scrollbar"
        >
          {[
            "Escape Out",
            "Buy Beg",
            "Upside Down",
            "Word Faceoff",
            "Ideobition",
            "Light Out Code",
            "Lock N Key",
            "Room 2050",
          ].map((event, index) => {
            return (
              <img
                className="h-56 sm:h-64 md:h-80"
                src={require(`../assets/events/${event}.png`)}
                alt=""
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="bomber-escort left-swipe text-[0.75rem] sm:text-lg md:text-xl absolute bottom-0 right-10">
        swipe to view more {">>"}
      </div>
    </div>
  );
};

export default Events;
