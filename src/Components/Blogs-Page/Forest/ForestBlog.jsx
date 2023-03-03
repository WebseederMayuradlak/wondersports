import React from "react";
import forestImage from "../BlogsImage/Canada.jpg";
import Blog from "../Mountain/components/Blog";
import Info from "../Mountain/components/Info";
import "./forest.css";
export default function ForestBlog() {
  var Forest = {
    heading: "Forest Blog ",

    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque eligendi dignissimos aperiam laboriosam reprehenderit, dolore sunt perspiciatis atque labore iusto libero sapiente architecto alias nemo amet delectus illo voluptatem. Fugit amet dicta nesciunt velit. Placeat iste, dolorem, sunt consequuntur qui adipisci eveniet in deleniti sequi molestiae nobis officia quidem beatae unde recusandae nemo voluptatem voluptas rerum nisi repellendus minima, laboriosam nam? Cumque nobis voluptas sapiente necessitatibus magni illo nisi.",
  };
  var Fimg = {
    text: "end",
    reverse: true,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum reiciendis recusandae iste, aperiam, illo ut nemo nesciunt odit iusto eos odio earum quos voluptatum suscipit, dolorum nisi? Blanditiis eligendi magni ex aut vitae. Saepe nam velit doloribus ratione eligendi recusandae incidunt ex placeat enim adipisci, accusamus inventore, dolore deserunt unde minima quibusdam exercitationem. Blanditiis eius odit at libero minus, quam corrupti fugit veniam iusto, ex illum dolor? Nesciunt esse rerum quos illo officia sequi beatae ipsa sint deleniti optio recusandae consequatur voluptas dolor atque, repellat dolorum asperiores a fugiat, molestiae porro laborum! Maxime delectus quas voluptates iusto suscipit aliquam quod minima fugiat nam neque, ad ipsa beatae? Eveniet sint vero vel saepe error repellendus repudiandae voluptatibus dolore accusamus. Beatae veniam deserunt vel repellendus labore dolorum assumenda, cupiditate consequuntur itaque. Debitis fugit quaerat mollitia voluptatibus recusandae quos tempore molestias architecto quis earum commodi ab dolores, possimus, dicta sed ad soluta!",
    img: forestImage,
  };
  return (
    <>
      <div className="mountain">
        <Blog data={Forest} />
        <Info data2={Fimg} />
        <Blog data={Forest} />
        <Info data2={Fimg} />
        <Blog data={Forest} />
        <Info data2={Fimg} />
        <Blog data={Forest} />
        <Info data2={Fimg} />
      </div>

      {/*  // <div className="forest-blog">
    //   <div className="forest-blog-1">
    //     <span>travel blogs</span>

    //     <p className="blogtext">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis
    //       fugit magnam, explicabo at earum numquam corporis quo nulla quod.
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
    //       corrupti optio eligendi aspernatur? Unde dolorem, officia ullam, minus
    //       nam deleniti eos sed quod nemo beatae at, nesciunt earum ea nisi.
    //     </p>
    //   </div>
    //   <div className="forest-blog-2">
    //     <div className="forest-text">
    //       <h3>The forest Blog </h3>
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
    //     <div className="forest-img">
    //       <img src={forestImage} alt="My Image" />
    //     </div>
    //   </div>
       <div className="forest-blog-3">
        <div className="blog-text-3">
          <h3>The forest Blog </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aut at voluptatem, nemo esse similique, enim eligendi ea atque
            deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
            blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
            deserunt asperiores vero doloribus porro harum distinctio soluta!
            Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
            enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
            asperiores quasi.
          </p>
        </div>
      </div> 

      <div className="forest-blog-4">
        <div className="forest-img-4">
          <img
            src={forestImage}
            alt="My Image"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="forest-text-4">
          <h3>The forest Blog </h3>
          <span>
            blanditiis nihil ullam ratione odit maiores libero eius dolor vel
            sequi officiis! Dicta debitis cum reprehenderit molestias et magnam!
            Aliquid hic odio esse iure rerum fugiat ducimus, at, enim, illum
            unde eaque consequuntur est sunt doloribus natus maxime voluptate.
            Eos accusamus quas veniam fugit nulla eveniet facere recusandae
            quidem praesentium adipisci ipsum in, earum incidunt consequuntur
            necessitatibus minima ipsa repudiandae, perferendis rerum illo.
            Doloribus atque fugit ratione magni aut harum ipsa consequuntur nam?
            Asperiores maxime assumenda repudiandae repellat, ut cum placeat
            odio sint dolorem consequuntur minima culpa consectetur a, voluptate
            porro maiores! Quas doloribus optio, error cupiditate facilis rerum
            fuga et, autem ab beatae quis dolor voluptas dignissimos aliquid
            ipsam odio voluptatibus modi similique temporibus. Eveniet?
          </span>
        </div>
      </div>
      <div className="forest-blog-5">
        <div className="blog-text-5">
          <h3>The forest Blog </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aut at voluptatem, nemo esse similique, enim eligendi ea atque
            deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
            blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
            deserunt asperiores vero doloribus porro harum distinctio soluta!
            Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
            enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
            asperiores quasi.
          </p>
        </div>
      </div>
      <div className="forest-blog-6">
        <div className="forest-text-6">
          <h3>The forest Blog </h3>
          <span>
            blanditiis nihil ullam ratione odit maiores libero eius dolor vel
            sequi officiis! Dicta debitis cum reprehenderit molestias et magnam!
            Aliquid hic odio esse iure rerum fugiat ducimus, at, enim, illum
            unde eaque consequuntur est sunt doloribus natus maxime voluptate.
            Eos accusamus quas veniam fugit nulla eveniet facere recusandae
            quidem praesentium adipisci ipsum in, earum incidunt consequuntur
            necessitatibus minima ipsa repudiandae, perferendis rerum illo.
            Doloribus atque fugit ratione magni aut harum ipsa consequuntur nam?
            Asperiores maxime assumenda repudiandae repellat, ut cum placeat
            odio sint dolorem consequuntur minima culpa consectetur a, voluptate
            porro maiores! Quas doloribus optio, error cupiditate facilis rerum
            fuga et, autem ab beatae quis dolor voluptas dignissimos aliquid
            ipsam odio voluptatibus modi similique temporibus. Eveniet?
          </span>
        </div>
        <div className="forest-img-6">
          <img
            src={forestImage}
            alt="My Image"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className="forest-blog-7">
        <div className="blog-text-7">
          <h3>The forest Blog </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aut at voluptatem, nemo esse similique, enim eligendi ea atque
            deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
            blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
            deserunt asperiores vero doloribus porro harum distinctio soluta!
            Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
            enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
            asperiores quasi.
          </p>
        </div>
      </div>
      <div className="forest-blog-6">
        <div className="forest-text-6">
          <h3>The forest Blog </h3>
          <span>
            blanditiis nihil ullam ratione odit maiores libero eius dolor vel
            sequi officiis! Dicta debitis cum reprehenderit molestias et magnam!
            Aliquid hic odio esse iure rerum fugiat ducimus, at, enim, illum
            unde eaque consequuntur est sunt doloribus natus maxime voluptate.
            Eos accusamus quas veniam fugit nulla eveniet facere recusandae
            quidem praesentium adipisci ipsum in, earum incidunt consequuntur
            necessitatibus minima ipsa repudiandae, perferendis rerum illo.
            Doloribus atque fugit ratione magni aut harum ipsa consequuntur nam?
            Asperiores maxime assumenda repudiandae repellat, ut cum placeat
            odio sint dolorem consequuntur minima culpa consectetur a, voluptate
            porro maiores! Quas doloribus optio, error cupiditate facilis rerum
            fuga et, autem ab beatae quis dolor voluptas dignissimos aliquid
            ipsam odio voluptatibus modi similique temporibus. Eveniet?
          </span>
        </div>
        <div className="forest-img-6">
          <img
            src={forestImage}
            alt="My Image"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className="forest-blog-7">
        <div className="blog-text-7">
          <h3>The forest Blog </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aut at voluptatem, nemo esse similique, enim eligendi ea atque
            deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
            blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
            deserunt asperiores vero doloribus porro harum distinctio soluta!
            Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
            enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
            asperiores quasi.
          </p>
        </div> 
    */}
    </>
  );
}
