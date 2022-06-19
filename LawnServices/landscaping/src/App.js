
import './App.css';
import Navbar from "./Components/Navbar";
import Banner from './Components/Banner'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import {about} from "./Utils/Data";
import Procedure from "./Components/Procedure";
import OurWork from "./Components/OurWork";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar/>
        <Banner/>
        <Services/>
     {/* <AboutUs {...about}/>*/}
        <AboutUs/>
      <Procedure/>
        <OurWork/>
        <Pricing/>
        <Footer/>
    </>
  );
}

export default App;
