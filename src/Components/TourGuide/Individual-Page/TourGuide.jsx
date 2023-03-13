import React from "react";
import "./tourguide.css";
// import Carousel from "../simpleSlider/newSlider";
// import Design from "../design/Design";
import CollapseTour from "../CollapseTour";

const TourMid = ({ rev }) => {
  return (
    <div className={`tour-mid ${rev && "tour-mid-rev"}`}>
      <div className="tour-mid-left">
        <h6>---- Get Started</h6>
        <h1>What type of travellor are you?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quaerat veritatis distinctio cum harum minus provident eligendi, quia
          aspernatur perferendis nobis, explicabo neque iste culpa tempora
          assumenda vel nihil possimus quae. Reiciendis et rem commodi rerum,
          facilis fugit ullam corporis.
        </p>
      </div>
      <div className="tour-mid-right">
        <img
          src="https://images.unsplash.com/photo-1586423669195-d9df98e5a20e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1408&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

const TourCard = () => {
  return (
    <div className="tourCard">
      <img
        src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80"
        alt=""
      />
      <h1 className="tourCardText">Italy</h1>
    </div>
  );
};

const TourGuide = () => {
  return (
    <>
      <div className="tour-top">
        <img
          src="https://images.unsplash.com/photo-1512061597903-8924a46271bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="tour-top-text">
          <h6>---- A Travel Guide ----</h6>
          <h1>Prepare For The</h1>
          <h1>Adventure</h1>
          <button>Let's Go</button>
        </div>
      </div>
      <TourMid rev={false} />
      <TourMid rev={true} />
      <TourMid rev={false} />
      <div className="tourExplore">
        <div className="tourExplore-left">
          <h1>
            Let's Explore The <br /> World
          </h1>
          <button>Explore</button>
        </div>
        <div className="tourExplore-right">
          <p>
            There's a whole wide world out there. and it contains so many
            unknowns - but we all only get one life. At WildVers. we believe
            that we should travel the world while we have the
          </p>
          <p>
            If you're just starting to think about why you should travel. or
            you're looking for travel inspiration. then we're here to help. Here
            are some of the best countries you should definitely visit.
          </p>
        </div>
      </div>
      <div className="tourCardContainer">
        {/* <Carousel
          Card={TourCard}
          setSlideNum={3}
          setAutoPlay={false}
          setEffect={"coverflow"}
        /> */}
      </div>
      <div className="travelExp">
        <img
          src="https://images.unsplash.com/photo-1505783638529-f3fdc62e1bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="travelExpText">
          <h3>For Travel Experience Book Online Today</h3>
          <p>
            We offer over 700 different tours around the world. Just pick the
            place. time and the tour is yours. Nothing close to your city? Than
            contact us so we can organise a tour in your neighbourhood.
          </p>
          <button>See Tours</button>
        </div>
      </div>
      <div className="travelExpText2">
        <h3>For Travel Experience Book Online Today</h3>
        <p>
          We offer over 700 different tours around the world. Just pick the
          place. time and the tour is yours. Nothing close to your city? Than
          contact us so we can organise a tour in your neighbourhood.
        </p>
        <button>See Tours</button>
      </div>
      <CollapseTour />
      {/* <Design /> */}
    </>
  );
};

export default TourGuide;
