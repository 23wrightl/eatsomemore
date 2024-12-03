import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu.js';
import Reserve from './Reserve.js';
import Contact from './Contact.js';
import About from './About.js';
import Home from './Home.js';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../img/3.png';
import logoF from '../img/1.png';
import '../App.css';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="navbar-custom">
        <Container>
        <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">&#8801;</Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Full Menu" id="collapsible-nav-dropdown" className="headerText">
                <NavDropdown.Item href="/menu#apps" className="headerText">Appetizers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/menu#pasta" className="noHeaderText">Build Your Own Pasta</NavDropdown.Item>
                <NavDropdown.Item href="/menu#pizza" className="noHeaderText">Build Your Own Pizza</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="menu#drinks" className="noHeaderText">Drinks</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/reserve" className="headerText">Reservations</Nav.Link>
              <Nav.Link href="/contact" className="headerText">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about" className="headerText">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="" className="headerText">Call Now @ (203) 999-9999</Nav.Link>
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
    
      <footer>
        <div class="container p-4">
          <section class="">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <img src={logoF} alt='...' className="footer-img"/>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Eat Some More</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/menu" class="text-white">Menu</a>
                  </li>
                  <li>
                    <a href="/reserve" class="text-white">Reserve</a>
                  </li>
                  <li>
                    <a href="/contact" class="text-white">Contact Us</a>
                  </li>
                  <li>
                    <a href="/about" class="text-white">About Us</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Contact Us</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Address: </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Email: eatsomemore@marist.edu</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Phone: (203) 999-9999</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>
        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
