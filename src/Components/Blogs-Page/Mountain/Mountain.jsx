import React from "react";
import "./Mountain.css";
import Icemountain from "../BlogsImage/icemountaine.jpg";
import Blog from "./components/Blog";
import Info from "./components/Info";
import MountImage from "../BlogsImage/mount1.jpg";
const Mountain = () => {
  let data = {
    heading: "the adventure",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo numquam, fugiat rerum quod nulla esse deleniti itaque ullam, provident dolorem quasi ea hic reprehenderit mollitia fugit, impedit optio. Tempora, ut.",
  };
  let data2 = {
    img: MountImage,
    reverse: false,
    text: "end",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus cupiditate quae architecto aspernatur facere dolores! Delectus corrupti perferendis ipsa modi voluptate, eligendi sed nobis quod at, fugiat, aliquid odit. Maxime in aspernatur veritatis dolores corrupti, recusandae laudantium laborum corporis tempora. Modi aliquid temporibus exercitationem. Doloribus tempora architecto perferendis sed adipisci, voluptates excepturi quas asperiores atque dolore quia error similique praesentium laudantium sint eos culpa! Deleniti eveniet facere impedit maxime id, modi vero incidunt asperiores atque ut omnis eius iste, suscipit ad nobis culpa exercitationem aliquid, officia distinctio vel provident quam dolor. Quas neque asperiores, amet ipsum magni vel dolores maxime nisi inventore obcaecati nam earum hic sit, totam accusantium in aliquam porro perspiciatis excepturi velit provident voluptatem veniam, aspernatur optio. Unde est esse quae aut consequuntur accusamus libero minima ducimus, dignissimos harum? Porro aspernatur error perferendis qui, saepe iusto totam maiores, vel aliquid voluptate natus voluptates? Et, provident dolor.",
  };
  return (
    <>
      <div className="mountain">
        <Blog data={data} />
        <Info data2={data2} />
        <Blog data={data} />
        <Info data2={data2} />
        <Blog data={data} />
        <Info data2={data2} />
      </div>
    </>
  );
};
export default Mountain;
