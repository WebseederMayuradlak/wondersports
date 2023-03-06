import React from "react";
import "./newHome.css";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import PaymentIcon from "@mui/icons-material/Payment";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Destination from "./CountriesImage/WhiteStone.jpg";
import TopDestination from "./TopDestination";
import TourImage from "./CountriesImage/1.jpeg";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import TourCard from "./TourCard";
import Image1 from "./CountriesImage/2.jpeg";
import Image2 from "./CountriesImage/3.jpeg";
import Image3 from "./CountriesImage/4.jpeg";
import Image4 from "./CountriesImage/5.jpeg";
export default function NewHomePage() {
  return (
    <div>
      <div className="home-page">
        <div className="home-header">
          <div className="home-text">
            <h3>Explore the beauty of nature and Advanture</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              fugiat ut aspernatur voluptates <br /> , placeat aliquam itaque
              commodi illum quibusdam! Vitae.
            </p>
            <a href="">
              Destination <i class="ri-arrow-right-circle-line"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="best-destination">
        <div className="destination-countries">
          <div className="destination-title">
            <h1>Best Destination </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              beatae omnis quo fugit <br /> tempora Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Fuga,
            </p>
          </div>
          <div className="destination-images">
            <TopDestination
              Image={Destination}
              price="INR.894603"
              countries="Dubai"
            />
            <TopDestination
              Image={Destination}
              price="INR.143603"
              countries="Malasiya"
            />
            <TopDestination
              Image={Destination}
              price="INR.931603"
              countries="Maldvip"
            />
            <TopDestination
              Image={Destination}
              price="INR.214603"
              countries="Thailand"
            />
            <TopDestination
              Image={Destination}
              price="INR.572603"
              countries="Singapore"
            />
          </div>
        </div>
      </div>
      <div className="start-trip">
        <div className="trip-text">
          <div className="heading">
            <h2> Start your next trip in 3 Upcoming Day</h2>
          </div>
          <div className="option-1">
            <div className="icons">
              <AddLocationAltIcon color="success" />
            </div>
            <div className="option-text">
              <h4>Choose Destination </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit.
                Deleniti, cum.
              </p>
            </div>
          </div>
          <div className="option-1">
            <div className="icons">
              <PaymentIcon color="primary" />
            </div>
            <div className="option-text">
              <h4>Make Payment </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
                Nam, incidunt.
              </p>
            </div>
          </div>
          <div className="option-1">
            <div className="icons">
              <DirectionsCarIcon color="danger" />
            </div>
            <div className="option-text">
              <h4>Reach Airport </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit.
                Veritatis, dolorum.
              </p>
            </div>
          </div>
        </div>
        <div className="trip-image">
          <div className="img-1">
            <img src={Destination} alt="" />
          </div>
          <h3>Top to India </h3>
        </div>
      </div>
      <div className="top-tour">
        <div className="tour-text">
          <h1>Top tour For You</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            consequatur! Laudantium reiciendis doloribus <br /> architecto eaque
            accusantium repellat temporibus neque aut? Lorem, ipsum. Lorem,
            ipsum dolor.
          </p>
        </div>
        <div className="tour-container">
          <TourCard
            Image={TourImage}
            Title="Burj Khalifa "
            Description=" repellat temporibus neque aut? Lorem Lorem"
          />
          <TourCard
            Image={Image2}
            Title="Shibuya Japan "
            Description=" repellat temporibus neque aut? Lorem Lorem"
          />
          <TourCard
            Image={TourImage}
            Title="Sydney NSW"
            Description=" repellat temporibus neque aut? Lorem Lorem"
          />
          <TourCard
            Image={Image4}
            Title="Danu Temple"
            Description=" repellat  temporibus neque aut? Lorem Lorem"
          />
          <TourCard
            Image={Image3}
            Title="Om Beach "
            Description=" repellat  temporibus neque aut? Lorem Lorem"
          />
          <TourCard
            Image={Image1}
            Title="Parga Beach"
            Description=" repellat temporibus neque aut? Lorem Lorem"
          />
          <TourCard
            Image={TourImage}
            Title="Yokohama"
            Description=" repellat temporibus neque aut? Lorem Lorem"
          />
          <TourCard
            Image={Image2}
            Title="Lady Church"
            Description=" repellat temporibus neque aut? Lorem Lorem"
          />
        </div>
      </div>
      <div className="svis-tour">
        <h1>Why Svis Tour ? </h1>
        <div className="svis">
          <div className="svis-img">
            <img src={Image2} alt="" />
          </div>
          <div className="svis-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sed reprehenderit, eum quis odit quo mollitia molestias facere iure
            distinctio eos possimus minus facilis inventore accusamus in hic
            totam dolorem saepe blanditiis architecto ratione corporis?
            Exercitationem in maxime omnis repellat aliquid itaque illum ullam
            cum, necessitatibus explicabo praesentium eveniet? Repudiandae,
            provident odio? Molestias exercitationem maiores itaque deleniti
            laborum! Tempora, facilis.
          </div>
        </div>
      </div>
      <div className="feedback">
        <h1>Here's What Our Costumer SaY </h1>
        <div className="feedback-container"></div>
        <div className="feed-container">
          
          <div className="feed-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sed reprehenderit, eum quis odit quo mollitia molestias facere iure
            distinctio eos possimus minus facilis inventore accusamus in hic
            totam dolorem saepe blanditiis architecto ratione corporis?
            Exercitationem in maxime omnis repellat aliquid itaque illum ullam
            cum, necessitatibus explicabo praesentium eveniet? Repudiandae,
            provident odio? Molestias exercitationem maiores itaque deleniti
            laborum! Tempora, facilis.
          </div>
          <div className="feedback-img">
            <img src={Image3} alt="" />
          </div>
        </div>
      </div>
      <div className="newslatter">
        <div className="news-item">
          <h1>Subscribe for Update </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, placeat.</p>
          <div className="news-input">
        
            <input type="text" placeholder="please enter your email address" />
            <a href="" >Subscribe </a>
          
          </div>
        </div>
      </div>
    </div>
  );
}
