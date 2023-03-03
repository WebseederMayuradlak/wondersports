import React from "react";
import "../Mountain.css";
const Info = ({ data2 }) => {
  return (
    <>
      <div
        className={`mountain-info ${
          data2?.reverse ? "mountain-info-rev" : ""
        } `}
        style={{ textAlign: data2?.text }}
      >
        <div className="mountain-info-left">
          <h1>The Mountains</h1>
          <p>{data2?.content}</p>
        </div>
        <div className="mountain-info-right">
          <img src={data2?.img} alt="blog_image" />
        </div>
      </div>
    </>
  );
};

export default Info;
