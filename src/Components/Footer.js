import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section className="Footer_Section">
        <div className="mainDivisionFooterSection">
          <div className="aboutComDiv_Footer">
            <h1>About Company</h1>
            <p>
              Wurfel: Leading modular kitchen and wardrobe manufacturer, merging
              innovation with craftsmanship to create bespoke, space-efficient
              solutions for modern living.
            </p>
            <p>
              Wurfel: Renowned for crafting personalized modular kitchens and
              wardrobes, merging style with functionality to redefine
              contemporary living spaces with efficiency.
            </p>

            <span>Follow Us On </span>

            <div className="socialMediaHandles_Footer">
              <a
                target="blank"
                href={"https://www.instagram.com/x360marketing/"}
              >
                {" "}
                <i className="fa-brands fa-instagram fa-xl"></i>{" "}
              </a>
              <a
                href="https://www.instagram.com/x360marketing/"
                target="blank"
                to={"/"}
              >
                {" "}
                <i className="fa-brands fa-facebook fa-xl"></i>{" "}
              </a>
              <a href="https://wa.me/918503886992" target="blank" to={"/"}>
                {" "}
                <i className="fa-brands fa-whatsapp fa-xl"></i>{" "}
              </a>
              <a
                href="https://www.linkedin.com/company/x360-marketing"
                target="blank"
                to={"/"}
              >
                {" "}
                <i className="fa-brands fa-linkedin fa-xl"></i>{" "}
              </a>
              <a
                href="https://www.linkedin.com/company/x360-marketing"
                target="blank"
                to={"/"}
              >
                {" "}
                <i className="fa-brands fa-pinterest fa-xl"></i>{" "}
              </a>
              <a
                href="https://www.youtube.com/channel/UCwa1EJei3hw1OZfIrUL4e2g"
                target="blank"
                to={"/"}
              >
                {" "}
                <i className="fa-brands fa-youtube fa-xl"></i>{" "}
              </a>
            </div>
          </div>
          <div className="addressDiv_Footer">
            {" "}
            <h1>Furnishiaa</h1>
            <p>
              Plot No. H726B, Road No. 9F2, Vishwakarma Industrial Area, <br />{" "}
              Jaipur, Rajasthan, India
            </p>
            <span>
              Contact No.: <a href="tel:8503886992">8503886992</a>,{" "}
              <a href="tel:7849912491">7849912491</a>
            </span>
            <span>
              Email:{" "}
              <a href="mailto:sales@x360marketing.com">sales@wurfel.in</a>
            </span>
          </div>
        </div>
      </section>
      <section className="copyrightSection">
        <span>
          <i className="fa-regular fa-copyright"></i> 2024 Copyright{" "}
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={"/"}
          >
            Furnishiaa
          </Link>
        </span>
        <span>
          Website Developed and Maintained By{" "}
          <a target="blank" href="https://x360marketing.com/">
            x360 Marketing
          </a>
        </span>
      </section>
    </>
  );
}
