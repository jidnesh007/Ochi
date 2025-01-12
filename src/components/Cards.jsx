import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

function Cards() {
  const [activeCard, setActiveCard] = useState(null);

  const Card = ({ imageUrl, hoverText, cardIndex }) => {
    return (
      <div
        className="relative w-1/2 bg-cover bg-center rounded-[20px] h-[40vw] bg-slate-300 overflow-hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onMouseEnter={() => setActiveCard(cardIndex)}
        onMouseLeave={() => setActiveCard(null)}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
          <span className="text-white text-2xl">{hoverText}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-20 relative">
      <div className="w-full px-20">
        <h1 className="text-[3.8vw] font-cont">Featured projects</h1>
      </div>
      <div className="w-full border-t-[1px] border-zinc-600 mt-8">
        <div className="card gap-8 px-20 py-20 flex relative">
          <AnimatePresence>
            {activeCard === 0 && (
              <motion.h1
                className="absolute flex overflow-hidden font-cont font-bold text-[8vw] text-[#cdea68] top-[20vw] left-[43vw] -translate-x-[50%] -translate-y-[50%] z-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.3, ease: "easeIn" },
                  scale: { duration: 0.3, ease: "easeIn" },
                }}
              >
                {"FIDE".split("").map((item, index) => (
                  <span key={index} className="inline-block">
                    {item}
                  </span>
                ))}
              </motion.h1>
            )}
            {activeCard === 1 && (
              <motion.h1
                className="absolute flex overflow-hidden font-cont font-bold text-[8vw] text-[#cdea68] top-[20vw] left-[43vw] -translate-x-[50%] -translate-y-[50%] z-50 -pr-[20vw]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.3, ease: "easeIn" },
                  scale: { duration: 0.3, ease: "easeIn" },
                }}
              >
                {"VISE".split("").map((item, index) => (
                  <span key={index} className="inline-block">
                    {item}
                  </span>
                ))}
              </motion.h1>
            )}
          </AnimatePresence>
          <Card
            imageUrl="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
            cardIndex={0}
          />
          <Card
            imageUrl="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
            cardIndex={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
