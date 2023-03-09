import React from "react";
import "./Categories.css"
import BlogsImage from "../../../Images/Country-Image/Austria.jpg";
function CategoryCard(props) {
  return (
    <>
      <div className="cat-card">
        <img src={BlogsImage} alt="" />
        <div className="cat-text">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quas
            expedita
          </p>
         
        </div>
        <a href="" className="btn"> {props.category} </a>
      </div>
    </>
  );
}

export default CategoryCard;
