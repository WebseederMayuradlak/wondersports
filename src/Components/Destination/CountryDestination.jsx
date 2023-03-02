import React from "react";
import "./Destination.css";
export default function CountryDestination(props) {
  return (
    <div>
      <div className="country">
        <div className="africa-country">
          <div className="africa-text">
            <h3> {props.country} </h3>
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
              <img src={props.Image} height="20%" width="20%" alt="My Image" />
              <h5>Kenya</h5>
            </a>
          </div>
          <div className="item-1">
            <a href="/">
              <img src={props.Image} height="20%" width="20%" alt="My Image" />
              <h5>Seychelles</h5>
            </a>
          </div>
          <div className="item-1">
            <a href="/">
              <img src={props.Image} height="20%" width="20%" alt="My Image" />
              <h5>South Africa</h5>
            </a>
          </div>
          <div className="item-1">
            <a href="/">
              <img src={props.Image} height="20%" width="20%" alt="My Image" />
              <h5>Tanzania</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
