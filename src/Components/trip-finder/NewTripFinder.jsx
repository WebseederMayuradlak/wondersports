import React from "react";
import "./newTripFinder.css";
import vid from "../../Images/landscape.mp4";

const NewTripFinder = () => {
  return (
    <>
      <div className="trip-top">
        <video src={vid} autoPlay loop></video>
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
    </>
  );
};
// src\Images\landscape.mp4
export default NewTripFinder;
