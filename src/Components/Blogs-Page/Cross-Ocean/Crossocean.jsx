import React from "react";
import crossImage from "../BlogsImage/Canada.jpg";
import Blog from "../Mountain/components/Blog";
import Info from "../Mountain/components/Info";
import "./cross.css";
export default function Crossocean() {
  let cross = {
    heading: "Cross Ocean Blog ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt porro sint inventore explicabo magnam culpa reiciendis obcaecati magni hic sapiente. Totam suscipit dolor libero obcaecati asperiores, natus esse incidunt quibusdam numquam iusto vero molestiae ad consectetur debitis quasi deleniti quas possimus fugit consequuntur magni. Debitis nesciunt officia maxime sed obcaecati amet non atque est? Veritatis ex, quia, voluptates maxime, inventore iure sint aliquam amet aliquid sit optio quis illum quas! Aliquam minus perferendis, corrupti, possimus unde exercitationem voluptates eligendi deleniti, facilis aliquid perspiciatis. Aut quibusdam sunt tempora perferendis earum aliquid sequi deleniti! Dolor, repellendus harum sapiente possimus culpa in ipsum.",
  };
  let crossImg = {
    reverse: true,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt porro sint inventore explicabo magnam culpa reiciendis obcaecati magni hic sapiente. Totam suscipit dolor libero obcaecati asperiores, natus esse incidunt quibusdam numquam iusto vero molestiae ad consectetur debitis quasi deleniti quas possimus fugit consequuntur magni. Debitis nesciunt officia maxime sed obcaecati amet non atque est? Veritatis ex, quia, voluptates maxime, inventore iure sint aliquam amet aliquid sit optio quis illum quas! Aliquam minus perferendis, corrupti, possimus unde exercitationem voluptates eligendi deleniti, facilis aliquid perspiciatis. Aut quibusdam sunt tempora perferendis earum aliquid sequi deleniti! Dolor, repellendus harum sapiente possimus culpa in ipsum.",
    text: "end",
    img: crossImage,
  };
  return (
    <>
      <div className="mountain">
        <Blog data={cross} />
        <Info data2={crossImg} />
      </div>
      {/*     
    <div className="cross-blog">
      <div className="cross-blog-1">
        <span>Cross blogs</span>

        <p className="blogtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis
          fugit magnam, explicabo at earum numquam corporis quo nulla quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          corrupti optio eligendi aspernatur? Unde dolorem, officia ullam, minus
          nam deleniti eos sed quod nemo beatae at, nesciunt earum ea nisi.
        </p>
      </div>
      <div className="cross-blog-2">
        <div className="cross-text">
          <h3>The cross Blog </h3>
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
        <div className="cross-img">
          <img src={crossImage} alt="My Image" height="400px" width="500px" />
        </div>
      </div>
      <div className="cross-blog-3">
        <div className="blog-text-3">
          <h3>The cross Blog </h3>
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
      <div className="cross-blog-4">
        <div className="cross-img-4">
          <img
            src={crossImage}
            alt="My Image"
            height="400px"
            width="500px"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="cross-text-4">
          <h3>The cross Blog </h3>
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
      <div className="cross-blog-5">
        <div className="blog-text-5">
          <h3>The cross Blog </h3>
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
      <div className="cross-blog-6">
        <div className="cross-text-6">
          <h3>The cross Blog </h3>
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
        <div className="cross-img-6">
          <img
            src={crossImage}
            alt="My Image"
            height="400px"
            width="500px"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className="cross-blog-7">
        <div className="blog-text-7">
          <h3>The cross Blog </h3>
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
      <div className="cross-blog-6">
        <div className="cross-text-6">
          <h3>The cross Blog </h3>
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
        <div className="cross-img-6">
          <img
            src={crossImage}
            alt="My Image"
            height="400px"
            width="500px"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className="cross-blog-7">
        <div className="blog-text-7">
          <h3>The cross Blog </h3>
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
    </div> */}
    </>
  );
}
