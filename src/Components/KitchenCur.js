import React from "react";
import "./kitchenCur.css";
import curItem1 from "../ImagesCsl/kitchen_01.jpg";
import curItem2 from "../ImagesCsl/kitchen_02.jpg";
import curItem3 from "../ImagesCsl/kitchen_03.jpg";

export default function KitchenCur() {
  return (
    <>
      <section className="KitchenCurSection">
        <span>Left</span>
        <div className="mainDivision_KitchenCurSection">
          <div className="curItem1">
          </div>
          <div className="curItem2">
          </div>
          <div className="curItem3">
          </div>
        </div>
        <span>Right</span>
      </section>
    </>
  );
}
