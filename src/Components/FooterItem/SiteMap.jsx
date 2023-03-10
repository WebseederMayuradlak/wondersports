import React from "react";
import "./sitemap.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import EventIcon from "@mui/icons-material/Event";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import { TravelExplore } from "@mui/icons-material";
function SiteMap() {
  return (
    <>
      <div className="site-map">
        <div className="home-map">
          <h2>Home Page</h2>
        </div>
        <div className="nav-items">
          <div className="site-nav">
            <a href="" className="site-item">
              <i> <CardTravelIcon /> </i>
              <h3>Destination </h3>
              <p>The_Destination </p>
            </a>
            <a href="" className="site-item">
              <i> <CardTravelIcon /> </i>
              <h3>Interest </h3>
              <p>The_Destination </p>
            </a>
            <a href="" className="site-item">
              <i> <CardTravelIcon /> </i>
              <h3>Trip_journal </h3>
              <p>The_Destination </p>
            </a>
            <a href="" className="site-item">
              <i> <CardTravelIcon /> </i>
              <h3>Events </h3>
              <p>The_Destination </p>
            </a>
            <a href="" className="site-item">
              <i> <CardTravelIcon /> </i>
              <h3>Travelouge </h3>
              <p>The_Destination </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteMap;
const SiteCard = (props) => {
  return (
    <div className="site-item">
      <i></i>
      <h3> </h3>
      <p></p>
    </div>
  );
};
