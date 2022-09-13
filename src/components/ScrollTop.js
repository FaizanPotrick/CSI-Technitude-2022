import React, { useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  onscroll = () => {
    toggleVisibility();
  };

  return (
    <button
      className={`${
        isVisible ? "flex" : "hidden"
      } w-14 h-14 flex justify-center items-center bg-[#af1af1] fixed bottom-10 right-10 text-white z-50 rounded-full cursor-pointer hover:scale-105`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path>
      </svg>
    </button>
  );
};

export default ScrollTop;
