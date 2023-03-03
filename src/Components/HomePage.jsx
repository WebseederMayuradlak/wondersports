// import React, { useEffect, useState } from "react";
// import Video from "../Images/Video.mp4";
// import DubaiImage from "../Images/Dubai.jpg";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
// import ImportContactsIcon from "@mui/icons-material/ImportContacts";
// import "./home.css";
// import ShareIcon from "@mui/icons-material/Share";
// import PublicIcon from "@mui/icons-material/Public";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
// import Logo from "../Images/mylogo.jpg";
// import ParkIcon from "@mui/icons-material/Park";
// import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
// import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
// import LanguageIcon from "@mui/icons-material/Language";
// import Tree from "../Images/Tree.PNG";
// import Features from "./Features";
// const HomePage = () => {
//   var style = {
//     fontSize: 50,
//   };
//   var [customer, setCustomer] = useState(0);
//   var [dest, setDest] = useState(0);
//   var [tour, setTour] = useState(0);
//   var [tourtype, setTourtype] = useState(0);

//   return (
//     <>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//       />
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//         integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
//         crossOrigin="anonymous"
//       />

//       <div className="mycontainer ">
//         <video
//           src={Video}
//           muted
//           loop
//           autoPlay
//           // width="100%"
//           // height="700px"
//           // style={{width:'100%',height:'700px'}}
//         ></video>
//         <div className="text">
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
//             accusantium ratione similique nisi non cum, accusamus temporibus
//             illum fugiat? Ad!
//           </p>
//         </div>
//       </div>
//       {/* <div className="img-container">
//         <div className="img-data">
//          <h4>Africa</h4>
//         </div>
//     </div> */}
//       <h3> Continents</h3>

//       <div className="continents">
//         <div className="col1 ">
//           <a href="/" className="">
//             <p>Africa</p>
//           </a>
//         </div>
//         <div className="col2 ">
//           <a href="/" className="">
//             <p>Asia</p>
//           </a>
//         </div>
//         <div className="col3">
//           <a href="/" className="">
//             <p>Europe</p>
//           </a>
//         </div>
//         <div className="col4">
//           <a href="/" className="">
//             <p>North America</p>
//           </a>
//         </div>
//         <div className="col5">
//           <a href="/" className="">
//             <p>Middle East</p>
//           </a>
//         </div>
//       </div>
//       <div className="trade">
//         {/* <h3>What's Trending </h3> */}
//         <h4>What's Trending</h4>
//         <div className="trending">
//           <div className="blog1">
//             <button className="btn btn-light rounded-pill btn-sm">
//               READ MORE
//             </button>

//             <p> Lorem ipsum dolor sit amet, consectetur </p>
//             {/* <button className="btn btn-light rounded-pill btn-sm">READ MORE</button> */}

//             <a href="/" className="cn">
//               Asia
//             </a>
//           </div>
//           <div className="blog2">
//             <button className="btn btn-light rounded-pill btn-sm">
//               READ MORE
//             </button>

//             <p> Lorem ipsum dolor sit amet consectetur</p>

//             <a href="/" className="cn">
//               Africa
//             </a>
//           </div>
//           <div className="blog3">
//             <button className="btn btn-light  rounded-pill btn-sm">
//               READ MORE
//             </button>

//             <p> Lorem ipsum dolor sit amet consectetur</p>

//             <a href="/" className="cn">
//               Europe
//             </a>
//           </div>
//           <div className="blog">
//             <button className="btn btn-light rounded-pill btn-sm">
//               READ MORE
//             </button>

