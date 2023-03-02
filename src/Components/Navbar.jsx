import React from "react";
import "./navbar.css";
export default function Navbar() {
  var showData = (e) => {
    e.preventDefault();
    var content = document.getElementById("content");
    var Cursor = document.getElementById("img");
    if(content.style.display==='block'){
        content.style.display='none';
        Cursor.innerText='☰';
    }
    else{
        content.style.display = "block";
Cursor.innerText='X';
    }
   
  };
  return (
    <>
      <div className="logo">
        <a href="/" id="img" onClick={showData}>
          
          ☰
        </a>
      </div>
      <div className="menu"></div>
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
