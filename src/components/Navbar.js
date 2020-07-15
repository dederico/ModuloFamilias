import React from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        Adopciones
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://www.google.com">
              Familias
            </a>
          </li>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Caracteristicas
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Familiares</DropdownItem>
              <DropdownItem>De empate</DropdownItem>
              {/* <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem> */}
            </DropdownMenu>
          </UncontrolledDropdown>
        </ul>
        <form className="form-inline my-2 my-lg-0">
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
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
