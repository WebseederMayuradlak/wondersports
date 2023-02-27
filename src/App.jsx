import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import NewFooter from './Components/Footer';
import Destination from './Components/Destination';
import Footer from "./Components/Footer"
import Middle_East from './Components/Country/Middle_East';
import InterestPage from './Components/Interest/InterestPage';
// import Kenya from './Components/Tour-Guide/Kenya';
import Blogs1 from './Components/Blogs-Page/Blogs1';
import MainBlogPage from './Components/Blogs-Page/MainBlogPage';
import AfricatourGuide from './Components/TourGuide/AfricatourGuide';
import EuroptourGuide from './Components/TourGuide/EuroptourGuide';
import MiddleEast from './Components/TourGuide/MiddleEast';
import NorthTourGuide from './Components/TourGuide/NorthTourGuide';


function App() {
  return (
    <div className="App">
   <Navbar />
   <NorthTourGuide/>
   {/* <MiddleEast/> */}
   {/* <AfricatourGuide /> */}
{/* <EuroptourGuide/> */}
     <Footer />
    </div>
  );
}

export default App;
