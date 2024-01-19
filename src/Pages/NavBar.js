import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Enark
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#">
              Courses
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
