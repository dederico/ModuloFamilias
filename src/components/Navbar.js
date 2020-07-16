import React from "react";
import { Link } from "react-router-dom";
// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">Adopciones</Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/list/familias" className="nav-link">
                  Familias
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/familia/agregar" className="nav-link">
                  Agregar
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Cerrar
                </Link>
              </li>
              {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Caracteristicas
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Familiares</DropdownItem>
              <DropdownItem>De empate</DropdownItem> */}
              {/* <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem> */}
              {/* </DropdownMenu>
          </UncontrolledDropdown> */}
              {/* </ul>
        <form className="form-inline my-2 my-lg-0">*/}

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
                Search
              </button>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
