import React from "react";
import "./middle-east.css";
import Malasia from "../../Images/Country-Image/Malaysia.jpg";
var Middle_East = () => {
  return (
    <>
      <div className="middle_east">
        <div className="head-container">
          <div className="middle">
            <h3>Middle East</h3>
            <a href="/" className="anc">
              guide
            </a>
            <a href="/" className="anc">
              trips
            </a>
            <a href="/" className="anc">
              articles
            </a>
          </div>
        </div>
        <div className="middle-country">
          <div className="countries">
            <a href="/">
              <img src={Malasia} height="300px" width="500px" alt="My Image" />
              <h5>Dubai</h5>
            </a>
          </div>
          <div className="countries">
            <a href="/">
              <img src={Malasia} height="300px" width="500px" alt="My Image" />
              <h5>Jordan</h5>
            </a>
          </div>
          <div className="countries">
            <a href="/">
              <img src={Malasia} height="300px" width="500px" alt="My Image" />
              <h5>Turkey</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Middle_East;
