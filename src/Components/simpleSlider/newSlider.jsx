import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./newSlider.css";

// import required modules
import {
  Navigation,
  Autoplay,
  EffectCards,
  EffectCreative,
  EffectCoverflow,
} from "swiper";

export default () => {
  let arr = [1, 2, 3, 4, 5, 6];

  let settings = {
    spaceBetween: 30,
    modules: [
      Navigation,
      Autoplay,
      EffectCards,
      EffectCreative,
      EffectCoverflow,
    ],
    // navigation: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
      // clickable: true
    },
    effect: "slide",
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 3,
    loop: true,
    // centeredSlides: true,
    autoplay: {
      delay: 1000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: false,
      scale: 0.7,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };

  return (
    <div>
      <Swiper {...settings} className="container">
        {arr.map((e, i) => {
          return (
            <SwiperSlide className="slide" key={i}>
              <div className="cardd">slide {e}</div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-buttons">
          <button className="prev">prev</button>
          <button className="next">next</button>
        </div>
      </Swiper>
    </div>
  );
};
