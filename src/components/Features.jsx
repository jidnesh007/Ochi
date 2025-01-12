import React from "react";

function Features() {
  return (
    <div className="w-full border-t-[1px] border-zinc-600">
      <div data-scroll data-scroll-section className="w-full py-20">
        <div className="cardconatiner w-full px-20 flex gap-8">
          <div className="bgcard h-[25vw] bg-[#004d43] w-[47vw] rounded-xl flex items-center justify-center">
            <h1 className="text-[5vw] font-bold text-[#cdea68]">ochi</h1>
          </div>
          <div className="smcard h-[25vw] w-[24vw] bg-zinc-600 rounded-xl flex items-center justify-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
          </div>
          <div className="smcard h-[25vw] w-[24vw] bg-[#212121] rounded-xl flex items-center justify-center ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
