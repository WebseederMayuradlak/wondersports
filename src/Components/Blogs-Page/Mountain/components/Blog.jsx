import React from "react";
import "../Mountain.css";
const Blog = ({ data }) => {
  return (
    <>
      <div className="mountain-blog mountain-blog-img">
        <div className="film"></div>
        <h1 className="mountain-heading">{data ? data.heading : "default"}</h1>
        <p className="mountain-content">{data ? data.content : "default"}</p>
      </div>
    </>
  );
};

export default Blog;
