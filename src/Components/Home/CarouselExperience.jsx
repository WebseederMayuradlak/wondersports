import React from "react";
import Rating from "@mui/material/Rating";
import Swiper, { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function CarouselExperience() {
  return (
    <div className="carosel">
      <h2>What Our Client Say</h2>
      <i>❝</i>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        necessitatibus quia sapiente quibusdam in ipsum qui laboriosam libero.
        Culpa, facere quam aspernatur reprehenderit aperiam commodi ipsam vero
        est magnam ex?
      </p>
      <Rating precision="2.5" />
      <div className="title">
        <h4> There is Author </h4> &nbsp; &nbsp; &nbsp;
        <p> Content Writer </p>
      </div>
    </div>
  );
}

export default CarouselExperience;
