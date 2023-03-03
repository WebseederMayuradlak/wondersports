import React from "react";
import faimilyImage from "../BlogsImage/Canada.jpg";
import Blog from "../Mountain/components/Blog";
import Info from "../Mountain/components/Info";
import "./faimily.css";
export default function FaimilyBlog() {
  var Faimily = {
    heading: "Faimily blog ",
    content:
      " uae nisi expedita ullam! Qui laudantium tempora, tempore provident temporibus exercitationem porro ducimus quis! Perspiciatis facere nam odit vitae similique dignissimos blanditiis, est magnam rem exercitationem, minus accusantium. Quos ea in sed molestias at hic minima tempora, nam enim dicta eum officiis reiciendis et consequatur blanditiis ad. Ab voluptatem magnam nulla facere nihil sunt, unde adipisci impedit dolore ea architecto, voluptate minima id quam deserunt explicabo praesentium illum eos voluptates, quaerat doloribus sit libero! Provident tenetur odio quibusdam odit maiores eius veritatis aspernatur maxime beatae soluta. Perferendis nesciunt dolorem recusandae quas dignissimos eius saepe autem, deleniti obcaecati vitae culpa inventore fuga alias.",
  };
  var FaimilyImg = {
    text: "start",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos incidunt quod. Ut sint id, pariatur maiores magnam ea dolor ipsa ab animi dolore accusamus ipsum nam laudantium atque quisquam alias odio eligendi excepturi, nulla laboriosam facilis. Veritatis labore velit cumque obcaecati est eveniet reiciendis alias qui doloribus fuga laborum harum sapiente, itaque id nobis natus eos modi provident tenetur, reprehenderit, possimus repellat quis nam. A aliquid in, pariatur possimus quae magni architecto doloremque sunt illo, soluta debitis iure! Recusandae, asperiores! Animi nisi tempora soluta. Voluptate enim soluta excepturi animi, quas, blanditiis reiciendis, incidunt earum labore laborum ad! Unde eligendi natus, mollitia quod omnis, corporis exercitationem alias voluptatum nemo deleniti, fuga dolorem rem neque odio hic sed tempore consequuntur est veritatis laudantium vero. Dignissimos impedit aspernatur officia, veritatis ducimus earum doloremque, exercitationem, non vel sunt quas a itaque natus quo sint optio? Dolores tenetur voluptatem suscipit quos eos placeat voluptas.",
    reverse: false,
    img: faimilyImage,
  };

  return (
    <>
      <div className="mountain">
        <Blog data={Faimily} />
        <Info data2={FaimilyImg} />
        <Blog data={Faimily} />
        <Info data2={FaimilyImg} />
        <Blog data={Faimily} />
        <Info data2={FaimilyImg} />
        <Blog data={Faimily} />
        <Info data2={FaimilyImg} />
      </div>
    </>
    // <div className="faimily-blog">
    //   <div className="faimily-blog-1">
    //     <span>travel blogs</span>

    //     <p className="blogtext">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis
    //       fugit magnam, explicabo at earum numquam corporis quo nulla quod.
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
    //       corrupti optio eligendi aspernatur? Unde dolorem, officia ullam, minus
    //       nam deleniti eos sed quod nemo beatae at, nesciunt earum ea nisi.
    //     </p>
    //   </div>
    //   <div className="faimily-blog-2">
    //     <div className="faimily-text">
    //       <h3>The faimily Blog </h3>
    //       <span>
    //         blanditiis nihil ullam ratione odit maiores libero eius dolor vel
    //         sequi officiis! Dicta debitis cum reprehenderit molestias et magnam!
    //         Aliquid hic odio esse iure rerum fugiat ducimus, at, enim, illum
    //         unde eaque consequuntur est sunt doloribus natus maxime voluptate.
    //         Eos accusamus quas veniam fugit nulla eveniet facere recusandae
    //         quidem praesentium adipisci ipsum in, earum incidunt consequuntur
    //         necessitatibus minima ipsa repudiandae, perferendis rerum illo.
    //         Doloribus atque fugit ratione magni aut harum ipsa consequuntur nam?
    //         Asperiores maxime assumenda repudiandae repellat, ut cum placeat
    //         odio sint dolorem consequuntur minima culpa consectetur a, voluptate
    //         porro maiores! Quas doloribus optio, error cupiditate facilis rerum
    //         fuga et, autem ab beatae quis dolor voluptas dignissimos aliquid
    //         ipsam odio voluptatibus modi similique temporibus. Eveniet?
    //       </span>
    //     </div>
    //     <div className="faimily-img">
    //       <img src={faimilyImage} alt="My Image" height="400px" width="500px" />
    //     </div>
    //   </div>
    //   <div className="faimily-blog-3">
    //     <div className="blog-text-3">
    //       <h3>The faimily Blog </h3>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    //         aut at voluptatem, nemo esse similique, enim eligendi ea atque
    //         deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
    //         blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
    //         deserunt asperiores vero doloribus porro harum distinctio soluta!
    //         Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
    //         enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
    //         asperiores quasi.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="faimily-blog-4">
    //     <div className="faimily-img-4">
    //       <img
    //         src={faimilyImage}
    //         alt="My Image"
    //         height="400px"
    //         width="500px"
    //         style={{ borderRadius: "10px" }}
    //       />
    //     </div>
    //     <div className="faimily-text-4">
    //       <h3>The faimily Blog </h3>
    //       <span>
    //         blanditiis nihil ullam ratione odit maiores libero eius dolor vel
    //         sequi officiis! Dicta debitis cum reprehenderit molestias et magnam!
    //         Aliquid hic odio esse iure rerum fugiat ducimus, at, enim, illum
    //         unde eaque consequuntur est sunt doloribus natus maxime voluptate.
    //         Eos accusamus quas veniam fugit nulla eveniet facere recusandae
    //         quidem praesentium adipisci ipsum in, earum incidunt consequuntur
    //         necessitatibus minima ipsa repudiandae, perferendis rerum illo.
    //         Doloribus atque fugit ratione magni aut harum ipsa consequuntur nam?
    //         Asperiores maxime assumenda repudiandae repellat, ut cum placeat
    //         odio sint dolorem consequuntur minima culpa consectetur a, voluptate
    //         porro maiores! Quas doloribus optio, error cupiditate facilis rerum
    //         fuga et, autem ab beatae quis dolor voluptas dignissimos aliquid
    //         ipsam odio voluptatibus modi similique temporibus. Eveniet?
    //       </span>
    //     </div>
    //   </div>
    //   <div className="faimily-blog-5">
    //     <div className="blog-text-5">
    //       <h3>The faimily Blog </h3>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    //         aut at voluptatem, nemo esse similique, enim eligendi ea atque
    //         deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
    //         blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
    //         deserunt asperiores vero doloribus porro harum distinctio soluta!
    //         Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
    //         enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
    //         asperiores quasi.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="faimily-blog-6">
    //     <div className="faimily-text-6">
    //       <h3>The faimily Blog </h3>
    //       <span>
    //         blanditiis nihil ullam ratione odit maiores libero eius dolor vel
    //         sequi officiis! Dicta debitis cum reprehenderit molestias et magnam!
    //         Aliquid hic odio esse iure rerum fugiat ducimus, at, enim, illum
    //         unde eaque consequuntur est sunt doloribus natus maxime voluptate.
    //         Eos accusamus quas veniam fugit nulla eveniet facere recusandae
    //         quidem praesentium adipisci ipsum in, earum incidunt consequuntur
    //         necessitatibus minima ipsa repudiandae, perferendis rerum illo.
    //         Doloribus atque fugit ratione magni aut harum ipsa consequuntur nam?
    //         Asperiores maxime assumenda repudiandae repellat, ut cum placeat
    //         odio sint dolorem consequuntur minima culpa consectetur a, voluptate
    //         porro maiores! Quas doloribus optio, error cupiditate facilis rerum
    //         fuga et, autem ab beatae quis dolor voluptas dignissimos aliquid
    //         ipsam odio voluptatibus modi similique temporibus. Eveniet?
    //       </span>
    //     </div>
    //     <div className="faimily-img-6">
    //       <img
    //         src={faimilyImage}
    //         alt="My Image"
    //         height="400px"
    //         width="500px"
    //         style={{ borderRadius: "10px" }}
    //       />
    //     </div>
    //   </div>
    //   <div className="faimily-blog-7">
    //     <div className="blog-text-7">
    //       <h3>The faimily Blog </h3>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    //         aut at voluptatem, nemo esse similique, enim eligendi ea atque
    //         deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
    //         blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
    //         deserunt asperiores vero doloribus porro harum distinctio soluta!
    //         Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
    //         enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
    //         asperiores quasi.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="faimily-blog-6">
    //     <div className="faimily-text-6">
    //       <h3>The faimily Blog </h3>
    //       <span>
    //         blanditiis nihil ullam ratione odit maiores libero eius dolor vel
    //         sequi officiis! Dicta debitis cum reprehenderit molestias et magnam!
    //         Aliquid hic odio esse iure rerum fugiat ducimus, at, enim, illum
    //         unde eaque consequuntur est sunt doloribus natus maxime voluptate.
    //         Eos accusamus quas veniam fugit nulla eveniet facere recusandae
    //         quidem praesentium adipisci ipsum in, earum incidunt consequuntur
    //         necessitatibus minima ipsa repudiandae, perferendis rerum illo.
    //         Doloribus atque fugit ratione magni aut harum ipsa consequuntur nam?
    //         Asperiores maxime assumenda repudiandae repellat, ut cum placeat
    //         odio sint dolorem consequuntur minima culpa consectetur a, voluptate
    //         porro maiores! Quas doloribus optio, error cupiditate facilis rerum
    //         fuga et, autem ab beatae quis dolor voluptas dignissimos aliquid
    //         ipsam odio voluptatibus modi similique temporibus. Eveniet?
    //       </span>
    //     </div>
    //     <div className="faimily-img-6">
    //       <img
    //         src={faimilyImage}
    //         alt="My Image"
    //         height="400px"
    //         width="500px"
    //         style={{ borderRadius: "10px" }}
    //       />
    //     </div>
    //   </div>
    //   <div className="faimily-blog-7">
    //     <div className="blog-text-7">
    //       <h3>The faimily Blog </h3>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    //         aut at voluptatem, nemo esse similique, enim eligendi ea atque
    //         deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
    //         blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
    //         deserunt asperiores vero doloribus porro harum distinctio soluta!
    //         Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
    //         enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
    //         asperiores quasi.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
