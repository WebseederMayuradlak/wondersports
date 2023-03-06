import React from "react";
import TourImage from "./CountriesImage/1.jpeg";
export default function TourCard(props) {
  return (
    <div className="tour-card">
      <div className="tour-img">
       <a href=""> <img src={props.Image} alt="" /> </a>
      </div>
      <div className="tour-title">
        <h3> {props.Title} </h3>
        <p>{props.Description}</p>
      </div>
    </div>
  );
}
