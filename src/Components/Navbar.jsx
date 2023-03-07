import React, { useState, useEffect } from "react";
import "./navbar.css";
export default function Navbar({ show, setShow }) {
  const [nav, setNav] = useState(false);
  const [change, setChange] = useState(false);

  let handleClick = () => {
    setNav(!nav);
    setShow(!show);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <div
        className={`logo ${change ? "scroll-color" : ""}`}
        onClick={handleClick}
      >
        {!nav ? "☰" : "X"}
      </div>
      <div
        className="content"
        id="content"
        style={{ left: !nav ? "-100%" : 0 }}
      >
        <ul className="list-item ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Destination</a>
          </li>
          <li>
            <a href="/">Trips Finder</a>
          </li>
          <li>
            <a href="/">Interest</a>
          </li>
        </ul>
      </div>
    </>
  );
}
