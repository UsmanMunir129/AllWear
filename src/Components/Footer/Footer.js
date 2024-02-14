import React from "react";
import "./footer.css";
import { Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <footer className="nb-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="about">
                <img
                  src="images/logo.png"
                  className="img-responsive center-block"
                  alt=""
                />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis obcaecati minima inventore ipsa itaque ipsam
                  laudantium necessitatibus id amet. Doloribus dolorum molestias
                  vitae excepturi voluptates, suscipit aperiam accusantium at
                  cupiditatez.
                </p>
              </div>
            </div>

            <div className="social-media">
              <ul
                className=""
                style={{ display: "flex", flexDirection: "row" }}
              >
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="row ">
              <div className="col-12 col-sm-6  col-lg-3">
                <div className="footer-info-single">
                  <h2 className="title">Help Center</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        How to Pay
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        Sitemap
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        Delivery Info
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-info-single">
                  <h2 className="title">Customer information</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        Sell Your Items
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-info-single">
                  <h2 className="title">Security &amp; privacy</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        Terms Of Use
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        Return / Refund Policy
                      </a>
                    </li>
                    <li>
                      <a href="http://www.nextbootstrap.com/" title="">
                        Store Locations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-info-single">
                  <h2 className="title">Payment</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, unde consequatur! Provident totam libero
                    temporibus, optio porro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="copyright">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center">
                <p>
                  Copyright © 2000{" "}
                  <a href="" className="footerlasttext">
                    CuirconFitWear
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
