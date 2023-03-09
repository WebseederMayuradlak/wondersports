import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogImage from "../../../Images/Country-Image/Finland.jpg";
import InfiniteScroll from "react-infinite-scroller";
import "./Categories.css";
import CategoryCard from "./CategoryCard";

function Categories() {
  var arr = [
    "Africa",
    "Africa",
    "Africa",
    "Africa",
    "Africa",
    "Africa",
    "Asia",
    "Asia",
    "Asia",
    "Asia",
    "Asia",
    "Europe",
    "Europe",
    "Europe",
    "Europe",
    "Europe",
    "Middle East",
    "Middle East",
    "Middle East",
    "Middle East",
    "Middle East",
    "North America",
    "North America",
    "North America",
    "North America",
    "North America",
  ];
  const [category, setCategory] = useState("All");
  var handleClick = (e) => {
    e.preventDefault();

    setCategory("All");
  };
  var Africa = (e) => {
    e.preventDefault();
    setCategory("Africa");
  };
  var Asia = (e) => {
    e.preventDefault();
    setCategory("Asia");
  };
  var Europe = (e) => {
    e.preventDefault();
    setCategory("Europe");
  };
  var MiddleEast = (e) => {
    e.preventDefault();
    setCategory("Middle East");
  };
  var northAmerica = (e) => {
    e.preventDefault();
    setCategory("North America");
  };
  return (
    <>
      <div className="category">
        <div className="category-image">
          <h1>
            TRAVELLING TURNS YOU INTO A <br /> GREAT STORYTELLER
          </h1>
          <div className="cat-link">
            <a href="">Read Blog</a>
            <a href="" className="select">
              Destination
            </a>
          </div>
        </div>
        <div className="cards">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="cat-article">
          <div className="cat-text">
            <p>About Us</p>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              reprehenderit quam nam omnis unde exercitationem nesciunt quos
              eaque ea debitis molestias dicta dolorum aliquid harum tenetur
              ipsa,
            </p>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dolorum in dolore corrupti iusto,
            </h3>
          </div>
          <div className="cat-image">
            <p>6.5K</p>
          </div>
        </div>
        <div className="destination-place">
          <div className="place-heading">
            <h1>polular destination </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              consectetur <br /> consequatur doloribus est quos cupiditate?
              Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.
              Atque, illum?
            </p>
          </div>
          <div className="cat">
            <div className="two-row">
              <div className="cat-2">
                <h3>Turkey</h3>
              </div>
              <div className="cat-2">
                <h3>India</h3>
              </div>
            </div>
            <div className="three-row">
              <div className="cat-3">
                <h3>Span</h3>
              </div>
              <div className="cat-3">
                <h3>China</h3>
              </div>
              <div className="cat-3">
                <h3>Canada</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-cat">
          <div className="blog-header">
            <h1>Travel Categories</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              earum alias accusamus aliquam <br /> non saepe sint blanditiis
              asperiores sapiente ducimus.
            </p>
          </div>
          <div className="category-option">
            <ul>
              <li>
                <a href="" value="All" onClick={handleClick}>
                  All
                </a>
              </li>
              <li>
                <a href="" onClick={Africa}>
                  Africa
                </a>
              </li>
              <li>
                <a href="" onClick={Asia}>
                  Asia
                </a>
              </li>
              <li>
                <a href="" onClick={Europe}>
                  Europe
                </a>
              </li>
              <li>
                <a href="" onClick={MiddleEast}>
                  Middle East
                </a>
              </li>
              <li>
                <a href="" onClick={northAmerica}>
                  North America
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blogs-option">
          {category === "All"
            ? arr.map((e) => {
                return <CategoryCard category={e} />;
              })
            : arr
                .filter((f) => {
                  return f === category;
                })
                .map((cat) => {
                  return <CategoryCard category={category} />;
                })}
        </div>
      </div>
    </>
  );
}

export default Categories;
