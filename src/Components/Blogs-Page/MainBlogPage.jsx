import React from "react";
import "./main.css";
import { useState } from "react";
import IndiaImage from "./BlogsImage/IndiaImage.jpg";
import spanImage from "./BlogsImage/Span.jpg";
import chinaImage from "./BlogsImage/China.jpg";
import canadaImage from "./BlogsImage/Canada.jpg";
import TurkeyImage from "./BlogsImage/Turkey.jpg";
import NewsImage from "./BlogsImage/morning-news.jpg";
import BlogImage from "./BlogsImage/BlogImage.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function MainBlogPage() {
  return (
    <div className="main-blog-page">
      <div className="blog-content" style={{ paddingLeft: "30%" }}>
        <p>
          Travelling turns you into a <br /> great storyteller
        </p>
        <a href="/" className="read">
          read blog
        </a>
        <a href="/">
          destinations <ArrowRightAltIcon fontSize="large" />{" "}
        </a>
      </div>
      <div className="summer-guide-page">
        <div className="summer-1">
          <img src={BlogImage} alt="" height="250px" width="350px" />
          <h4>
            TOP TRAVEL DESTINATION FOR <br /> SUMMER 2022
          </h4>
        </div>
        <div className="summer-2">
          <img src={BlogImage} alt="" height="250px" width="350px" />
          <h4>
            COMPLETE GUIDE FOR YOUR <br /> FIRST BACKPACKING TRIP
          </h4>
        </div>
        <div className="summer-3">
          <img src={BlogImage} alt="" height="250px" width="350px" />
          <h4>
            BEST INSTAGRAM PHOTO <br /> SPOTS IN LONDON{" "}
          </h4>
        </div>
      </div>
      <div className="blog-about-us">
        <div className="about-text">
          <div className="mytext">
            <h5>About Us </h5>
            <h3>
              we guide traveller explore <br /> the world{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              error minima, ea exercitationem molestias, cumque odio et omnis
              quia quas quisquam dolores sequi repellendus laboriosam suscipit
              doloremque eum, ipsum quos.
            </p>
            <div className="brdr">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus pariatur quos facilis, commodi officiis dolor.
              </h3>
              <p>Juhn Doe</p>
              <span>Founder </span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={NewsImage} alt="" height="500px" width="550px" />
          <h3>6.5K</h3>
        </div>
      </div>
      <div className="places">
        <div className="place-text">
          <span>places</span>
          <h3>popular Destination</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            qui mollitia ea cum <br /> magni nemo, vero a explicabo ipsa est?
          </p>
        </div>
        <div className="turkey-canada">
          <div className="turkey-place">
            <span>01 India</span>
          </div>
          <div className="canada-place">
            <span>02 canada</span>
          </div>
        </div>
        <div className="span-india-china">
          <div className="span-place">
            <span>03 Turkey</span>
          </div>
          <div className="india-place">
            <span>04 china</span>
          </div>
          <div className="china-place">
            <span>05 span</span>
          </div>
        </div>
      </div>
      <div className="place-destination">
        <div className="destination-text">
          <span>Journey</span>
          <h3 style={{ color: "black", paddingTop: "0px" }}>Travel category</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            sed atque deleniti nisi ipsum, fugit voluptatum sit officiis
            cupiditate in?
          </p>
        </div>
        <div className="place-row-1">
          <div className="place-text-1">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
          <div className="place-text-2">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
          <div className="place-text-3">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
        </div>
        <div className="place-row-2">
          <div className="place-text2-1">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
          <div className="place-text2-2">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
          <div className="place-text2-3">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
        </div>
        <div className="place-row-3">
          <div className="place-text3-1">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
          <div className="place-text3-2">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
          <div className="place-text3-3">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
        </div>
        <div className="place-row-4">
          <div className="place-text4-1">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
          <div className="place-text4-2">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
          <div className="place-text4-3">
            <a href="/">
              <img src={IndiaImage} alt="" height="220px" width="370px" />
              <h3>
                Lorem ipsum dolor sit amet it consectetur was adipisicing.{" "}
              </h3>
            </a>
            <p>
              <a href="/">Blockchain</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
