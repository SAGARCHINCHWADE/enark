import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navigate = useNavigate();
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">
        <img
          src="/Image/logo.jpg"
          alt="Logo"
          width="50"
          height="50"
          className="vertical-align-baseline"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class={`${
          isNavCollapsed ? "collapse" : ""
        } navbar-collapse d-flex justify-content-between`}
        id="navbarNav"
      >
        <ul class="navbar-nav d-flex justify-content-between">
          <li class="nav-item active">
            <button class="nav-link" onClick={() => navigate("/")}>
              Home <span class="sr-only"></span>
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" onClick={() => navigate("/courses")}>
              Cources
            </button>
          </li>
          <li class="nav-item  my-2 my-sm-0"></li>
        </ul>
        <ul class="navbar-nav d-flex flex-row me-1">
          <li class="nav-item me-3 me-lg-0">
            <button type="button" class="btn btn-dark" onClick={() => navigate("/Cart")}>
              Cart 
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
