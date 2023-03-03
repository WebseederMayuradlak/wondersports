// import { Info } from "@mui/icons-material";
import React from "react";
import CultureImage from "../BlogsImage/Canada.jpg";
import Blog from "../Mountain/components/Blog";
import Info from "../Mountain/components/Info";
import "./culture.css";
export default function CultureBlog() {
  var Culture = {
    heading: "Culture Blog Page",
    content:
      "sed fugiat nam itaque eveniet voluptas dolor at? Labore, natus eligendi dolorum nemo et fuga tempora at reiciendis laboriosam ex blanditiis magnam atque! Dignissimos deleniti nihil earum consectetur eos labore sit soluta itaque aliquam? Distinctio, dolor, facere maiores officia dignissimos odit eum doloremque nobis at amet, laboriosam similique libero et impedit inventore explicabo quia reprehenderit in vel consequatur sequi ab dolorem. Consequuntur beatae molestias unde facere! Accusamus ducimus minus, aspernatur amet distinctio, blanditiis autem vitae laborum, esse in officiis corporis! Nulla facilis illo illum sequi.",
  };
  var cultureblog = {
    img: CultureImage,
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis voluptatum veritatis rem. Aspernatur veniam totam, accusamus harum libero nulla blanditiis enim! Quas aliquid commodi provident, autem cumque esse fugiat earum possimus. Facere consequatur, nemo quidem atque quod a ipsam ipsum quaerat magnam itaque nihil quae soluta tempora autem nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic eum natus perferendis? Ea id recusandae fugiat at tempore voluptas voluptatum hic, minima repellendus fugit quod, et illum amet earum quisquam, accusantium aperiam qui distinctio dignissimos sed. Eum, ad perferendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam neque ut minima quos, fugiat ipsam quisquam nisi ad maxime, aperiam laborum illum, distinctio temporibus? Incidunt facere voluptatem, veritatis sed vel sequi maxime dolorum exercitationem? Consectetur suscipit velit mollitia tenetur esse qui reprehenderit facilis deleniti excepturi nihil aliquid, autem officiis possimus praesentium, ducimus debitis? Commodi pariatur ipsam perspiciatis, expedita distinctio illo tenetur hic repudiandae nisi magni adipisci modi debitis harum similique nesciunt excepturi maiores voluptates animi earum non aperiam nobis aut vero praesentium. Quidem animi blanditiis non ab cupiditate facilis inventore qui itaque. Est omnis ullam, libero iste sit consequuntur sunt.",
    text: "end",
    reverse: false,
  };
  return (
    <>
      <div className="mountain">
        <Blog data={Culture} />
        <Info data2={cultureblog} />
        <Blog data={Culture} />
        <Info data2={cultureblog} />
        <Blog data={Culture} />
        <Info data2={cultureblog} />
      </div>
    </>
    // <div className="culture-blog">
    //   <div className="culture-blog-1">
    //     <span>travel blogs</span>

    //     <p className="blogtext">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis
    //       fugit magnam, explicabo at earum numquam corporis quo nulla quod.
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
    //       corrupti optio eligendi aspernatur? Unde dolorem, officia ullam, minus
    //       nam deleniti eos sed quod nemo beatae at, nesciunt earum ea nisi.
    //     </p>
    //   </div>
    //   <div className="culture-blog-2">
    //     <div className="culture-text">
    //       <h3>The Culture Blog </h3>
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
    //     <div className="culture-img">
    //       <img src={CultureImage} alt="My Image" height="400px" width="500px" />
    //     </div>
    //   </div>
    //   <div className="culture-blog-3">
    //     <div className="blog-text-3">
    //       <h3>The Culture Blog </h3>
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
    //   <div className="culture-blog-4">
    //     <div className="culture-img-4">
    //       <img
    //         src={CultureImage}
    //         alt="My Image"
    //         height="400px"
    //         width="500px"
    //         style={{ borderRadius: "10px" }}
    //       />
    //     </div>
    //     <div className="culture-text-4">
    //       <h3>The Culture Blog </h3>
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
    //   <div className="culture-blog-5">
    //     <div className="blog-text-5">
    //       <h3>The Culture Blog </h3>
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
    //   <div className="culture-blog-6">
    //     <div className="culture-text-6">
    //       <h3>The Culture Blog </h3>
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
    //     <div className="culture-img-6">
    //       <img
    //         src={CultureImage}
    //         alt="My Image"
    //         height="400px"
    //         width="500px"
    //         style={{ borderRadius: "10px" }}
    //       />
    //     </div>
    //   </div>
    //   <div className="culture-blog-7">
    //     <div className="blog-text-7">
    //       <h3>The Culture Blog </h3>
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
    //   <div className="culture-blog-6">
    //     <div className="culture-text-6">
    //       <h3>The Culture Blog </h3>
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
    //     <div className="culture-img-6">
    //       <img
    //         src={CultureImage}
    //         alt="My Image"
    //         height="400px"
    //         width="500px"
    //         style={{ borderRadius: "10px" }}
    //       />
    //     </div>
    //   </div>
    //   <div className="culture-blog-7">
    //     <div className="blog-text-7">
    //       <h3>The Culture Blog </h3>
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
