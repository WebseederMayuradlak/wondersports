import React from "react";
import "./event.css";
import Carousel from "../SimpleSlider";

const Event = () => {
  return (
    <>
      <div className="event">
        <h2>A Comprehensive Platform For</h2>
        <br></br>
        <h1>
          <b>Your Shows & Events</b>
        </h1>
        <p>
          Lectus duis tortor vitae enim ultrices tincidunt quam euismod
          tincidunt enim id commodo Lectus duis.
        </p>
        <button>FIND YOUR NEXT EVENT</button>
      </div>
      <div className="upcoming">
        <div className="slider-nav">
          <h1>Upcoming Events</h1>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Event;
