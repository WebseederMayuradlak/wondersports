import React from "react";
import Image1 from '../Contries-Page/CountriesImage/Image1.jpeg'
import Image2 from '../Contries-Page/CountriesImage/Image2.jpeg'
import Image3 from '../Contries-Page/CountriesImage/Image3.jpeg'
import Image4 from "../Contries-Page/CountriesImage/image4.jpeg"
import Img1 from '../Contries-Page/CountriesImage/1.jpeg'
import Img2 from '../Contries-Page/CountriesImage/2.jpeg'
import Img3 from '../Contries-Page/CountriesImage/3.jpeg'
import Img4 from '../Contries-Page/CountriesImage/4.jpeg'
import Img5 from '../Contries-Page/CountriesImage/5.jpeg'
import Img6 from '../Contries-Page/CountriesImage/6.jpeg'

import "./kenya.css"
const Kenya = () => {
    return (
        <>
            <div className="kenya-container">
                <div className="kenya-page">
                    <p className="travel-guide"> _____The Travel Guide ____</p>
                    <p className="adavanture ">Prepare For The Advanture!</p>
                    <a href=""> Let's Go </a>
                </div>
            </div>
            <div className="blogs-container">
                <div className="blogs-container-1" >
                    <h5>Get Started </h5>
                    <p className="header-content">What type of traveller <br /> are you ?</p>
                    <div className="text">
                        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos hic consequatur illo voluptatem maxime libero necessitatibus cum nemo quisquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis explicabo ducimus veniam eum dignissimos, provident dolor soluta quas id! Incidunt?             </span>
                    </div>

                </div>
                <div className="blogs-container-2">
                    <img src={Image1} alt="" height='500px' width='600px' />
                </div>
                <div className="blogs-container-3">
                    <img src={Image2} alt="" height='500px' width='600px' />
                </div>
                <div className="blogs-container-4">
                    <h5>Where you go this way  </h5>
                    <span>Pcickign The Right <br /> Destination </span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus perspiciatis animi qui facilis cumque accusamus placeat nesciunt porro nostrum. Alias, fuga et. Dolores facere nihil vel, laudantium omnis temporibus magni ipsam aspernatur libero cumque adipisci eos eum reprehenderit ratione necessitatibus.</p>
                </div>
                <div className="blogs-container-5">
                    <h5>Know the country</h5>
                    <span>Understands the Locals and <br /> their Traditions</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quae rem at, inventore quo dolores aliquid esse animi minima facere, doloribus fugit perferendis, reprehenderit qui sapiente quasi iure eos ex quaerat! Hic velit quaerat maxime quam! Accusamus tenetur at soluta!</p>
                </div>
                <div className="blogs-container-6">
                    <img src={Image4} alt="" height='500px' width='600px' />
                </div>
                <div className="blogs-container-7">
                    <img src={Image3} alt="" height='500px' width='600px' />
                </div>
                <div className="blogs-container-8">
                    <h5>Wander without reason</h5>
                    <span>Lorem ipsum dolor sit <br /> amet consectetur.</span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt distinctio quo id mollitia repellendus! Numquam ex dolore nam ea rem odit. Commodi, architecto repellendus. Impedit dicta atque quo quisquam ullam placeat fuga vero! Voluptas architecto sit, necessitatibus ipsa quidem nemo.

                    </p>
                </div>
                <div className="see-tour">
                    <div className="wrapper">
                        <h3>For travel Experience Book Online Today </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat in libero? Repellendus repudiandae recusandae reiciendis eos quae. Debitis, repudiandae fugit ducimus nostrum magnam placeat! Eaque nobis nisi harum provident!</p>
                        <a href="">See Tours</a>
                    </div>
                </div>
                <div className="explore-content">
                    <div className="text-data">
                        <span>Lorem ipsum dolor sit amet,  adipisicing <br />, dolore. Lorem ipsum </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quidem porro aperiam ipsam, ad praesentium! Esse veritatis, aspernatur ipsum, ut eaque optio excepturi ex, nemo dolorem iure quidem suscipit amet.</p>
                        <a href="">Explore</a>
                    </div>
                </div>
                <div className="imagination">
                    <div className="imagination-1">
                        <img src={Img1} alt="" height='450px' width='380px' />
                    </div>
                    <div className="imagination-2">
                        <div className="image-1">
                            <img src={Img2} alt="" height='270px' width='380px' />

                        </div>
                        <div className="image-2">
                            <img src={Img4} alt="" height='400px' width='380px' />

                        </div>
                    </div>
                    <div className="imagination-3">
                        <div className="image3-1">
                            <img src={Img3} alt="" height='400px' width='380px' />

                        </div>
                        <div className="image3-1">
                            <img src={Img5} alt="" height='270px' width='380px' />

                        </div>
                    </div>
                    <div className="imagination-4">
                        <img src={Img6} alt="" height='450px' width='380px' />

                    </div>
                </div>
            </div>

        </>
    )
}
export default Kenya;