//             <p> Lorem ipsum dolor, sit amet consectetur </p>
//             <a href="/" className="cn">
//               North
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="next">
//         <div className="con1">
//           <p>WHAT NEXT ?</p>
//         </div>
//         <div className="con2">INSEPERATION</div>
//         <div className="con3">
//           <div className="first-3">
//             <a href="/">
//               {" "}
//               <i>
//                 {" "}
//                 <ImportContactsIcon sx={style} />{" "}
//               </i>{" "}
//             </a>
//             <h6>OFFBEATS</h6>
//           </div>{" "}
//           &nbsp; &nbsp;
//           <div className="first-4">
//             <a href="/">
//               {" "}
//               <i>
//                 {" "}
//                 <LocationOnIcon sx={style} />{" "}
//               </i>{" "}
//             </a>
//             <h6>CITY & BREAKS</h6>
//           </div>{" "}
//           &nbsp; &nbsp;
//           <div className="first-5">
//             <a href="/">
//               {" "}
//               <i>
//                 {" "}
//                 <LightModeIcon sx={style} />{" "}
//               </i>{" "}
//             </a>
//             <h6>ISLAND & BEACHES</h6>
//           </div>{" "}
//           &nbsp; &nbsp;
//           <div className="first-5">
//             <a href="/">
//               {" "}
//               <i>
//                 {" "}
//                 <ShareIcon sx={style} />{" "}
//               </i>{" "}
//             </a>
//             <h6>ROAD TRIPS & </h6>
//           </div>{" "}
//           &nbsp; &nbsp; &nbsp;
//           <div className="first-6">
//             <a href="/">
//               {" "}
//               <i>
//                 {" "}
//                 <PanoramaFishEyeIcon sx={style} />
//               </i>{" "}
//             </a>
//             <h6>ADVENTURES</h6>
//           </div>{" "}
//           &nbsp; &nbsp;
//           <div className="first-7">
//             <a href="/">
//               {" "}
//               <i>
//                 {" "}
//                 <PublicIcon sx={style} />{" "}
//               </i>{" "}
//             </a>
//           </div>
//         </div>
//       </div>
//       <Features />

//       {/*<div className="experience">
//         <div className="column1">
//           <h4>Experience Posts </h4>
//           <p>

//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
//             veritatis fugiat accusantium libero quas vitae alias sunt corporis,
//             esse deleniti hic qui tempora maiores error ea sapiente suscipit ex
//             odit!
//           </p>
//           <a href="/">Explore</a>
//         </div>
//         <div className="column2">
//           <img src={DubaiImage} alt="My Image" height="250px" width="400px" />
//         </div>
//       </div>
//       <div className="counter">
//         <div className="items">
//           <div className="plan">
//             <i>

//               <AirplanemodeActiveIcon sx={style} />{" "}
//             </i>
//             <p id=""> 94532 </p>
//             <span>Customers</span>

//           </div>
//           <div className="tree">
//             <i>

//               <ParkIcon sx={style} />{" "}
//             </i>
//             <p> 68734 </p>
//             <span>Destination</span>
//           </div>
//           <div className="glob">
//             <i>

//               <LanguageIcon sx={style} />
//             </i>
//             <p id="">19084</p>
//             <span>Tours</span>
//           </div>
//           <div className="travel">
//             <i>

//               <DirectionsBusIcon sx={style} />{" "}
//             </i>
//             <p> 8954 </p>
//             <span>Your Types</span>
//           </div>
//         </div>
//         <div className="trips">
//           <a href="/" className="btn btn-warning btn-sm">
//             Find your Trip
//           </a>
//         </div>
//       </div>
//       <div className="rating">
//         {/* <h4>User Rating </h4> */}

//       {/*  <div className="box1">
//           <img src={Logo} alt="My Image" height="50px" width="50px" />
//           <h5>User name </h5>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quaerat
//             id, itaque maxime dolorem harum laboriosam provident debitis cum non
//             sunt, placeat alias! Ad autem commodi debitis aliquam ex! Non.
//           </p>
//           <span>

//             <Rating
//               name="half-rating"
//               defaultValue={2.5}
//               precision={0.5}
//             />
//           </span>
//         </div>
//         <div className="box2">
//           <img src={Logo} alt="My Image" height="50px" width="50px" />
//           <h5>Mayur Adlak</h5>
//           <p>
//             Lorem ipsum dolor sit amet consecteturquisquam officia alias
//             mollitia. Ullam molestiae voluptate quos facere, explicabo nobis
//             molestias asperiores necessitatibus possimus quo. Reiciendis
//             voluptatibus doloribus obcaecati!
//           </p>
//           <span>

//             <Rating
//               name="half-rating"
//               defaultValue={2.5}
//               precision={0.5}
//             />
//           </span>
//         </div>
//         <div className="box3">
//           <img src={Logo} alt="My Image" height="50px" width="50px" />
//           <h5>New user</h5>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
//             ex est asperiores, cumque quaerat voluptatem inventore dolore
//             recusandae nostrum natus ea? Praesentium sapiente, tempore dolore
//             labore cum placeat voluptatem? Rerum.
//           </p>
//           <span>

