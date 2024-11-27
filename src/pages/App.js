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
        <Navbar.Brand href="/">
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">&#8801;</Navbar.Toggle>
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
    
      <footer class="bg-light text-center mt-5">
        <div class="container p-4">
          <section class="">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img src='https://mdbootstrap.com/img/new/standard/nature/184.webp' alt='...' className="footer-img"/>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Eat Some More</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/menu" class="text-dark">Menu</a>
                  </li>
                  <li>
                    <a href="/reserve" class="text-dark">Reserve</a>
                  </li>
                  <li>
                    <a href="/contact" class="text-dark">Contact Us</a>
                  </li>
                  <li>
                    <a href="/about" class="text-dark">About Us</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Contact Us</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">Address</a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">Email</a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">Phone #</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>
        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
