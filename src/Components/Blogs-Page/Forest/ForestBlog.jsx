import React from "react";
import forestImage from "../BlogsImage/Canada.jpg";
import BlogContent from "./BlogContent";
import BlogImage from "./BlogImage";
import "./forest.css";
export default function ForestBlog() {
  var content = `
  blanditiis nihil ullam ratione odit maiores libero eius dolor vel
  sequi officiis! Dicta debitis cum reprehenderit molestias et
  magnam! Aliquid hic odio esse iure rerum fugiat ducimus, at, enim,
  illum unde eaque consequuntur est sunt doloribus natus maxime
  voluptate. Eos accusamus quas veniam fugit nulla eveniet facere
  recusandae quidem praesentium adipisci ipsum in, earum incidunt
  consequuntur necessitatibus minima ipsa repudiandae, perferendis
  rerum illo. Doloribus atque fugit ratione magni aut harum ipsa
  consequuntur nam? Asperiores maxime assumenda repudiandae
  repellat, ut cum placeat odio sint dolorem consequuntur minima
  culpa consectetur a, voluptate porro maiores! Quas doloribus
  optio, error cupiditate facilis rerum fuga et, autem ab beatae
  quis dolor voluptas dignissimos aliquid ipsam odio voluptatibus
  modi similique temporibus. Eveniet?
  `;
  var title = "The Forest";
  var text = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
  aut at voluptatem, nemo esse similique, enim eligendi ea atque
  deleniti, harum laboriosam numquam saepe? Eos eius sapiente voluptas
  blanditiis iure nam mollitia ad iusto, ea in quam voluptate tenetur
  deserunt asperiores vero doloribus porro harum distinctio soluta!
  Accusamus ipsam fugit excepturi libero sapiente nesciunt officia
  enim, et nihil animi rerum? Vero, ratione! Sit, quo aperiam labore
  asperiores quasi.`;
  return (
    <div className="forest-blog">
      <div className="forest-blog-1">
        <span>travel blogs</span>

        <p className="blogtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis
          fugit magnam, explicabo at earum numquam corporis quo nulla quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          corrupti optio eligendi aspernatur? Unde dolorem, officia ullam, minus
          nam deleniti eos sed quod nemo beatae at, nesciunt earum ea nisi.
        </p>
      </div>
      <div className="forest-blog-2">
        <div className="forest-text">
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
        <div className="forest-img">
          <img src={forestImage} alt="My Image" />
        </div>
      </div>
      {/* <div className="forest-blog-3">
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
      </div> */}
      <BlogImage content={text} title={title} />
      <BlogContent content={content} Image={forestImage} title={title} />
      <BlogImage content={text} title={title} />
      {/* <div className="forest-blog-4">
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
        </div> */}
    </div>
  );
}
