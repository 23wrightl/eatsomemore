import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer} from 'mdb-react-ui-kit';
import '../App.css';
import logoL from '../img/Lainey.JPG'
import logoA from '../img/Andrew.jpg'
import logoR from '../img/ReRe.jpg'

function About() {
  return (
    <MDBContainer>
      <div className="about">
      <h1 className='mt-3 mb-3'>About Us</h1>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <img src={logoR} alt='...' className="about-img"/>
        </div>
        <div class="col-md-8 mb-3">
          <h3>Sophia Masone</h3>
          <h5><ul>Documentation</ul><ul>Programmer</ul></h5>
          <p>Chill Person</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <img src= {logoL} alt='...' className="about-img"/>
        </div>
        <div class="col-md-8 mb-3">
          <h3>Lainey Wright</h3>
          <h5><ul>Framework Designer</ul><ul>Back-end Programmer</ul></h5>
          <p>Chill Person</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <img src={logoA} alt='...' className="about-img"/>
        </div>
        <div class="col-md-8 mb-3">
          <h3>Andrew Lombardo</h3>
          <h5><ul>Front-end Programmer</ul><ul>Trello Manager</ul></h5>
          <p>Bio of person</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <img src='https://mdbootstrap.com/img/new/standard/nature/184.webp' alt='...' className="about-img"/>
        </div>
        <div class="col-md-8 mb-3">
          <h3>Christopher Castillo</h3>
          <h5><ul>Lead Graphic Design</ul><ul>Reservation Programmer</ul></h5>
          <p>Bio of person</p>
        </div>
      </div>
      </div>
    </MDBContainer>
  );
}

export default About;
