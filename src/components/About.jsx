import React from "react";

function About() {
  return (
    <>
      <div className="py-16 px-20 w-full bg-[#cdea68] text-black font-title">
        <h1 className="textual w-[80vw] text-[3.8vw] leading-[3.5vw] ">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
          ideas, and hire great peo­ple.
        </h1>
      </div>
      <div className="w-full bg-[#cdea68] border-t-[1px] border-t-[#a1b750] font-title flex flex-wrap">
        <div className="w-1/2 py-20">
          <h1 className="text-[3.8vw] px-20 text-black -mt-[4vw]">
            Our Approach:
          </h1>
          <button className="px-10 bg-black ml-20 py-5 rounded-full uppercase text-[1vw]">
            Read More
          </button>
        </div>
        <div className="w-1/2 px-20 py-20">
          <img
            className="w-full h-auto rounded -mt-[3vw] "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            srcSet="
              https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x,
              https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x
            "
            alt="Strategic presentation agency"
          />
        </div>
      </div>
    </>
  );
}

export default About;
