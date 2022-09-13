import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import Leads from "./components/Leads";
import ScrollToTop from "./components/SrollToTop";
import "./App.css";

function App() {
  const [counts, setCounts] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const deadline = new Date("Sep 15, 2022 12:00:00").getTime();
    const x = setInterval(function () {
      const now = new Date().getTime();
      const t = deadline - now;
      setCounts({
        day: Math.floor(t / (1000 * 60 * 60 * 24)),
        hour: Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minute: Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
        second: Math.floor((t % (1000 * 60)) / 1000),
      });
      if (t < 0) {
        clearInterval(x);
        setCounts({ day: 0, hour: 0, minute: 0, second: 0 });
      }
    }, 1000);
  }, [counts]);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div
        className="relative flex flex-col items-center justify-center py-5 px-3 h-screen"
        style={{
          background: `url(${require("./assets/hero-background.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center bomber-escort text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-glow hero-title">
          <h1>TECHNITUDE</h1>
          <h1>2022</h1>
        </div>
        <div className="absolute text-glow bomber-escort bottom-20 flex justify-center items-center text-lg sm:text-2xl md:text-3xl lg:text-4xl gap-2">
          <span>{counts.day}D</span>
          <span>:</span>
          <span>{counts.hour}H</span>
          <span>:</span>
          <span>{counts.minute}M</span>
          <span>:</span>
          <span>{counts.second}S</span>
        </div>
      </div>
      <Timeline />
      <Events />
      <Sponsors />
      <About />
      <Leads />
      <div className="flex flex-col items-center justify-center mt-10 py-5 px-3">
        <div className="mb-10 astro-space text-xl sm:text-3xl md:text-4xl text-glow text-center after:block after:mt-3 after:border-b-2 after:border-slate-700 after:w-[23rem] sm:after:w-[29rem] md:after:w-[35rem]">
          Stay connected to us
        </div>
        <div className="social flex gap-12 md:gap-14 justify-center items-center my-10 flex-wrap">
          <a href="https://twitter.com/dmce_csi_?t=dMktJKdkhiSltrcf11sYaA&s=08" target="_blank" rel="noreferrer">
            <img
              className="h-10 sm:h-12 hover:scale-110"
              src={require("./assets/twitter.png")}
              alt="Twitter"
            />
          </a>
          <a href="https://instagram.com/dmce_csi_?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
            <img
              className="h-10 sm:h-12 hover:scale-110"
              src={require("./assets/instagram.png")}
              alt="Instagram"
            />
          </a>
          <a href="https://www.linkedin.com/in/csicattdmce" target="_blank" rel="noreferrer">
            <img
              className="h-10 sm:h-12 hover:scale-110"
              src={require("./assets/linkedin.png")}
              alt="LinkedIn"
            />
          </a>
          <a href="https://youtube.com/channel/UCGF7OHVqV0jn6e9e6FHPuAg" target="_blank" rel="noreferrer">
            <img
              className="h-10 sm:h-12 hover:scale-110"
              src={require("./assets/youtube.png")}
              alt="YouTube"
            />
          </a>
          <a href="https://discord.gg/UMCTvwf7" target="_blank" rel="noreferrer">
            <img
              className="h-10 sm:h-12 hover:scale-110"
              src={require("./assets/discord.png")}
              alt="Discord"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
