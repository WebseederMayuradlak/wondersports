import React from "react";

export default function BlogImage(props) {
  return (
    <div>
      <div className="forest-blog-3">
        <div className="blog-text-3">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
