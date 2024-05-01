// import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";
//import logo from "./guy_export_2.gif";

function Hero() {
  //const navigate = useNavigate();
  // document.body.style.background = "linear-gradient(90deg, #cedbe6 35%, #fff 0%)";
  return (
    <>
      <header id="hero">
        <div className="grid-container">
          <div className="animation-display">
            <img src="./guy_export_2.gif" alt="Guy" />
          </div>
          <div className="grid-hello">
            <div className="whoani">
              <h2>
                [~]$ <span style={{ color: "yellow" }}>whoami</span>
              </h2>
            </div>
            <p>
              <Link to="/mywork">Cybersecurity professional</Link>{" "}
            </p>
            <p>
              <Link to="/mywork" className="homeLink">
                Content creator
              </Link>{" "}
            </p>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}

export default Hero;
