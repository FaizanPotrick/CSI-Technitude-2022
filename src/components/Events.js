import React, { useState } from "react";
import EscapeOut from '../assets/events/escape_out.png'
import Buy from '../assets/events/buy_beg.png'
import Upside from '../assets/events/upside_down.png'
import Word from '../assets/events/word_face_off.png'
import Idea from '../assets/events/ideobition.png'
import Lights from '../assets/events/light_out_code.png'
import Lock from '../assets/events/lock_n_key.png'
import Room from '../assets/events/room2050.png'

const Events = () => {
  const [event, setEvent] = useState(false);
  const [curCard, setcurCard] = useState(0)

  const LeftCarousel = () => {
    const Carousel = document.getElementById("carousel");
    Carousel.scrollLeft -= Carousel.offsetWidth - 20;
  };
  const RightCarousel = () => {
    const Carousel = document.getElementById("carousel");
    Carousel.scrollLeft += Carousel.offsetWidth - 20;
  };

  const OpenModal = (id) => {
    setcurCard(id)
    setEvent(true)
  }

  const eventsArray = [
    {
      title: "Escape Out",
      image: EscapeOut,
      description: `Rack your brains out to save yourselves🧠 Pass through the
      trials and find an escape🏃 
     It depends on your speed whether or not you exceed🚄
      There’s only one route out and no other way🛣️ 
     Don’t worry we believe you will slay✨
     It’s all about the mind games don’t say no🙅‍♀️
     𝐎𝐤𝐞𝐲 𝐝𝐨𝐤𝐞𝐲! 𝐋𝐞𝐭'𝐬-𝐚 𝐠𝐨!⚡`,
      link: "https://forms.gle/ezEhqZguVKLiwpyk7"
    },
    {
      title: "Buy-Beg-Borrow",
      image: Buy,
      description: `You must spend money, To make money.”
      When Mumbai was called “Bombay” and Kolkata as “Calcutta”, when prices were cheaper and the market was developing. Be the part of India’s debut in the modern era.  India’s economy is budding so grab pieces of land in different cities; but make sure it’s a wise investment or you would fall into toils of bankruptcy.`,
      link: "https://forms.gle/h64FK7p2dTXnXdck9"
    },
    {
      title: "Upside-Down",
      image: Upside,
      description: `The Mothergate🚪°I opened it. Are you one like El¿?..Would you be able to find the portal 🤔 and wave away all the treasure from the Upside Down¿?👀 

      Fetch your armor and jump to the UPSIDE DOWN ,fend off the darks and save the town🤠  
      
      Gang up with your 2 to 4 buddies and get ready for the tryst👀🔥`,
      link: "https://forms.gle/SoxX1ceKsm7z7waa9"
    },
    {
      title: "Word Face Off",
      image: Word,
      description: `Flaunt your vocabulary here!!  Words are
      what you got and letters are what you want. Play with them, and you get to tease too !! Lesser
      the time better the feast, steal it all and become the word beast...`,
      link: "https://forms.gle/4r7GyZSWNdGKEppb7"
    },
    {
      title: "IdeoBition",
      image: Idea,
      description: `📍 The best way to predict future is to create it!! Got any ideas on how we can change our future?

      Gather your friends, form a group of two or three people and Present your Idea in five slides using our template & ruleset and pitch your idea in 7 minutes`,
      link: "https://forms.gle/zBJKKiqMcWoTWtCs9"
    },
    {
      title: "Lights Out Code In",
      image: Lights,
      description: `Codes are like stained-glass windows.
      Sparkle and Shine with lights out, when the darkness errors in, reveal yourself free with the coding lights💡`,
      link: "https://forms.gle/uwNudNVaYanBqZAo7"
    },
    {
      title: "Lock & Key",
      image: Lock,
      description: `🧠 Unlock the lock before rival finds key!🔥
      Lock :- There will be some questions on the portal based on pseudo codes.
      Keys :- By solving question u will get hints which will lead u to color codes.
      You guys might have to rearrange the codes u get to get the desired color code.
      The one to get the color right first is the winner`,
      link: "https://forms.gle/DCX7xjNxMy9iEBa19"
    },
    {
      title: "Room 2050",
      image: Room,
      description: `If you think that the internet has changed your life, think again. The Internet of Things is about to change it all over again!”
      The world of IOT is a large iceberg and we have just explored the tip of it. This is your opportunity to come and explore this intriguing world. Show us your skills or come and see some of the amazing projects created by our fellow students. 
      We are eagerly waiting for you to join us on this amazing journey through the future so do join.`,
      link: "https://forms.gle/8zh53guk1NeZvVLM8"
    },
  ]

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
          {eventsArray.map((event, index) => {
            return (
              <img
                className="h-56 sm:h-64 md:h-80 cursor-pointer hover:scale-105"
                onClick={() => OpenModal(index)}
                key={index}
                id={index + 1}
                src={event.image}
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
        className={`${event ? "flex" : "hidden"
          } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {eventsArray[curCard].title}
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
                {eventsArray[curCard].description}
                <br />
                <br />
              </p>
              <a target="blank" href={eventsArray[curCard].link} className="register-link">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
