import Navbar from "./Components/Navbar";
import NewHomePage from "./Components/Home/NewHomePage";

import NewFooter from "./Components/FooterItem/Footer";
import Destination from "./Components/Destination/Destination";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/FooterItem/Footer";
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
import InterestPage from "./Components/Interest/InterestPage";
import Event from "./Components/Event/Event";
// import TourGuide from "./Components/TourGuide/MainPage/TourGuide";
import Categories from "./Components/Blogs-Page/MainBlogPage/Categories";
import CarouselExperience from "./Components/Home/CarouselExperience";
import PrivacyPolicy from "./Components/FooterItem/PrivacyPolicy";
import SiteMap from "./Components/FooterItem/SiteMap";
// wifi password of Webseeder Webseeder@01
import TourGuide from "./Components/TourGuide/Individual-Page/TourGuide";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<SiteMap />} />
          <Route exact path="/tour" element={<TourGuide/>} />
          <Route exact path="/blog" element={<Categories />} />
          <Route exact path="/destination" element={<Destination />} />
          <Route exact path="/interest" element={<InterestPage />} />
          <Route exact path="/advantureblog" element={<AdvantureBlog />} />
          <Route exact path="/crossoceanblog" element={<Crossocean />} />
          <Route exact path="/cultureblog" element={<CultureBlog />} />
          <Route exact path="/faimilyblog" element={<FaimilyBlog />} />
          <Route exact path="/forestblog" element={<ForestBlog />} />
          <Route exact path="/event" />

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
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/middletourguide" element={<MiddleEast />} />
          <Route
            exact
            path="/beachdivingtourguide"
            element={<BeachandDiving />}
          />
   <Route exact path="/sitemap" element={<SiteMap />}/>
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
      <Footer />
    </div>
  );
}

export default App;
