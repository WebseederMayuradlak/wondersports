import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import africa from "../../../Images/Africa.jpg";

const Slider = () => {
  return (
    <>
      <Carousel
        stopOnHover={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={1500}
        transitionTime={500}
      >
        <div>
          <img src={africa} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={africa} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={africa} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
