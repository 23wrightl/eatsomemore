import './App.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Menu() {
  return (
    <div className="Menu">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="App.js">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Full Menu" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="Menu.js#apps">Appetizers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Menu.js#pasta">Build Your Own Pasta</NavDropdown.Item>
              <NavDropdown.Item href="Menu.js#pizza">Build Your Own Pizza</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Menu.js#drinks">Drinks</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="Reserve.js">Reservations</Nav.Link>
            <Nav.Link href="Contact.js">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="About.js">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="">Call Now @ 000-000-0000</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <Tabs
      defaultActiveKey="apps"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="apps" title="Appetizers">
        Appetizers
      </Tab>
      <Tab eventKey="pasta" title="Pasta Meals">
        Pasta Meals
      </Tab>
      <Tab eventKey="pizza" title="Make Your Own Pizza">
        Make Your Own Pizza
      </Tab>
      <Tab eventKey="drinks" title="Drinks">
        Drinks
      </Tab>
    </Tabs>
    </Container>
    </div>
  );
}

export default Menu;
