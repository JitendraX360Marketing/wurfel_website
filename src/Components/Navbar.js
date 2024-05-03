import React from "react";
import "./navbar.css";
import logo from "../Images/brandLogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section className="NavbarSection">
        <div className="mainDivision_NavbarSection">
          <div className="logoDiv_Navbar">
            <Link to={"/"}>
              {" "}
              <img src={logo} alt="Wurfel Logo" />
            </Link>
          </div>
          <div className="getDesignsDiv_Navbar">
            <button className="getDesignsBTN_Navbar">Get Free Designs</button>
          </div>
        </div>
      </section>
    </>
  );
}
