import React from "react";
import Rating from "@mui/material/Rating";
import Swiper, { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function CarouselExperience(props) {
  return (
    <div className="carosel">
      <h1>❝</h1>
      <p> 
       {props.about}
      </p>
      <Rating  value={5} readOnly />
      <div className="title">
        <h5>  {props.author} </h5>
        {/* <p> Content Writer </p> */}
      </div>
    </div>
  );
}

export default CarouselExperience;
