import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Google from "@mui/icons-material/Google";
import Pinterest from "@mui/icons-material/Pinterest";
import Instagram from "@mui/icons-material/Instagram";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import Logo from "../Images/images.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import "./footer.css";
// import { padding } from "@mui/system";
const NewFooter = () => {
  return (
    <>
    <hr />
      <footer className="bg-white text-center text-dark fixed-bottm">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        <div className="text-black">
          <section className="mb-4">
            </section>
        
          
          <section className="main bg-white">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 text-start" id="logo-container">
                {/* <h4>Logo icon</h4> */}
                <ul className="list-unstyled mb-0 text-start">
                  <h4>Contact Details</h4>
                  <li>
                    
                    <a href="">
                      
                      <img
                        src={Logo}
                        alt=""
                        height="40px"
                        width="40px"
                        className="rounded left"
                      />
                    </a>
                  </li>
                  <li>
                    
                    <Phone /> Contact No.+91998347543
                  </li>
                  <li>
                    
                    <Email /> Email myemail@gmail.com
                  </li>

                  <li>
                    <LocationOnIcon /> Address Greater Kailash
                  </li>

                  <li></li>
                </ul>
              </div> 
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-dark">

                <ul className="list-unstyled mb-0 text-start" id="menu-icon">
                  <li>
                    <a href="#!" >
                      <h4>Home</h4>
                    </a>
                  </li>
                  <li>
                    <a href="/" >
                      Destination
                    </a>
                  </li>
                  <li>
                    <a href="/" >
                      Interest
                    </a>
                  </li>
                  <li>
                    <a href="/" >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="" >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                {/* <h5 className="text-uppercase">Links</h5> */}

                <ul className="list-unstyled mb-0 text-start" id="destination">
                  <li>
                    <a href="" > 
                     <h4> Destination </h4>
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      Africa
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      Asia
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      Europe
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      Middle East
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      North America
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0" id="blog-page">
                <h5 className="text-uppercase"></h5>

                <ul className="list-unstyled mb-0 text-start">
                  <li>
                    <a href="" >
                      <h4>Blogs</h4>
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      This is Our Africa Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      This is Our Asia Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      This is North Ameriaca Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" >
                      This is Middle East Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <p className="float-left">Contact us on Social Media</p> */}
     <div className="icon-container">
      
            <div className="text-start" id="social"> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <a >
                <Facebook color="blue" />
              </a>&nbsp; 

              <a className="">
                <Twitter color="blue" />
              </a>
              &nbsp; 
              <a className="">
                <Pinterest color="danger" />
              </a>
&nbsp;
              <a className="">
                <Instagram color="secondary" />
              </a>
&nbsp;
              <a className="">
                <LinkedIn />
              </a>

            </div>
            <div className="copyright">
            PrivacyPolicies.com © 2002 - 2023 <br /> All rights reserved
            </div>
            <div className="lorem-container">
      <p>. Expedita ea quis cupiditate  est labore, sunt, laborum incidunt? Sed sapiente laboriosam excepturi fugit consectetur a.</p>

      </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};
export default NewFooter;
