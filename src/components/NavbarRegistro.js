import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarRegistro = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {" "}
      <Link to="/create-familia" className="nav-link">
        Datos Generales
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/create-familia-fisica" className="nav-link">
              <p> Fisica</p>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/create-familia-domicilio" className="nav-link">
              <p>Domicilio</p>
            </Link>
          </li>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <li className="nav-item active">
            <Link to="/create-familia-org" className="nav-link">
              <p>Organizacion</p>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/create-familia-familiares" className="nav-link">
              <p>Familiares</p>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <p>Home</p>
            </Link>
          </li>

          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <p>Search</p>
          </button>
          {/* </div> */}
        </ul>
      </div>
    </nav>
  );
};
export default NavbarRegistro;
