import React from "react";

export default function BlogContent(props) {
  return (
    <div>
      <div className="forest-blog">
        <div className="forest-blog-2">
          <div className="forest-text">
            <h3>{props.title} </h3>
            <span>{props.content}</span>
          </div>
          <div className="forest-img">
            <img src={props.Image} alt="My Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
