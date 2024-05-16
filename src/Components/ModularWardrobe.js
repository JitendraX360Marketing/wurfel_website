import React from "react";
import "./modularKitchenCur.css";
import image_1 from "../ImagesCsl/kitchen_01.jpg";
import image_2 from "../ImagesCsl/kitchen_02.jpg";
import image_3 from "../ImagesCsl/kitchen_03.jpg";

export default function ModularWardrobe() {
  return (
    <>
      <section className="ModularKitchenSection">
        {" "}
        <div id="carouselWardrobe" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carouselWardrobe"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselWardrobe" data-slide-to="1"></li>
            <li data-target="#carouselWardrobe" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image_1} alt="First slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image_2} alt="Second slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image_3} alt="Third slide"></img>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselWardrobe"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselWardrobe"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>{" "}
      </section>
    </>
  );
}
