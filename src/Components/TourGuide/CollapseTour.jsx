import React from 'react'

import Image01 from "./CountriesImage/Image1.jpeg";
import { Button } from "@mui/material";
import Image02 from "./CountriesImage/Image1.jpeg";
import Image03 from "./CountriesImage/6.jpeg";
export default function CollapseTour() {
  return (
    <div className="middle-content">
    <div className="middle-content-1">
      <img src={Image03} alt="My Image" height="450px" width="380px" />
    </div>
    <div className="middle-content-2">
      <div className="middle-content2-img-1">
        <img src={Image03} alt="My Image" height="450px" width="380px" />
      </div>
      <div className="middle-content2-img-2">
        <img src={Image03} alt="My Image" height="270px" width="380px" />
      </div>
      &nbsp;
    </div>
    <div className="middle-content-3">
      <div className="middle-content3-img-1">
        <img src={Image03} alt="My Image" height="450px" width="380px" />
      </div>{" "}
      &nbsp;
      <div className="middle-content3-img-2">
        <img src={Image03} alt="My Image" height="270px" width="380px" />
      </div>
    </div>
    <div className="middle-content-4">
      <img src={Image03} alt="My Image" height="450px" width="380px" />
    </div>
  </div>
  )
}
