import React from "react";
import Image from "../Images/nature.jpg";
import "./features.css";
export default function Features() {
  return (
    // <div className='main'>
    <div className="main-container">
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
      <div className="destination1">
        <h5>FEATURES AND DESTINATIONS</h5>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
      <div className="features">
        <div className="destination2 card">
          <a href="/">
            {" "}
            <img src={Image} height="150px" width="175px" alt="My Image" />{" "}
          </a>
          <p>Lorem ipsum dolor sit amet </p>
          <a href="/" className="btn btn-outline-danger btn-sm">
            Let's Go
          </a>
        </div>
        <div className="destination3 card">
          <a href="/">
            {" "}
            <img alt="My Image" src={Image} height="150px" width="175px" />{" "}
          </a>

          <p>Lorem ipsum, dolor sit amet </p>
          <a href="/" className="btn btn-outline-danger btn-sm">
            Let's Go
          </a>
        </div>
        <div className="destination4 card">
          <a href="/">
            {" "}
            <img alt="My Image" src={Image} height="150px" width="175px" />{" "}
          </a>

          <p>Lorem ipsum dolor sit, amet consectetur</p>
          <a href="/" className="btn btn-outline-danger btn-sm">
            Let's Go
          </a>
        </div>
        <div className="destination5 card ">
          <a href="/">
            {" "}
            <img alt="My Image" src={Image} height="150px" width="175px" />{" "}
          </a>

          <p> Lorem ipsum dolor sit amet consectetur </p>
          <a href="/" className="btn btn-outline-danger btn-sm ">
            Let's Go
          </a>
        </div>
        <div className="destination6 card">
          <a href="/">
            {" "}
            <img alt="My Image" src={Image} height="150px" width="175px" />{" "}
          </a>

          <p> Lorem ipsum dolor sit amet consectetur . </p>
          <a href="/" className="btn btn-outline-danger btn-sm">
            Let's Go
          </a>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
