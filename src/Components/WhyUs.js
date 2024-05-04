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
              <h1>Expertise</h1>
              <p>
                Our seasoned team brings unparalleled expertise, ensuring your
                project receives top-notch guidance and execution.
              </p>
            </div>
            <div className="sub_Div_leftDiv_wcu">
              {" "}
              <img src={sampleIcon} alt="Sample Icon" />
              <h1>Innovation</h1>
              <p>
                We pioneer creative solutions, staying ahead with innovative
                strategies tailored to meet your unique needs.
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
                Rigorous quality checks guarantee excellence in every aspect,
                fostering trust and satisfaction among our clients.
              </p>
            </div>
            <div className="lowerDiv_WhyChooseUs">
              <div className="lowerSubDiv_wcu">
                {" "}
                <img src={sampleIcon} alt="Sample Icon" />
                <h1>Quality Assurance</h1>
                <p>
                  Rigorous quality checks guarantee excellence in every aspect,
                  fostering trust and satisfaction among our clients.
                </p>
              </div>
              <div className="lowerSubDiv_wcu">
                {" "}
                <img src={sampleIcon} alt="Sample Icon" />
                <h1>Customer-Centric Approach</h1>
                <p>
                  Rigorous quality checks guarantee excellence in every aspect,
                  fostering trust and satisfaction among our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
