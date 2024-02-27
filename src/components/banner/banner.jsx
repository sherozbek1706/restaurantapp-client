import React, { useRef, useState } from "react";
import "./banner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../../assets/images/banner.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";

export const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="container">
      <div className="Banner maxwidth">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          <SwiperSlide>
            <div className="BannerEl">
              <img src={banner3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="BannerEl">
              <img src={banner2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="BannerEl">
              <img src={banner1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="BannerEl">
              <img src={banner4} alt="" />
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
