import React from "react";
import Layout from "../components/Layout";
import MainBanner from "../components/MainBanner";
import Logo from "../assets/Logo.png";
import SectionWrapper from "../components/SectionWapper";

const Home = () => {
  return (
    <div className="">
      {/* 이미지 베너 */}
      <MainBanner />
      <SectionWrapper>
        <div className="w-full flex flex-row items-center justify-center py-16 justify-content-center">
          <h1 className="w-full text-md font-bold text-center">
            <div id="company-description" className="text-left">
              302 Games는 우르르타워를 개발한 게임 개발사입니다.
              <br />
              그래서 어쩌구 저쩌구 전문가로 구성되어 있고,
              <br />
              모든 멤버들은 합리적이고 효율적인 업무 프로세스를 통해
              <br />
              끊임없이 발전하고 있습니다.
            </div>
          </h1>

          <div id="company-description2" className="hidden md:block">
            <img src={Logo} alt="302 Games Logo" className="w-40" />
          </div>
        </div>

        <hr />
      </SectionWrapper>

      <SectionWrapper>
        <div className="w-full flex flex-col ustify-center py-16">
          <div className="pb-8">
            <span className="text-2xl font-bold">게임 소개</span>
          </div>
          <div>
            <iframe
              className="w-full h-[750px]"
              src="https://www.youtube.com/embed/Gljb6hiXxrA?si=9L-1h-0kxFx_rCng"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
