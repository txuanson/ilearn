import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
/*--style={{ backgroundColor: "#14254a" }}--*/

export default function Footer() {
  return (
    <footer className="footer-component">
      <div class="footer-left">
        <div id="logo" className="row">
          <img src="/logo-iLearn.svg" alt="iLearn logo" />
        </div>
        <p class="footer-copyright">© 2021 iLearn</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>227 Nguyen Van Cu, District 5</span>
              <span>University of Science, </span>
              <span>Ho Chi Minh City </span></p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p>(+84)123456789</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:lkhanh4401@gmail.com">iLearn@gmail.com</a></p>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-icons">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}



