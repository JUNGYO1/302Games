import React from "react";
import testImage from "../assets/test2.jpg";
import mainBanner from "../assets/mainBanner.png";
const MainBanner = () => {
  return (
    <section>
      <div className="w-full relative">
        <img src={mainBanner} className="h-[600px] w-full object-cover"></img>
      </div>
    </section>
  );
};

export default MainBanner;
