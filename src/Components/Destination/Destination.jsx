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
         </>
  );
};
export default Destination;
