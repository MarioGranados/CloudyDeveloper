import logo from './logo.svg';
import './App.css';
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import MenuPreview from "./Components/MenuPreview";
import About from "./Components/About";

function App() {
    return (
        <>
            <div className='bg-light'>
                <Navbar/>
                <Banner/>
                <MenuPreview/>
                <About/>
                <Menu/>
                <Testimonials/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
