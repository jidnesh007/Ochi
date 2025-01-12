import { motion } from "framer-motion";
import React from "react";

function Footer() {
    
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className="w-full h-screen bg-zinc-100 flex">
      <div className="w-1/2 py-20 px-20 relative">
        <h1 className=" font-title text-black uppercase font-bold text-[8vw] tracking-tighter leading-[.85]">
          eye- opening
        </h1>
        <h1 className=" py-10 text-[2vw] font-bold absolute bottom-0 text-black">ochi</h1>
      </div>
      <div className="w-1/2 py-20">
        <h1 className="font-title text-black uppercase font-bold text-[8vw] tracking-tighter leading-[.85]">
          presentation
        </h1>
        <div className="links coloumn text-black flex-col flex text-[1.2vw] py-16">
          <a href="">Instagram</a>
          <a href="">Twitter</a>
          <a href="">Facebook</a>
          <a href="">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
