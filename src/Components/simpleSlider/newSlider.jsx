import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "./newSlider.css";

// import required modules
import {
  Navigation,
  Autoplay,
  EffectCards,
  EffectCreative,
  EffectCoverflow,
  EffectFade,
} from "swiper";

export default ({ Card, setSlideNum, setAutoPlay = true, setEffect }) => {
  let arr = [1, 2, 3, 4, 5, 6];

  let settings = {
    spaceBetween: 30,
    modules: [
      Navigation,
      Autoplay,
      EffectCards,
      EffectCreative,
      EffectCoverflow,
      EffectFade,
    ],
    // navigation: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
      // clickable: true
    },
    effect: setEffect ? setEffect : "slide",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    autoplay: setAutoPlay
      ? {
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }
      : setAutoPlay,
    // autoplay: setAutoPlay ? setAutoPlay : true,
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
        slidesPerView: setSlideNum,
        spaceBetween: 40,
      },
      1024: {
        centeredSlides: true,
        slidesPerView: setSlideNum ? setSlideNum : 3,
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
              {Card ? <Card /> : <div>Slide {i}</div>}
            </SwiperSlide>
          );
        })}
        <div className="swiper-buttons">
          <button className="prev">
            <i class="ri-arrow-left-s-fill"></i>
          </button>
          <button className="next">
            <i class="ri-arrow-right-s-fill"></i>
          </button>
        </div>
      </Swiper>
    </div>
  );
};
