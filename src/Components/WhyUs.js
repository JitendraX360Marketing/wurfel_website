import React from "react";
import "./whyus.css";
import sampleIcon from "../Assets/whyChooseUsIcon.png";
export default function WhyUs() {
  return (
    <>
      <section className="WhyUsSection">
        <div className="mainDivision_WhyUs">
          <div className="leftDiv_WhyChooseUs">
            <div className="sub_Div_leftDiv_wcu">
              <img src={sampleIcon} alt="Sample Icon" />
              <h1>Sample Heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus fugiat ab eaque dicta laboriosam ad fugit optio.
                Dolorem, repudiandae! Delectus!
              </p>
            </div>
            <div className="sub_Div_leftDiv_wcu">
              {" "}
              <img src={sampleIcon} alt="Sample Icon" />
              <h1>Sample Heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus fugiat ab eaque dicta laboriosam ad fugit optio.
                Dolorem, repudiandae! Delectus!
              </p>
            </div>
          </div>
          <div className="midDiv_WhyChooseUs"></div>
          <div className="rightDiv_WhyChooseUs">
            <div className="uperDiv_WhyChooseUs">
              WHY <br />
              CHOOSE <br />
              US?
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                vero nobis corporis fuga eos molestiae!
              </p>
            </div>
            <div className="lowerDiv_WhyChooseUs">
              <div className="lowerSubDiv_wcu">
                {" "}
                <img src={sampleIcon} alt="Sample Icon" />
                <h1>Sample Heading</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus fugiat ab eaque dicta laboriosam ad fugit optio.
                  Dolorem, repudiandae! Delectus!
                </p>
              </div>
              <div className="lowerSubDiv_wcu">
                {" "}
                <img src={sampleIcon} alt="Sample Icon" />
                <h1>Sample Heading</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus fugiat ab eaque dicta laboriosam ad fugit optio.
                  Dolorem, repudiandae! Delectus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
