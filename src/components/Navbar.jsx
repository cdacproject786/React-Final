import React from "react";

function Navbar() {
  return (
    <div className="nav-bar">
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#0f583f", padding: 25,color:'#fff' }}>
        <div class="container-fluid">
          <div class="d-flex justify-content-start align-items-center">
            <b style={{ color: "#fff" }}>•MedLog•</b>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">Group 9</li>
              <li class="nav-item">
                <a href="/">Home</a>
              </li>
              <li class="nav-item">
                <a href="/Aboutus">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
