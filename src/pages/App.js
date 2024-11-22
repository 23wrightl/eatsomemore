import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu.js';
import Reserve from './Reserve.js';
import Contact from './Contact.js';
import About from './About.js';
import Home from './Home.js';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Full Menu" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/menu#apps">Appetizers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/menu#pasta">Build Your Own Pasta</NavDropdown.Item>
                <NavDropdown.Item href="/menu#pizza">Build Your Own Pizza</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="menu#drinks">Drinks</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/reserve">Reservations</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="">Call Now @ 000-000-0000</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
