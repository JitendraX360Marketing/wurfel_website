import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Awards from "./Components/Awards";
import Consultation from "./Components/Consultation";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Awards />
        <Consultation />
        <WhyUs />
      </BrowserRouter>
    </>
  );
}

export default App;
