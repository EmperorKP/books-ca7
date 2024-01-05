import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from '.././pic/logo.png';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-about">
          <div className="brand">
            <Link to="/" className="wordmark">
            <img src={logo} alt="" style={{height:70}}/>
            </Link>
          </div>
          <span className="footer-desc">Explore the world of words.</span>
        </div>
        <div className="footer-links">
          <span className="footer-header">Links</span>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/register" className="footer-link">
            Register
          </Link>
        </div>
      </div>
      <div className="footer-credits">
        <span className="footer-developer">
          Designed and Developed by&nbsp;
          <a
            href="https://emperorkp.github.io/Profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
          KP
          </a>
        </span>
      </div>
      <p class="footer_rights">&#169; KP. All rigths reserved</p>
    </footer>
  );
}

export default Footer;
