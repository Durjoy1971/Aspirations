import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Useful Link</h4>
            <ul>
              <li>
                <a href="http://localhost:3000/home">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/services">Services</a>
              </li>
              <li>
                <a href="https://github.com/Durjoy1971">Reviews</a>
              </li>
              <li>
                <a href="http://localhost:3000/contact">Contact US</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="https://github.com/Durjoy1971">Career</a>
              </li>
              <li>
                <a href="https://github.com/Durjoy1971">Privacy policy</a>
              </li>
              <li>
                <a href="https://github.com/Durjoy1971">Refund policy</a>
              </li>
              <li>
                <a href="https://github.com/Durjoy1971">payment options</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Others</h4>
            <ul>
              <li>
                <a href="https://github.com/Durjoy1971">Blog</a>
              </li>
              <li>
                <a href="https://github.com/Durjoy1971">Book Store</a>
              </li>
              <li>
                <a href="https://github.com/Durjoy1971">Notes and Guides</a>
              </li>
              <li>
                <a href="https://github.com/Durjoy1971">Offers</a>
              </li>
              <li>
                <a href="https://github.com/Durjoy1971">Crash Courses</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100005243536152"
                target="_blank"rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://t.me/Durjoy_Barua" target="_blank" rel="noopener noreferrer">
                {" "}
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://t.me/Durjoy_Barua" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p id="extra">
          <i class="fa-solid fa-copyright"></i> 2022-2024 CopyRight By Team
          ASPIRANTS{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
