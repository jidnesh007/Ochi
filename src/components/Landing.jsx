import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className="text-white bg-zinc-900 w-full ">
      <div className="textstructure mt-24 px-20">
        {["we create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className="maskers font-cont">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ duration: 1 , }}
                    className="mr-5 w-[8vw] bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] h-[5.7vw] relative -top-[2.3vw] rounded-md"
                  ></motion.div>
                )}

                <h2 className="uppercase pt-[1vw] text-[7vw] mb-[5vw] leading-4 font-bold">
                  {item}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-16 flex justify-between py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-sm capitalize rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
