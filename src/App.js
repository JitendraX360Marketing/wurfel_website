import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Awards from "./Components/Awards";
import Consultation from "./Components/Consultation";
import WhyUs from "./Components/WhyUs";
import ComSectionMKWD from "./Components/ComSectionMKWD";
import Expertise from "./Components/Expertise";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Awards />
        <Consultation />
        <WhyUs />
        <ComSectionMKWD />
        <Consultation />
        <Expertise />
      </BrowserRouter>
    </>
  );
}

export default App;
