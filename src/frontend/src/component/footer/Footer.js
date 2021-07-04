import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-component">
      <div class="footer-left">
        <div className="logo">
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
              <p><a href="mailto:lkhanh4401@gmail.com"></a>iLearn@gmail.com</p>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-icons">
          <p><a href="#"><i class="fa fa-facebook"></i></a>Facebook</p>
          <p><a href="#"><i class="fa fa-twitter"></i></a>Twitter</p>
          <p><a href="#"><i class="fa fa-instagram"></i></a>Instagram</p>
        </div>
      </div>
    </footer>
  );
}



