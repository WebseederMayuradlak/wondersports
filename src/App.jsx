import Navbar from "./Components/Navbar";
import NewHomePage from "./Components/Home/NewHomePage";
// import HomePage from "./Components/Home/HomePage";
import NewFooter from "./Components/Footer";
import Destination from "./Components/Destination/Destination";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import InterestPage from "./Components/Interest/InterestPage";
import MainBlogPage from "./Components/Blogs-Page/MainBlogPage";
import BeachandDiving from "./Components/TourGuide/Beach-and-Diving/BeachandDiving";
import AfricatourGuide from "./Components/TourGuide/Africa/AfricatourGuide";
import EuroptourGuide from "./Components/TourGuide/Europe/EuroptourGuide";
import FoodandDrink from "./Components/TourGuide/Food-and-Drinks/FoodandDrink";
import HistoryandHeritage from "./Components/TourGuide/History-Guide/HistoryandHeritage";
import NorthTourGuide from "./Components/TourGuide/North/NorthTourGuide";
import MiddleEast from "./Components/TourGuide/Middle-East/MiddleEast";
import PhotoGraphy from "./Components/TourGuide/Photography/PhotoGraphy";
import SnowtourGuide from "./Components/TourGuide/Snow-Guide/SnowtourGuide";
import Solotravel from "./Components/TourGuide/Solo-Travel/Solotravel";
import SpringtourGuide from "./Components/TourGuide/Spring/SpringtourGuide";
import SummertourGuide from "./Components/TourGuide/Summer-Guide/SummertourGuide";
import WintertourGuide from "./Components/TourGuide/Winter-Guide/WintertourGuide";
import AdvantureBlog from "./Components/Blogs-Page/Advanture/AdvantureBlog";
import Crossocean from "./Components/Blogs-Page/Cross-Ocean/Crossocean";
import CultureBlog from "./Components/Blogs-Page/Culture/CultureBlog";
import FaimilyBlog from "./Components/Blogs-Page/Faimily/FaimilyBlog";
import ForestBlog from "./Components/Blogs-Page/Forest/ForestBlog";
import Mountain from "./Components/Blogs-Page/Mountain/Mountain";
// wifi password of Webseeder Webseeder@01
function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<NewHomePage />} />
          <Route exact path="/destination" element={<Destination />} />
          <Route exact path="/interest" element={<InterestPage />} />
          <Route exact path="/blog" element={<MainBlogPage />} />
          <Route exact path="/advantureblog" element={<AdvantureBlog />} />
          <Route exact path="/crossoceanblog" element={<Crossocean />} />
          <Route exact path="/cultureblog" element={<CultureBlog />} />
          <Route exact path="/faimilyblog" element={<FaimilyBlog />} />
          <Route exact path="/forestblog" element={<ForestBlog />} />

          <Route exact path="/afrciatourguide" element={<AfricatourGuide />} />
          <Route
            exact
            path="/beachdivingtourguide"
            element={<BeachandDiving />}
          />
          <Route exact path="/europetourguide" element={<EuroptourGuide />} />
          <Route exact path="/foodanddrink" element={<FoodandDrink />} />
          <Route
            exact
            path="/historytourguide"
            element={<HistoryandHeritage />}
          />
          <Route exact path="/middletourguide" element={<MiddleEast />} />
          <Route
            exact
            path="/beachdivingtourguide"
            element={<BeachandDiving />}
          />

          <Route exact path="/northtourguide" element={<NorthTourGuide />} />
          <Route exact path="/photographytourguide" element={<PhotoGraphy />} />
          <Route exact path="/snowtourguide" element={<SnowtourGuide />} />
          <Route exact path="/solotourguide" element={<Solotravel />} />
          <Route exact path="/springtourguide" element={<SpringtourGuide />} />
          <Route exact path="/summertourguide" element={<SummertourGuide />} />
          <Route exact path="/wintertourguide" element={<WintertourGuide />} />
          <Route exact path="/mountainblog" element={<Mountain />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
