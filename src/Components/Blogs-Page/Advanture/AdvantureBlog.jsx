import React from "react";
// import "./advanture.css";
// import "../Mountain/Mountain.css";
import Icemountain from "../BlogsImage/icemountaine.jpg";
import MountImage from "../BlogsImage/mount1.jpg";
import Blog from "../Mountain/components/Blog";
import Info from "../Mountain/components/Info";
export default function AdvantureBlog() {
  var data = {
    heading: "Advanture Blog ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam molestias, omnis officia blanditiis excepturi modi deleniti, dicta est a tempore pariatur explicabo aspernatur dolorem. Tempore dolorem atque ratione nam officia placeat quod nesciunt, non, doloremque amet, dolor animi dolores nobis at alias expedita facilis aut commodi vel! Aperiam facilis nulla asperiores similique et libero reprehenderit repudiandae iste. Cupiditate labore minima molestiae alias animi vitae consequatur soluta voluptatum voluptas natus et, optio ut esse quidem culpa aliquid cumque ad iusto maxime illum. Beatae nam possimus, veniam voluptatibus sunt blanditiis. Perspiciatis adipisci fugit repellat vero nemo doloribus iusto tempore quam labore!",
  };
  let data2 = {
    img: Icemountain,
    text: "end",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis vero voluptas doloribus rerum? Accusamus recusandae, ex, voluptatum voluptatem ipsa illum nesciunt perferendis animi autem sapiente optio eaque quasi tempora! Obcaecati, minima? Dolorem reprehenderit nobis at, voluptatem in, id odit quia eligendi sequi beatae aut accusamus unde nisi animi magnam nesciunt? Facere, enim assumenda! Corporis dignissimos, eius quae placeat animi praesentium amet minima! Magnam aspernatur eligendi eos dolorem earum laboriosam vitae iste aliquam nihil ipsum, repellat quod? Laudantium beatae sint ad numquam provident, quo modi debitis velit, consequatur, labore deleniti perspiciatis ipsam officia veritatis recusandae quam! Architecto temporibus eaque ipsam.    content: ",
    reverse: false,
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
        <Blog data={data} />
        <Info data2={data2} />
      </div>
      {/* <div className="blogs-page">
        <div className="blogs-page-1">
          <span>Advanture blogs</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis
            fugit magnam, explicabo at earum numquam corporis quo nulla quod.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            corrupti optio eligendi aspernatur? Unde dolorem, officia ullam,
            minus nam deleniti eos sed quod nemo beatae at, nesciunt earum ea
            nisi.
          </p>
        </div>
      </div>
      <div className="blogs-page-2">
        <div className="text-blogs-2">
          <p>the mountains</p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, porro quasi recusandae, exercitationem accusamus
            corrupti doloribus illum mollitia nulla voluptatem rem possimus ab
            cum numquam dignissimos cupiditate aliquam ea sed? Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Dignissimos quibusdam ipsa
            labore asperiores nisi libero suscipit laborum blanditiis eum sequi!
            Magni consequatur, perspiciatis fuga molestias reiciendis omnis.
            Rem, accusamus fugiat? Assumenda quaerat asperiores officiis,
            doloribus distinctio, dolore unde delectus ullam voluptatum
            cupiditate, neque autem itaque eius nemo perferendis pariatur.
            Necessitatibus id quaerat voluptas voluptates ut ex provident?
            Nostrum accusantium, veniam quia rerum sed aperiam consequuntur
            optio cum. Tenetur fugit labore, cumque illo sequi amet. Iure et
            esse odio sit sint neque eius asperiores suscipit dignissimos, amet
            nobis temporibus voluptatum soluta sapiente mollitia inventore! Eius
            neque, eligendi doloremque cumque vitae nam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Totam optio nemo dolorum est
            reprehenderit ipsum repellendus, ipsam eius quibusdam vitae officiis
            eligendi magni incidunt tenetur, ut quaerat nostrum quo temporibus?
            Consequuntur veniam, tempora quae nesciunt deserunt facere nemo
            magnam nihil nobis corrupti obcaecati assumenda aliquid atque
            ratione expedita. Molestiae, veritatis.{" "}
          </span>
        </div>
        <div className="image-blogs-2">
          <img src={Icemountain} alt="My Image" />
        </div>
        <div className="blogs-page-4">
          <div className="text-blogs-4">
            <span>trolltunga</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quis fugit magnam, explicabo at earum numquam corporis quo nulla
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi corrupti optio eligendi aspernatur? Unde dolorem, officia
              ullam, minus nam deleniti eos sed quod nemo beatae at, nesciunt
              earum ea nisi.
            </p>
          </div>
        </div>
        <div className="blogs-page-3">
          <div className="image-blogs-3">
            <img src={Icemountain} alt="My Image" />
          </div>
          <div className="text-blogs-3">
            <p> newport beach </p>
            <span>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium, porro quasi recusandae, exercitationem accusamus
              corrupti doloribus illum mollitia nulla voluptatem rem possimus ab
              cum numquam dignissimos cupiditate aliquam ea sed? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dignissimos
              quibusdam ipsa labore asperiores nisi libero suscipit laborum
              blanditiis eum sequi! Magni consequatur, perspiciatis fuga
              molestias reiciendis omnis. Rem, accusamus fugiat? Assumenda
              quaerat asperiores officiis, doloribus distinctio, dolore unde
              delectus ullam voluptatum cupiditate, neque autem itaque eius nemo
              perferendis pariatur. Necessitatibus id quaerat voluptas
              voluptates ut ex provident? Nostrum accusantium, veniam quia rerum
              sed aperiam consequuntur optio cum. Tenetur fugit labore, cumque
              illo sequi amet. Iure et esse odio sit sint neque eius asperiores
              suscipit dignissimos, amet nobis temporibus voluptatum soluta
              sapiente mollitia inventore! Eius neque, eligendi doloremque
              cumque vitae nam. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Totam optio nemo dolorum est reprehenderit ipsum
              repellendus, ipsam eius quibusdam vitae officiis eligendi magni
              incidunt tenetur, ut quaerat nostrum quo temporibus? Consequuntur
              veniam, tempora quae nesciunt deserunt facere nemo magnam nihil
              nobis corrupti obcaecati assumenda aliquid atque ratione expedita.
              Molestiae, veritatis.
            </span>
          </div>
        </div>
        <div className="blogs-page-6">
          <div className="text-blogs-6">
            <p>Statue of Liberty</p>
            <span>
              {" "}
              Visiting Liberty Island is one of the most rewarding experiences
              of any trip to decade, the National Park Service has implemented a
              reservation system. This is very different from the way past
              generations once accessed the Statue of Liberty. The National Park
              Service strongly recommends making advanced ticket reservations.
              Reservations secured far enough in advance allows visitors to
              select their desired level of access; eliminating the need to wait
              in line to purchase tickets.
            </span>
          </div>
        </div>
        <div className="blogs-page-5">
          <div className="text-blogs-5">
            <p>The Advanture </p>
            <span>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              explicabo magni, dicta dolore dolorum dolorem, aut assumenda
              sapiente facere provident necessitatibus. Quisquam voluptate
              cumque quaerat neque error nam quidem quo eveniet expedita
              debitis, perferendis enim eius qui autem dolores veniam a animi!
              Perferendis aperiam reiciendis eum officia quaerat praesentium
              illum dicta minima quidem pariatur atque, eius molestias amet
              quisquam blanditiis veritatis aliquid culpa. Eos fugit, animi
              rerum velit cumque culpa vero laborum iusto eaque, est dolorum
              neque recusandae officiis asperiores reprehenderit. Totam delectus
              a voluptatum magnam tempore officia expedita. Dolor, repellat
              nobis facere laudantium eaque omnis vitae soluta harum, quod,
              dolorem ut labore. Consequuntur autem praesentium officiis, natus
              aperiam, ullam nobis sapiente voluptatibus, animi ad error
              similique possimus sit vitae magni ipsam! Aliquid id, nulla nobis
              consectetur consequatur provident ipsum distinctio optio sequi
              exercitationem voluptates? Aliquid similique dolorum soluta
              assumenda adipisci id quas? Ipsum eaque eius hic modi mollitia
              odio.
            </span>
          </div>
          <div className="image-blogs-5">
            <img src={Icemountain} alt="My Image" />
          </div>
        </div>
        <div className="blogs-page-7">
          <div className="text-blogs-7">
            <p> Lorem ipsum dolor </p>
            <span>
              Lorem expedita eius. Nulla perspiciatis ea, a aspernatur
              voluptatum saepe eveniet. Tempore, harum. Consequuntur debitis,
              corrupti placeat cupiditate, perferendis obcaecati laboriosam
              magni omnis rem unde ipsum vitae reiciendis harum illo minus rerum
              repellendus? Dolorem, placeat! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat exercitationem numquam quia
              iure necessitatibus voluptatum natus pariatur, mollitia,
              perspiciatis illo, molestias repellendus? Quo, placeat esse.
            </span>
          </div>
        </div>
        <div className="blogs-page-8">
          <div className="image-blogs-8">
            <img src={MountImage} alt="My Image" height="400px" width="600px" />
          </div>
          <div className="text-blogs-8">
            <p>The Montain Climbed </p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              fugiat maiores ducimus facilis doloremque placeat! Nisi
              laboriosam, tenetur nesciunt repellendus maxime magni voluptates
              consectetur id quis facilis laborum? Quibusdam, impedit pariatur
              corrupti voluptate perferendis optio, dolorem suscipit ex
              obcaecati hic animi dolorum harum voluptates nisi minima cumque
              magni maiores quia eligendi? Nemo expedita commodi maxime tempore
              sequi, pariatur, necessitatibus unde eveniet reprehenderit aperiam
              distinctio quisquam, quo voluptatum iste repudiandae labore iure.
              Cum officiis nesciunt illum dolorum quas fuga sit dolore, et
              provident ut architecto nulla inventore expedita iure amet?
              Laudantium facilis vel dignissimos tempora nesciunt quas cumque
              non error ab suscipit aliquam, repellendus, fugit nisi doloremque
              nostrum earum ea pariatur quia. Eius eos molestiae veritatis ullam
              quis architecto neque, doloribus blanditiis debitis eveniet magni
              incidunt rem, ad fuga id vero hic maiores ipsum? Molestias ab
              consequatur architecto consectetur aspernatur pariatur repellat
              adipisci provident numquam a. Quas rerum explicabo debitis vero?
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
}
