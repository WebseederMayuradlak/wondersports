import React from "react";
import Image from "../../Images/Africa.jpg";
// import Image from "../../"
import Dubai from "../../Images/Country-Image/Dubai.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Jordan from "../../Images/Country-Image/Jordan.jpg";
import "./Destination.css";
import AisaImage from "../../Images/Country-Image/France.jpg";
import Middle_East from "../Country/Middle_East";
import NorthAmerica from "../Country/NorthAmerica";
import CountryDestination from "./CountryDestination";
import EuropeImage from "../../Images/Country-Image/Dubai.jpg";
import MiddleImage from "../../Images/Country-Image/Malaysia.jpg";
import NorthImage from "../../Images/Country-Image/Finland.jpg";
const Destination = () => {
  var Asia = {
    country: "Asia",
    Image: Image,
  };
  var Europe = {
    country: "Europe",
    Image: EuropeImage,
  };
  return (
    <>
      <div className="country">
        <div className="africa-country">
          <div className="africa-text">
            <h3>Africa</h3>
            <div className="text-link">
              <a href="/">guide</a>

              <a href="/">trips</a>
              <a href="/">articles</a>
            </div>
          </div>
        </div>
        <div className="africa-img-item">
          <div className="item-1">
            <a href="/">
              <img src={Image} height="200px" width="300px" alt="" />
              <h5>Kenya</h5>
            </a>
          </div>
          <div className="item-1">
            <a href="/">
              <img src={Image} height="200px" width="300px" alt="" />
              <h5>Seychelles</h5>
            </a>
          </div>
          <div className="item-1">
            <a href="/">
              <img src={Image} height="200px" width="300px" alt="" />
              <h5>South Africa</h5>
            </a>
          </div>
          <div className="item-1">
            <a href="/">
              <img src={Image} height="200px" width="300px" alt="" />
              <h5>Tanzania</h5>
            </a>
          </div>
        </div>
      </div>{" "}
      <br /> <br />
      <CountryDestination country="Asia" Image={AisaImage} /> <br /> <br />
      <CountryDestination country="Europe" Image={EuropeImage} /> <br /> <br />
      <CountryDestination
        country="Middle East"
        Image={MiddleImage}
      /> <br /> <br />
      <CountryDestination county="North America " Image={MiddleImage} />
      {/* <CountryDestination /> */}
      {/* <br /> <br />
      <div className="asia">
        <div className="asia-container">
          <div className="text-item">
            <h3>Asia</h3>
            <a href="/">guide</a>
            <a href="/">trips</a>
            <a href="/">articles</a>
          </div>
        </div>
      </div>
      <div className="asia-continents">
        <div className="controller left-arrow" style={{ left: "140px" }}>
          <a href="/">
            <ArrowBackIosNewIcon fontSize="large" />
          </a>
        </div>
        <div className="asia-country mobile-view">
          <a href="/" className="cntr">
            <img src={Dubai} height="180px" width="200px" alt="" />
            <h5>Armenia</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="/">
            <img src={Dubai} height="180px" width="200px" alt="" />
            <h5>Azerbaijan</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="/">
            <img src={Dubai} height="180px" width="200px" alt="" />
            <h5>Indonesia</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="/">
            <img src={Image} height="180px" width="200px" alt="" />
            <h5>Malaysia</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="/">
            <img src={Dubai} height="180px" width="200px" alt="" />
            <h5>Maldives</h5>
          </a>
        </div>
        <div className="controller">
          <a href="/">
            <ArrowForwardIosIcon fontSize="large" />
          </a>
        </div>
      </div>
      <div className="europe">
        <div className="europe-container">
          <div className="text-data">
            <h3>Europe</h3>
            <a href="/">Guide</a>
            <a href="/">Trips</a>
            <a href="/">Articles</a>
          </div>
        </div>
        <div className="europe-country">
          <div className="controller " style={{ left: "80px" }}>
            <a href="/">
              <ArrowBackIosNewIcon fontSize="large" />
            </a>
          </div>
          <div className="country-list">
            <a href="/">
              <img src={Jordan} height="180px" width="200px" />
              <h5>Austrailia</h5>
            </a>
          </div>{" "}
          &nbsp;
          <div className="country-list">
            <a href="/">
              <img src={Jordan} height="180px" width="200px" />
              <h5>Finland</h5>
            </a>
          </div>
          &nbsp;
          <div className="country-list">
            <a href="/">
              <img src={Jordan} height="180px" width="200px" />
              <h5>France</h5>
            </a>
          </div>{" "}
          &nbsp;
          <div className="country-list ">
            <a href="/">
              <img src={Jordan} height="180px" width="200px" />
              <h5>Georgia</h5>
            </a>
          </div>{" "}
          &nbsp;
          <div className="country-list">
            <a href="/">
              <img src={Jordan} height="180px" width="200px" />
              <h5>Germany</h5>
            </a>
          </div>{" "}
          &nbsp;
          <div className="controller">
            <a href="/">
              <ArrowForwardIosIcon fontSize="large" />
            </a>
          </div>
        </div> */}
      {/* <Middle_East /> */}
      {/* <NorthAmerica /> */}
    </>
  );
};
export default Destination;
