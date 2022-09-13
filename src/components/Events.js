import React, { useState } from "react";
import events from "../json/Events.json";

const Events = () => {
  const [event, setEvent] = useState(false);
  const [curEvent, setCurEvent] = useState(0);

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
      <div className="relative mx-3 sm:mx-14">
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
          className="relative flex flex-shrink-0 gap-2 justify-start items-center scroll-smooth overflow-y-hidden overflow-x-scroll no-scrollbar"
        >
          {events.map((event, index) => {
            return (
              <img
                className="h-56 sm:h-64 md:h-80 cursor-pointer hover:scale-105"
                style={{ transition: "0.3s ease" }}
                onClick={() => {
                  setCurEvent(index);
                  setEvent(true);
                }}
                key={index}
                src={require(`../assets/events/${event.image}.png`)}
                alt="Event Images"
              />
            );
          })}
        </div>
      </div>
      <div className="bomber-escort left-swipe text-[0.75rem] sm:text-lg md:text-xl absolute -bottom-5 right-10">
        swipe to view more {">>"}
      </div>
      <div
        className={`${
          event ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex justify-between items-start p-4 rounded-t border-b">
              <div className="text-xl font-semibold text-gray-900">
                {events[curEvent].title}
              </div>
              <button
                type="button"
                onClick={() => setEvent(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="text-base leading-relaxed text-gray-500 mb-6">
                {events[curEvent].description}
              </div>
              <a
                target="blank"
                href={events[curEvent].link}
                className="text-[#af1af1] text-base font-semibold hover:underline"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
