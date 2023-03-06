import React from "react";
import "./event.css";
import Carousel from "../simpleSlider/newSlider";
import Ecard from "./Ecard";

let SlideShow = () => {
  return (
    <div className="slideShow-img">
      <img
        src="https://images.unsplash.com/photo-1512373806263-ea7c704a1c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
    </div>
  );
};

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
        <Carousel Card={Ecard} />
      </div>
      <div className="slideShow">
        <Carousel
          Card={SlideShow}
          setSlideNum={1}
          setAutoPlay={false}
          setEffect={"fade"}
        />
      </div>
    </>
  );
};

export default Event;
