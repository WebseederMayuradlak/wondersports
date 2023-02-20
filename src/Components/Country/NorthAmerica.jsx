import React from "react";
import "./north.css"
import AmericaImage from '../../Images/Country-Image/USA.jpg'
const NorthAmerica =()=>{
    return (
        <>
        <div className="north-america">
            {/* <h1>Hello I am From North America </h1> */}
            <div className="north-items">
                <div className="north">
                    <h3>North America</h3>
                    <a href="">trips</a>
                    <a href="">guide</a>
                    <a href="">article</a>
                    
                                    </div>
            </div>
        </div>
        <div className="north-countries">
            <a href="">
                <img src={AmericaImage} alt="" width='500px' height='300px' />
                <h5>United State of America </h5>
            </a>
        </div>
        </>
    )
}
export default NorthAmerica;