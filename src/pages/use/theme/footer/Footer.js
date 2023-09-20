import { memo, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-about">
              <h1 className="footer-about-logo">Shop Food</h1>
              <ul>
                <li>Address: 129 Duong Lam</li>
                <li>Phone: 0334-526-840</li>
                <li>Email: Foodshop@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-widget">
              <h5>Shop</h5>
              <ul>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
                <li>
                  <Link to="">About us</Link>
                </li>
                <li>
                  <Link to="">Product</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Acount information</Link>
                </li>
                <li>
                  <Link to="">Shopping cart</Link>
                </li>
                <li>
                  <Link to="">Wishlist</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <h5>Promotions & Offers</h5>
              <p>Register and enter your information here.</p>
              <form action="#">
                <div>
                  <input type="text" placeholder="Enter email" />
                  <button type="submit" className="button-submit">
                    Register
                  </button>
                </div>
                <div className="footer-widget-social">
                    <div>
                        <AiOutlineFacebook/>
                    </div>
                    <div>
                        <AiOutlineInstagram/>
                    </div>
                    <div>
                        <AiOutlineTwitter/>
                    </div>
                    <div>
                        <AiOutlineLinkedin/>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
