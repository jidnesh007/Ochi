import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-speed="-.1" data-scroll-section className="w-full py-20 overflow-hidden bg-[#004d43] font-semibold rounded-md">
      <div className="text border-t-2 border-b-2 -mb-[3vw] border-zinc-300 flex whitespace-nowrap uppercase font-cont">
        <motion.h1
          className="text-[17vw] leading-[1] font-[oswald] pr-8"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          we are ochi
        </motion.h1>
        <motion.h1
          className="text-[17vw] leading-[1] font-[oswald] pr-8"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          we are ochi
        </motion.h1>
        <motion.h1
          className="text-[17vw] leading-[1] font-[oswald] pr-8"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
