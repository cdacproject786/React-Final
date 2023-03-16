import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0f583f", padding: 25,color:'#fff' }}>
        <div className="container-fluid">
          <div className="d-flex justify-content-start align-items-center">
            <b style={{ color: "#fff" }}>•MedLog•</b>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">Group 9</li>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Aboutus">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
