import React from "react";
import "./newTripFinder.css";
import vid from "../../Images/landscape.mp4";
import Carousel from "../simpleSlider/newSlider";
import NewForm from "../form/NewForm";

let TripCard = () => {
  return (
    <div className="trip-card">
      <div className="trip-card-img">
        <img
          src="https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <h4>Lorem, ipsum dolor.</h4>
      <div className="trip-card-film">
        <h1>
          <i class="ri-external-link-fill"></i>
        </h1>
      </div>
    </div>
  );
};

const NewTripFinder = () => {
  return (
    <>
      <div className="trip-top">
        <video src={vid} autoPlay loop muted></video>
        <div className="trip-top-text">
          <h1>hehe</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="trip-mid">
        <div className="trip-mid-left">
          <h1>Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            accusantium animi, veniam explicabo sapiente, similique numquam nemo
            in quas quos repellendus, sunt libero mollitia. Labore quo, rerum
            omnis, modi dignissimos sequi amet non quod perspiciatis libero
            quidem accusamus! Possimus, distinctio?
          </p>
          <button>something</button>
        </div>
        <div className="trip-mid-right">
          <img
            src="https://images.unsplash.com/photo-1601613107757-fd603f3c38ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="trip-bottom">
        <Carousel
          setEffect={"slide"}
          setSlideNum={3}
          setAutoPlay={true}
          Card={TripCard}
        />
      </div>
      <NewForm />
    </>
  );
};
// src\Images\landscape.mp4
export default NewTripFinder;
