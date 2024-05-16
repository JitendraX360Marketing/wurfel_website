import React from "react";
import "./expertise.css";
import kitchenImage from "../Images/kitchen_expertise.jpg";
import wardrobeImage from "../Images/wardrobe_expertise.jpg";

export default function Expertise() {
  return (
    <>
      <section className="ExpertiseSection">
        <h1>Our Expertise</h1>

        <p>
          At WURFREL, we understand the importance of seamlessly integrating
          functionality with aesthetics when it comes to modular kitchen and
          wardrobe solutions. Our consultation services are tailored to elevate
          your living spaces, offering expert advice and innovative designs to
          meet your unique needs and preferences.
        </p>

        <div className="mainDivision_ExpertiseSection">
          <div className="expertiseSubDivs">
            <img src={kitchenImage} alt="" />

            <h1>Modular Kitchen</h1>
          </div>

          <div className="expertiseSubDivs">
            <img src={wardrobeImage} alt="" />

            <h1>Modular Wardrobe</h1>
          </div>
        </div>
      </section>
    </>
  );
}
