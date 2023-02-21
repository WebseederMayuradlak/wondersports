import React from "react";
import Image from "../Images/Africa.jpg";
import Dubai from "../Images/Country-Image/Dubai.jpg"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Jordan from "../Images/Country-Image/Jordan.jpg"
import "./Destination.css";

import Middle_East from "./Country/Middle_East";
import NorthAmerica from "./Country/NorthAmerica";
const Destination = () => {
  var backHandler = (e) => {
    
    e.preventDefault();

  };
  var previousHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
     <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <div className="country">
       
        <div className="africa">
          <div className="item2">
            <h3>Africa</h3>
            <a href="" >
              guide
            </a>
            
            <a href="">trips</a>
            <a href="">articles</a>
          </div>
        </div>
        <div className="africa-items ">
          <div className="item1">
            <a href="">
              <img src={Image} height="180px" width="200px" alt="" />
              <h5>Kenya</h5>
            </a>
          </div>
          <div className="item1">
            <a href="">
              <img src={Image} height="180px" width="200px" alt="" />
              <h5>Seychelles</h5>
            </a>
          </div>
          <div className="item1">
            <a href="">
              <img src={Image} height="180px" width="200px" alt="" />
              <h5>South Africa</h5>
            </a>
          </div>
          <div className="item1">
            <a href="">
              <img src={Image} height="180px" width="200px" alt="" />
              <h5>Tanzania</h5>
            </a>
          </div>
        </div>
      </div> <br /> <br />
      <div className="asia">
        <div className="asia-container">
          <div className="text-item">
            <h3>Asia</h3>
            <a href="">guide</a>
            <a href="">trips</a>
            <a href="">articles</a>
          </div>
        </div>
      </div>
      <div className="asia-continents">
        {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
         <div className="controller left-arrow" style={{left:'140px'}}> 
          
          <a href="" onClick={backHandler}>
          
            <ArrowBackIosNewIcon fontSize="large" />
          </a>
        </div> 
        <div className="asia-country mobile-view">
          <a href="" className="cntr">
            <img src={Dubai} height="180px" width="200px" alt="" />
            <h5>Armenia</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="">
            <img src={Dubai} height="180px" width="200px" alt="" />
            <h5>Azerbaijan</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="">
            <img src={Dubai} height="180px" width="200px" alt="" />
            <h5>Indonesia</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="">
            <img src={Image} height="180px" width="200px" alt="" />
            <h5>Malaysia</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="">
            <img src={Dubai} height="180px" width="200px" alt="" />
            <h5>Maldives</h5>
          </a>
        </div>
        <div className="controller">
          <a href="" onClick={previousHandler}>
            
            <ArrowForwardIosIcon fontSize="large" />
          </a>
        </div>
{/*        
         <div className="asia-country">
          <a href="">
            <img src={Image} height="130px" width="170px" alt="" />
            <h5>Singapore</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="">
            <img src={Image} height="130px" width="170px" alt="" />
            <h5>Sri Lanka</h5>
          </a>
        </div>
        <div className="asia-country">
          <a href="">
            <img src={Image} height="130px" width="170px" alt="" />
            <h5>Thailand</h5>
          </a>
        </div>     */}
      </div>
      <div className="europe">
        <div className="europe-container">
          <div className="text-data">
            <h3>Europe</h3>
            <a href="">Guide</a>
            <a href="">Trips</a>
            <a href="">Articles</a>
          </div>
        </div>
 <div className="europe-country">
 <div className="controller " style={{left:'80px'}}> 
          
          <a href="" onClick={backHandler}>
          
            <ArrowBackIosNewIcon fontSize="large" />
          </a>
        </div>
          <div className="country-list">
            <a href="">
              <img src={Jordan} height="180px" width="200px" />
              <h5>Austrailia</h5>
            </a>
          </div> &nbsp;
          <div className="country-list">
            <a href="">
              <img src={Jordan} height="180px" width="200px" />
              <h5>Finland</h5>
            </a>
          </div>&nbsp;
          <div className="country-list">
            <a href="">
              <img src={Jordan} height="180px" width="200px" />
              <h5>France</h5>
            </a>
          </div> &nbsp;
          <div className="country-list card">
            <a href="">
              <img src={Jordan} height="180px" width="200px" />
              <h5>Georgia</h5>
            </a>
          </div> &nbsp;
        <div className="country-list">
            <a href="">
              <img src={Jordan} height="180px" width="200px" />
              <h5>Germany</h5>
            </a>
          </div> &nbsp;
          <div className="controller">
          <a href="" onClick={previousHandler}>
            
            <ArrowForwardIosIcon fontSize="large"  />
          </a>
        </div>
            {/* 
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>Greece</h5>
            </a>
          </div>
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>hungary</h5>
            </a>
          </div>
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>Italy</h5>
            </a>
          </div>
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>Netherlands</h5>
            </a>
          </div>
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>Norway</h5>
            </a>
          </div>
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>Spain</h5>
            </a>
          </div>
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>Sweden</h5>
            </a>
          </div>
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>Switerzerland</h5>
            </a>
          </div>
          <div className="country-list">
            <a href="">
              <img src={Image} height="130px" width="170px" />
              <h5>United Kingdom</h5>
            </a>
      </div>
      */}
        </div>
     
        </div>
      <Middle_East/>
      <NorthAmerica />
      
    </>
  );
};
export default Destination;
