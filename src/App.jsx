
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import NewFooter from './Components/Footer';
import Destination from './Components/Destination';
import Footer from "./Components/Footer"
import Middle_East from './Components/Country/Middle_East';
import InterestPage from './Components/Interest/InterestPage';
// import Kenya from './Components/Tour-Guide/Kenya';
// import Blogs1 from './Components/Blogs-Page/AdvantureBlog';
import MainBlogPage from './Components/Blogs-Page/MainBlogPage';
import AfricatourGuide from './Components/TourGuide/Africa/AfricatourGuide';
import EuroptourGuide from './Components/TourGuide/Europe/EuroptourGuide';
import MiddleEast from './Components/TourGuide/Middle-East/MiddleEast';
import NorthTourGuide from './Components/TourGuide/North/NorthTourGuide';
import SummertourGuide from './Components/TourGuide/Summer-Guide/SummertourGuide';
import WintertourGuide from './Components/TourGuide/Winter-Guide/WintertourGuide';
import SpringtourGuide from './Components/TourGuide/Spring/SpringtourGuide';
import SnowtourGuide from './Components/TourGuide/Snow-Guide/SnowtourGuide';
import BeachandDiving from './Components/TourGuide/Beach-and-Diving/BeachandDiving';
import FoodandDrink from './Components/TourGuide/Food-and-Drinks/FoodandDrink';
import HistoryandHeritage from './Components/TourGuide/History-Guide/HistoryandHeritage';
import Solotravel from './Components/TourGuide/Solo-Travel/Solotravel';
import PhotoGraphy from './Components/TourGuide/Photography/PhotoGraphy';
import AdvantureBlog from './Components/Blogs-Page/Advanture/AdvantureBlog';
import CultureBlog from './Components/Blogs-Page/Culture/CultureBlog';
import Crossocean from './Components/Blogs-Page/Cross-Ocean/Crossocean';
import FaimilyBlog from './Components/Blogs-Page/Faimily/FaimilyBlog';
import ForestBlog from './Components/Blogs-Page/Forest/ForestBlog';
import Mountain from './Components/Blogs-Page/Mountain/Mountain';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <MainBlogPage/>
      {/* <Destination/> */}
      {/* <InterestPage/> */}
   {/* <HomePage/> */}
     <Footer />
    </div>
  );
}

export default App;
