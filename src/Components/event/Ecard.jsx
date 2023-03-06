import React from "react";

const Ecard = () => {
  return (
    <div className="ecard">
      <div className="ecard-top">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="imgg"
        />
      </div>
      <div className="ecard-mid">
        <h3>Something</h3>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          amet!
        </small>
      </div>
      <div className="ecard-bottom">
        <small>18 Feb, 2022 | 12 noon</small>
        <i class="ri-arrow-right-fill"></i>
      </div>
    </div>
  );
};

export default Ecard;
