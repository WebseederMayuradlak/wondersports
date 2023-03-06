import React from "react";
import "./destination.css";
import Carousel from "../../Components/simpleSlider/newSlider";

let tripCard = () => {
  return (
    <>
      <div className="trip-card">
        <div className="trip-card-top">
          <img
            src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt=""
          />
        </div>
        <div className="trip-card-mid">
          <p className="trip-card-mid-top">Lorem, ipsum dolor.</p>
        </div>
      </div>
    </>
  );
};

const newDestination = () => {
  return (
    <>
      <div className="trip-top">
        <img
          src="https://images.unsplash.com/photo-1520513455472-b259f1ec720a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="trip-top-text">
          <h1>AFRICA</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="trip-mid">
        <button>
          Article <i class="ri-external-link-fill"></i>
        </button>
        <button>
          Tour Guide <i class="ri-external-link-fill"></i>
        </button>
        <button>
          Trip Finder <i class="ri-external-link-fill"></i>
        </button>
      </div>
      <div className="trip-bottom">
        <h1>COUNTRIES</h1>
        <div className="trip-cards">
          <Carousel
            setAutoPlay={true}
            Card={tripCard}
            setEffect={"coverflow"}
          />
        </div>
      </div>
    </>
  );
};

export default newDestination;
