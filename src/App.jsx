import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import NewFooter from './Components/Footer';
import Destination from './Components/Destination';
import Footer from "./Components/Footer"
import Middle_East from './Components/Country/Middle_East';

function App() {
  return (
    <div className="App">
   
   <Navbar/>
   <Destination/>
   {/* <Middle_East/> */}
   <Footer />
    </div>
  );
}

export default App;
