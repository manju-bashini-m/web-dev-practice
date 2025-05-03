import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cartProduct = useSelector((state) => state.cart);
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar-container container-fluid sticky-top "
      >
        <Container fluid>
          <Navbar.Brand to="/" as={Link}>
            E-Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link to="/products" as={Link}>
                Products
              </Nav.Link>
              <Nav.Link to="/about-us" as={Link}>
                About us
              </Nav.Link>
              <Nav.Link to="/login" as={Link}>
                Login
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <Nav.Link style={{ marginLeft: "0.5rem" }} to="/cart" as={Link}>
              My Bag {cartProduct.length}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
