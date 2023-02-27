import React from 'react'
import "./europguide.css"
import Image01 from './CountriesImage/Image1.jpeg';
import Image02 from './CountriesImage/Image1.jpeg'
const EuroptourGuide = () => {
  return (
    <>
      <div className='europ-tour'>
        <div className="europ-page">
          <div className="europ-text">
            <span>______The Travel Guide_______ </span>
            <h3>Prepare for The Advanture</h3> <br />
            <a href="">Let's Go </a>
          </div>
        </div>
        <div className="guide-1">
          <div className="guide-text-1">
            <span>Get started </span>
            <h3>What type of Traveller <br /> are You ?</h3>
            <p> Eos in quo  quod est, quis recusandae neque illum vel, explicabo dolores repellendus atque enim eveniet perspiciatis eligendi? Placeat asperiores dignissimos assumenda, dolorem corporis alias culpa deserunt aperiam? Accusamus, facilis? Repudiandae nisi distinctio pariatur nostrum magnam dolorem dolores necessitatibus a enim? Nemo obcaecati minus laudantium debitis amet placeat molestias fugit incidunt officia unde dignissimos itaque ex quod, ea quidem. Eum!</p>
          </div>
          <div className="guide-img-1">
            <img src={Image01} alt="" height='400px' width='500px' />
          </div>
          <div className="guide-img-2">
            <img src={Image02} alt="" height='400px' width='500px' />
          </div>
          <div className="guide-text-2">
            <span>Where you Go this Way </span>
            <h3>Pciking The Right way <br /> is and  </h3>
            <p> Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, sit?  amet consectetur adipisicing elit. Dolorem asperiores ipsa vitae, quidem ipsum corrupti maxime repudiandae mollitia aut, sint, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci illo excepturi vitae omnis. Consectetur possimus incidunt quod in facere! veniam earum odit consequuntur vel. Velit similique rem aperiam deserunt.</p>
          </div>
          <div className="guide-text-3">
            <span>Know the country</span>
            <h3>Understands the Locals and their <br /> Tradition </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem a sequi itaque quae quod doloribus nisi laudantium nemo? Asperiores nam quidem saepe debitis delectus, itaque necessitatibus sed accusantium ad in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis aliquid delectus obcaecati beatae ab dolorem corporis nisi amet veniam?</p>
          </div>
          <div className="guide-img-3">
            <img src={Image02} alt="" height='400px' width='500px' />
          </div>
          <div className="guide-img-4">
            <img src={Image01} height='400px' width='500px' alt="" />
          </div>
          <div className="guide-text-4">
            <span> Wander Without Reason </span>
            <h3> Explore the nature with  <br /> Wandersport </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque et recusandae reprehenderit omnis voluptatem pariatur odit, adipisci est aut aperiam ea architecto ullam iure? Odio maxime accusamus fuga accusantium dignissimos dolor ducimus. Sapiente, nostrum enim, error vitae dolorem obcaecati reprehenderit quisquam, perspiciatis quae tempora distinctio architecto saepe! Aspernatur, harum ut</p>
          </div>
        
        </div>
      </div>
    </>
  )
}
export default EuroptourGuide;