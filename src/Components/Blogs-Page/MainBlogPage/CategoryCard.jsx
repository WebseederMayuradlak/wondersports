import React from "react";
import "./Categories.css"
import BlogsImage from "../../../Images/Country-Image/Austria.jpg";
function CategoryCard(props) {
  return (
    <>
      <div className="cat-card">
        <img src={BlogsImage} alt="" />
        <div className="cat-text">
          <h4>The Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quas
            expedita
          </p>
         <a href=""> {props.category} </a>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
