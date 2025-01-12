import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Cards from "./components/Cards";
import LocomotiveScroll from "locomotive-scroll";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Cards />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
