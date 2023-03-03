// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import africa from "../../../Images/Africa.jpg";

// const Slider = () => {
//   return (
//     <div className="car">
//       <Carousel
//         className="caro"
//         stopOnHover={true}
//         autoPlay={true}
//         infiniteLoop={true}
//         interval={1500}
//         transitionTime={500}
//         showThumbs={false}
//       >
//         <div>
//           <img src={africa} className="h" />
//           <p className="legend">Legend 1</p>
//         </div>
//         <div>
//           <img src={africa} className="h" />
//           <p className="legend">Legend 2</p>
//         </div>
//         <div>
//           <img src={africa} className="h" />
//           <p className="legend">Legend 3</p>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slideCopntainer">
      <Slider {...settings} className="slide">
        <div className="boxx">
          <div className="cardd">
            <h3>1</h3>
          </div>
        </div>
        <div className="boxx">
          <div className="cardd">
            <h3>1</h3>
          </div>
        </div>
        <div className="boxx">
          <div className="cardd">
            <h3>1</h3>
          </div>
        </div>
        <div className="boxx">
          <div className="cardd">
            <h3>1</h3>
          </div>
        </div>
        <div className="boxx">
          <div className="cardd">
            <h3>1</h3>
          </div>
        </div>
        <div className="boxx">
          <div className="cardd">
            <h3>1</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