//             <Rating
//               name="half-rating"
//               defaultValue={2.5}
//               precision={0.5}
//             />
//           </span>
//   </div>*
//       </div>
//   */}
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import Video from "../Images/myVideo.mp4";
import africa from "../Images/Africa.jpg";
import "./home.css";
const HomePage = () => {
  return (
    <>
      <div className="vidContainer">
        <div className="vidFilm">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, cum aperiam amet aut natus laudantium libero officiis
            corporis eum suscipit cumque distinctio vitae quia aliquam, est ex,
            consequuntur dolorem quisquam.
          </p>
        </div>
        <video src={Video} muted loop autoPlay></video>
      </div>
      <div className="Content">
        <h1>Continent</h1>
        <div className="continent">
          <div>
            <a href="#">Africa</a>
            <img src={africa} alt="" srcset="" />
          </div>
          <div>
            <a href="#">Asia</a>
            <img src={africa} alt="" srcset="" />
          </div>
          <div>
            <a href="#">Europe</a>
            <img src={africa} alt="" srcset="" />
          </div>
          <div>
            <a href="#">North America</a>
            <img src={africa} alt="" srcset="" />
          </div>
          <div>
            <a href="#">Middle East</a>
            <img src={africa} alt="" srcset="" />
          </div>
        </div>
        <h1>Trending</h1>
        <div className="trending">
          <div className="tcard">
            <img src={africa} alt="" srcset="" />
            <div className="tread">
              <button>
                <a href="#">Read More</a>
              </button>
            </div>
            <div className="tcontent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, animi.
              </p>
              <div className="cname">Africa</div>
            </div>
          </div>
          <div className="tcard">
            <img src={africa} alt="" srcset="" />
            <div className="tread">
              <button>
                <a href="#">Read More</a>
              </button>
            </div>
            <div className="tcontent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, animi.
              </p>
              <div className="cname">Africa</div>
            </div>
          </div>
          <div className="tcard">
            <img src={africa} alt="" srcset="" />
            <div className="tread">
              <button>
                <a href="#">Read More</a>
              </button>
            </div>
            <div className="tcontent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, animi.
              </p>
              <div className="cname">Africa</div>
            </div>
          </div>
          <div className="tcard">
            <img src={africa} alt="" srcset="" />
            <div className="tread">
              <button>
                <a href="#">Read More</a>
              </button>
            </div>
            <div className="tcontent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, animi.
              </p>
              <div className="cname">Africa</div>
            </div>
          </div>
        </div>
        <div className="inseperation">
          <div className="itext">
            <h1>What's Next</h1>
            <h1 className="ins">Inseperation</h1>
          </div>
          <div className="inav">
            <div>
              <i class="ri-book-open-fill"></i>
              <h2>OffBeats</h2>
            </div>
            <div>
              <i class="ri-map-pin-fill"></i>
              <h2>Location</h2>
            </div>
            <div>
              <i class="ri-sun-foggy-fill"></i>
              <h2>Island & Beaches</h2>
            </div>
            <div>
              <i class="ri-share-fill"></i>
              <h2>Roads & Trips</h2>
            </div>
            <div>
              <i class="ri-checkbox-blank-circle-line"></i>
              <h2>Adventures</h2>
            </div>
            <div>
              <i class="ri-earth-fill"></i>
              <h2>Globe</h2>
            </div>
          </div>
        </div>
        <div className="features">
          <h1>Features & Destinations</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="fcards">
            <div className="fcard">
              <div className="fimg">
                <img src={africa} alt="" srcset="" />
              </div>
              <p>Lorem Lorem</p>
              <button>Let's Go</button>
            </div>
            <div className="fcard">
              <div className="fimg">
                <img src={africa} alt="" srcset="" />
              </div>
              <p>Lorem Lorem</p>
              <button>Let's Go</button>
            </div>
            <div className="fcard">
              <div className="fimg">
                <img src={africa} alt="" srcset="" />
              </div>
              <p>Lorem Lorem</p>
              <button>Let's Go</button>
            </div>
            <div className="fcard">
              <div className="fimg">
                <img src={africa} alt="" srcset="" />
              </div>
              <p>Lorem Lorem</p>
              <button>Let's Go</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
