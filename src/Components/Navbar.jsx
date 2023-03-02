import React from "react";
import "./navbar.css";
export default function Navbar() {
  var showData = (e) => {
    e.preventDefault();
    var content = document.getElementById("content");
    var Cursor = document.getElementById("img");
    let flag = 1;

    if(flag === 0){
        content.style.left = "-100%"
        Cursor.innerText='☰';
        flag = 1;
    }
    else{
        content.style.left = 0;
        Cursor.innerText='X';
        flag = 0;
    }
   
  };
  return (
    <>
      <div className="logo">
        <a href="/" id="img" onClick={showData}>
          ☰
        </a>
      </div>
      <div className="content" id="content">
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
