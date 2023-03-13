import React, { useState } from "react";
import "./newHome.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import PaymentIcon from "@mui/icons-material/Payment";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Destination from "./CountriesImage/WhiteStone.jpg";
import TopDestination from "./TopDestination";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import TourImage from "./CountriesImage/1.jpeg";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import TourCard from "./TourCard";
import Image1 from "./CountriesImage/2.jpeg";
import Image2 from "./CountriesImage/3.jpeg";
import Image3 from "./CountriesImage/4.jpeg";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import Image4 from "./CountriesImage/5.jpeg";
import CarouselExperience from "./CarouselExperience";
import Carousel from "./Carousel/Carousel";

export default function NewHomePage() {
  var summary1 = `I stumbled upon this blog and it has completely changed the way I travel. The articles are insightful and packed with useful tips, and the stunning photography always leaves me in awe. Thanks to them, I've discovered hidden gems I never would have found on my own. Highly recommended!`;
  var auth1 = "Salim Sheikh";
  var summary2 = `Their articles are not only informative but also engaging and inspiring, making me want to pack my bags and explore the world. I'm grateful for their expertise and highly recommend their services to anyone looking for travel inspiration.`;
  var auth2 = "Wasim Wahid";
  var summary3 = `I've learned so much about different cultures and destinations through the articles and videos. They have a wealth of knowledge and experience and I always come away with new ideas and inspiration for my next trip.`;
  var auth3 = "Serif Rashmi";
  var summary4 = ``;
  var auth4 = "";
  const [email, setEmail] = useState();
  console.log(email);
  const handleClick = async (e) => {
    e.preventDefault();
    var URL = "http://localhost:4000/subscribe";
    var option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };
    await fetch(URL, option)
      .then(() => {
        alert("Subscribed ");
        setEmail("");
      })
      .catch(function () {
        alert("Failed to Subscribe");
      });
  };
  return (
    <div>
      <div className="home-page">
        <div className="home-header">
          <div className="home-text">
            <h3>Travel is a lifelong journey, Start yours today.</h3>
            <p style={{ color: "white" }}>
              Our passion for exploring new destinations, trying out unique
              experiences, and immersing ourselves in different cultures. Follow
              <br />
              along as we inspire you to pack your bags and embark on your own
              unforgettable journeys with Wanderspots.
            </p>
            <a href="" style={{ width: "20%" }}>
              Explore More <i class="ri-arrow-right-circle-line"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="best-destination">
        <div className="destination-countries">
          <div className="destination-title">
            <h1>Unlock Wonders of the World </h1>
            <p>
              Showcasing the most incredible places in the world that are sure
              to leave you breathless. From the vibrant cityscapes of Tokyo and
              <br />
              New York to the pristine beaches of the Maldives and Bali, we have
              scoured the globe to bring you the very best in travel. Whether is
              <br />
              you're seeking adventure, culture, or simply a place to relax and
              unwind, we have something for everyone. Browse our collection of
           <br />
              destinations and get ready to start on the journey of a lifetime.
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
            <h2> Travel with Wanderspots!!</h2>
          </div>
          <div className="option-1">
            <div className="icons">
              <CardTravelIcon color="primary" />
            </div>
            <div className="option-text">
              <h4>Expertise and Experience</h4>
              <p>
                We have personally visited and vetted every destination that we
                feature on our blog, ensuring that we provide our readers with
                accurate and reliable information.
              </p>
            </div>
          </div>
          <div className="option-1">
            <div className="icons">
              <WorkIcon color="success" />
            </div>
            <div className="option-text">
              <h4>Inspiration and Creativity </h4>
              <p>
                Our blog is filled with unique and creative content that goes
                beyond the typical travel guide. We share our personal stories,
                photos, and videos to give you a taste of what each destination
                has to offer.
              </p>
            </div>
          </div>
          <div className="option-1">
            <div className="icons">
              <PeopleIcon />
            </div>
            <div className="option-text">
              <h4>Community and Engagement </h4>
              <p>
                We encourage our readers to share their own travel experiences
                and tips, and we actively engage with our audience through
                social media and comments on our blog
              </p>
            </div>
          </div>
        </div>
        <div className="trip-image">
          <div className="img-1">
            <img src={Destination} alt="" />
          </div>
          <br />
          {/* <h3>Top to India </h3> */}
        </div>
      </div>
      <div className="top-tour">
        <div className="tour-text">
          <h1>
            Best of the best tours, attractions, and activities <br />   you won’t want
            to miss!
          </h1>
          <br />
          <p>
            Top destinations for your next holiday, Here's where your fellow
            travelers are headed…
          </p>
        </div>
        <div className="tour-container">
          <TourCard
            Image={TourImage}
            Title="Dubai "
            Description="Where Luxury and Ambition Meet"
          />
          <TourCard
            Image={Image2}
            Title="Maldives"
            Description="Escape to a Tropical Wonderland"
          />
          <TourCard
            Image={TourImage}
            Title="Malaysia"
            Description="A Fusion of Culture and Nature"
          />
          <TourCard
            Image={Image4}
            Title="Singapore"
            Description="A City of Spectacular Contrasts"
          />
          <TourCard
            Image={Image3}
            Title="Thailand"
            Description="The Land of beautiful Smiles"
          />
          <TourCard
            Image={Image1}
            Title="Switzerland"
            Description="A Country of Timeless Beauty"
          />
          <TourCard
            Image={TourImage}
            Title="France"
            Description=" A Country of Elegance and Romance"
          />
          <TourCard
            Image={Image2}
            Title="Spain"
            Description="The Land of Sun and Sangria"
          />
        </div>
      </div>
      <div className="svis-tour">
        <h1>Experience the world in a new way with Wanderspots!</h1>
        <div className="svis">
          <div className="svis-img">
            <img src={Image2} alt="" />
          </div>
          <div className="svis-text">
            As world citizens, we want everyone to experience the wonders of
            traveling. There’s so much out there that’s worth discovering and
            it’s our mission to make sure you get top-of-the-line experiences
            wherever your journey takes you. Don’t let any place go unexplored;
            join us in this exhilarating adventure around the globe!
          </div>
        </div>
      </div>
      <br /> <br />

      <h2>What Our Client Say</h2>
      <div className="feedback">
        {/* <Carousel  Card={CarouselExperience} setSlideNum={3}/> */}
        <button>
          
          <ArrowBackIosNewIcon fontSize="large" />
        </button>
        <CarouselExperience about={summary1} author={auth1} />
        <CarouselExperience about={summary2} author={auth2} />
        <CarouselExperience about={summary3} author={auth3} />

        <button>
       
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>
      <div className="newslatter">
        <div className="news-item">
          <h1>Subscribe for Update </h1>
          <p>
          Be the first to know about our latest travel deals, insider tips, and more. Sign up for our 
newsletter now!
          </p>
          <div className="news-input">
            <input
              type="text"
              value={email}
              placeholder="please enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <a href="" onClick={handleClick}>
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
