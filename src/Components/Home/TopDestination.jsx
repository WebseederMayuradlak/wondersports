import React from "react";
import Destination from "./CountriesImage/kenya.jpg";

export default function TopDestination(props) {
  return (
   
      <div className="top-destination">
       <a href=""> <img src={props.Image} alt=""  /> </a>
        <div className="text-option">
          <p>{props.price}</p>
          <a href="">{props.countries}</a>
        </div>
      </div>
   
  );
}
