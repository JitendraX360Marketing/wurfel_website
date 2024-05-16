import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Awards from "./Components/Awards";
import Consultation from "./Components/Consultation";
import WhyUs from "./Components/WhyUs";
import ComSectionMKWD from "./Components/ComSectionMKWD";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";
import ModularKitchen from "./Components/ModularKitchen";
import ModularWardrobe from "./Components/ModularWardrobe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Awards />
        <Consultation />
        <WhyUs />
        <ModularKitchen />
        <ModularWardrobe />
        <ComSectionMKWD />
        <Consultation />
        <Expertise />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
