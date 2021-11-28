import React from "react";
import { Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar navbar-dark bg-dark navbar-expand-md fixed-top"
    >
      <div className="d-flex w-50 order-0">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="navbar-collapse collapse justify-content-center order-2"
        id="collapsingNavbar"
      >
        <ul className="navbar-nav nav-center" id="mainmenu">
          <li className="nav-item ">
            <a className="nav-link text-nowrap" href="/map/">
              Map
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-nowrap" href="/plants/">
              Plants
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-nowrap" href="/units/">
              Units
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-nowrap" href="/factsheets/">
              Factsheets
            </a>
          </li>

          <NavDropdown title="Add" id="basic-nav-dropdown">
            <NavDropdown.Item href="">Site</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Plant</NavDropdown.Item>
            <NavDropdown.Item href="/unit/create/">Unit</NavDropdown.Item>
            <NavDropdown.Item href="/unit/utilitydata/add">Utility data</NavDropdown.Item>
            <NavDropdown.Divider />
            
            <NavDropdown.Item href="/factsheet/create/">Factsheet</NavDropdown.Item>
          </NavDropdown>
        </ul>
      </div>
      <span className="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last">
        <div className="align-self-center ml-auto header-col-right">
          <a className="btn btn-custom btn-rounded" href="">
            Profile
          </a>
          <span id="menu-btn"></span>
        </div>
        <div className="clearfix"></div>
      </span>
    </nav>
  );
}

export default Navbar;
