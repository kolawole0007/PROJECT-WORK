import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import OurService from "./components/OurService";


function App() {
  return (
    <div className="Nav">
      <Navbar />
      <Home />
      <AboutUs />
      <OurService />
      <ContactUs/>
    </div>
  );
}

export default App