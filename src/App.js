import './App.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
    </div>
  );
}

export default App;
