import React from "react";
import "./summer.css";
import Image01 from "../CountriesImage/Image1.jpeg";
import { Button } from "@mui/material";
import Image02 from "../CountriesImage/Image1.jpeg";
import Image03 from "../CountriesImage/6.jpeg";
import CollapseTour from "../CollapseTour";
const SummertourGuide = () => {
  return (
    <>
      <div className="summer-guide">
        <div className="summer-page">
          <div className="summer-text">
            <span>Summer - Tour Guide </span>
            <h3>
              Prepare for The <br /> Advanture
            </h3>{" "}
            <br />
            <Button
              variant="contained"
              color="warning"
              size="large"
              href=""
              sx={{ width: "200px", height: "50px" }}
            >
              Let' Go
            </Button>
          </div>
        </div>
        <div className="summer-guide-1">
          <div className="summer-guide-text-1">
            <span>Get started </span>
            <h3>
              What type of Traveller <br /> are You ?
            </h3>
            <p>
              {" "}
              Eos in quo quod est, quis recusandae neque illum vel, explicabo
              dolores repellendus atque enim eveniet perspiciatis eligendi?
              Placeat asperiores dignissimos assumenda, dolorem corporis alias
              culpa deserunt aperiam? Accusamus, facilis? Repudiandae nisi
              distinctio pariatur nostrum magnam dolorem dolores necessitatibus
              a enim? Nemo obcaecati minus laudantium debitis amet placeat
              molestias fugit incidunt officia unde dignissimos itaque ex quod,
              ea quidem. Eum!
            </p>
          </div>
          <div className="summer-guide-img-1">
            <img src={Image01} alt="My Image" height="400px" width="500px" />
          </div>
          <div className="summer-guide-img-2">
            <img src={Image02} alt="My Image" height="400px" width="500px" />
          </div>
          <div className="summer-guide-text-2">
            <span>Where you Go this Way </span>
            <h3>
              Pciking The Right way <br /> is and{" "}
            </h3>
            <p>
              {" "}
              Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Eligendi, sit? amet consectetur adipisicing
              elit. Dolorem asperiores ipsa vitae, quidem ipsum corrupti maxime
              repudiandae mollitia aut, sint, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusantium adipisci illo excepturi
              vitae omnis. Consectetur possimus incidunt quod in facere! veniam
              earum odit consequuntur vel. Velit similique rem aperiam deserunt.
            </p>
          </div>
          <div className="summer-guide-text-3">
            <span>Know the country</span>
            <h3>
              Understands the Locals and their <br /> Tradition{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem a
              sequi itaque quae quod doloribus nisi laudantium nemo? Asperiores
              nam quidem saepe debitis delectus, itaque necessitatibus sed
              accusantium ad in. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam blanditiis aliquid delectus obcaecati
              beatae ab dolorem corporis nisi amet veniam?
            </p>
          </div>
          <div className="summer-guide-img-3">
            <img src={Image02} alt="My Image" height="400px" width="500px" />
          </div>
          <div className="summer-guide-img-4">
            <img src={Image01} height="400px" width="500px" alt="My Image" />
          </div>
          <div className="summer-guide-text-4">
            <span> Wander Without Reason </span>
            <h3>
              {" "}
              Explore the nature with <br /> Wandersport{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque et
              recusandae reprehenderit omnis voluptatem pariatur odit, adipisci
              est aut aperiam ea architecto ullam iure? Odio maxime accusamus
              fuga accusantium dignissimos dolor ducimus. Sapiente, nostrum
              enim, error vitae dolorem obcaecati reprehenderit quisquam,
              perspiciatis quae tempora distinctio architecto saepe! Aspernatur,
              harum ut
            </p>
          </div>
          <div className="summer-guide-img-5">
            <div className="summer-mytext">
              <h3> For Travel Experience Book Online Today</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Maxime vel
                ratione est adipisci pariatur culpa, earum veniam suscipit
                itaque expedita. Porro, nobis excepturi. Maiores beatae amet,
                eos earum vel saepe quas facere impedit magnam libero expedita
                fuga officia molestias. Reiciendis, commodi officia!
              </p>
              <a href="/">See Tour </a>
            </div>
          </div>
          <div className="summer-guide-text">
            <span>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi, saepe. adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quos?
              Eaque impedit esse fuga repudiandae expedita. Error accusantium
              quo optio temporibus expedita.
            </p>
            <a href="/">Explore </a>
          </div>
        </div>

        {/* <div className="summer-content">
          <div className="summer-content-1">
            <img src={Image03} alt="My Image" height="450px" width="380px" />
          </div>
          <div className="summer-content-2">
            <div className="summer-content2-img-1">
              <img src={Image03} alt="My Image" height="450px" width="380px" />
            </div>
            <div className="summer-content2-img-2">
              <img src={Image03} alt="My Image" height="270px" width="380px" />
            </div>
            &nbsp;
          </div>
          <div className="summer-content-3">
            <div className="summer-content3-img-1">
              <img src={Image03} alt="My Image" height="450px" width="380px" />
            </div>{" "}
            &nbsp;
            <div className="summer-content3-img-2">
              <img src={Image03} alt="My Image" height="270px" width="380px" />
            </div>
          </div>
          <div className="summer-content-4">
            <img src={Image03} alt="My Image" height="450px" width="380px" />
          </div>
        </div> */}
        <CollapseTour />
      </div>
    </>
  );
};
export default SummertourGuide;
