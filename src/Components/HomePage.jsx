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
