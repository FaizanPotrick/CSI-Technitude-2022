import React, { useState } from "react";

const Events = () => {
  const [event, setEvent] = useState(false);
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
              <button
                className="hover:scale-105"
                onClick={() => setEvent(true)}
              >
                <img
                  className="h-56 sm:h-64 md:h-80"
                  src={require(`../assets/events/${event}.png`)}
                  alt=""
                  key={index}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="bomber-escort left-swipe text-[0.75rem] sm:text-lg md:text-xl absolute bottom-0 right-10">
        swipe to view more {">>"}
      </div>
      <div
        className={`${
          event ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Event
              </h3>
              <button
                type="button"
                onClick={() => setEvent(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
