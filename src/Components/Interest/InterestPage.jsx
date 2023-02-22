import React from "react";
import "./interest.css"
const InterestPage = () => {
    return (
        <>
            <div className="interest-container">
                <div className="page-container">
                    <div className="winter">
                        <div className="winter-container">
                            <div className="winter-text">
                                <h3>Winter </h3>
                            </div>
                            <div className="winter-item guide">
                                <a href="">guide</a>
                            </div>
                        </div>
                        <div className="winter-container">
                            <div className="winter-item winter-article">
                                <a href="">Article</a>
                            </div>
                            <div className="winter-item winter-trips ">
                                <a href="">trips</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summer">
                    <hr />
                    <div className="summer-container">

                        <div className="summer-item guide">
                            <a href="">guide</a>
                        </div>
                        <div className="winter-text">
                            <h3>Summer </h3>
                        </div>
                    </div>
                    <div className="summer-container">
                        <div className="summer-item">
                            <a href="">Aritcle</a>
                        </div>
                        <div className="summer-item summer-trips">
                            <a href="">trips</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-row">
                <div className="spring">
                    <div className="spring-container">
                        <div className="spring-item">
                            <div className="list-item spring-article">
                                <a href="">article</a>
                            </div>
                            <div className="list-item spring-trips">
                                <a href="">Trips</a>
                            </div>
                        </div>
                        <div className="spring-item">
                            <div className="spring-text">
                                <h3>Spring </h3>
                            </div>
                            <div className="list-item spring-guide">
                                <a href="">guide</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="snow">
                    <div className="snow-container">
                        <div className="snow-item">
                            <div className="list-item snow-article">
                                <a href="">article</a>
                            </div>
                            <div className="list-item snow-trips">
                                <a href="">Trips</a>
                            </div>
                        </div>
                        <div className="snow-item">
                            <div className="list-item snow-guide">
                                <a href="">guide</a>
                            </div>
                            <div className="snow-text">
                                <h3>Snow </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="third-page">
                <div className="beach">
                    <div className="beach-container">
                        <div className="beach-item">
                            <div className="list-item beach-guide">
                                <a href="">Guide</a>
                            </div>
                            <div className="beach-text">
                                <h3>Beach And Diving </h3>
                            </div>
                        </div>
                        <div className="beach-item">
                            <div className="list-item beach-article">
                                <a href="">article</a>
                            </div>

                            <div className="list-item beach-trips">
                                <a href="">trips</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="food">
                    <div className="food-container">
                        <div className="food-item">
                            <div className="food-text">
                                <h3>
                                    Food and Drinks
                                </h3>
                            </div>
                            <div className="list-item food-guide">
                                <a href="">Guide</a>
                            </div>
                        </div>
                        <div className="food-item">
                            <div className="list-item food-trips">
                                <a href="">trips</a>
                            </div>
                            <div className="list-item food-article">
                                <a href="">article</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="history-solo">
                <div className="history">
                    <div className="history-container">
                        <div className="history-item">
                            <div className="list-item history-guide">
                                <a href="">guide</a>
                            </div>
                            <div className="list-item history-trips">
                                <a href="">trips</a>
                            </div>
                        </div>
                        <div className="history-item">
                            <div className="history-text">
                                <h3>History and Heritage </h3>
                            </div>
                            <div className="list-item history-article">
                                <a href="">article</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solo-travel">
                    <div className="solo-container">
                        <div className="solo-item">
                        <div className="list-item solo-guide">
                                <a href="">guide</a>
                            </div>
                            <div className="list-item solo-article">
                                <a href=""> article</a>
                            </div>
                          
                        </div>
                        <div className="solo-item">
                        <div className="list-item solo-trips">
                                 <a href=""> trips</a>
                            </div>
                        <div className="solo-text">
                                <h3>Solo Travel </h3>
                            </div>
                      
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="photography">
                <div className="photo-item">
                    <a href="">guide </a>
                </div>
                <div className="photo-item">
                    <a href="">article</a>
                </div>
                <div className="photo-text">
                    <h3>Photography</h3>
                </div>
                <div className="photo-item">
                    <a href="">trips</a>
                </div>

            </div>
        </>
    )
}
export default InterestPage;