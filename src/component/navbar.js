import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropDown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class NavbarPage extends Component {
  loggedIn = () => {
    return (
      <>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </>
    );
  };
  render() {
    let isLogged = localStorage.getItem("loggedIn");
    let isShelter = localStorage.getItem("isShelter");

    return (
      <Navbar bg="light" expand="lg">
        <Link to="/" className="navbar-brand">
          Adopt a friend
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/shelters" className="nav-link">
              Shelters
            </Link>
            <Link to="/pets" className="nav-link">
              All friends
            </Link>
          </Nav>
          <Form inline>
            {isLogged ? (
              <>
                {this.props.username}
                <Link to="/logout" className="nav-link" onClick={this.logout}>
                  Logout
                </Link>

                <NavDropdown title="Shelter Options" id="basic-nav-dropdown">
                  {isShelter ? (
                    <NavDropdown.Item href="/createPet">
                      Create Pet
                    </NavDropdown.Item>
                  ) : null}
                </NavDropdown>
              </>
            ) : (
              this.loggedIn()
            )}

            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  logout = () => {
    console.log("loged out");
    localStorage.removeItem("loggedIn");
  };
}
