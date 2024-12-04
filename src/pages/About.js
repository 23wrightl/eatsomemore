import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer} from 'mdb-react-ui-kit';
import '../App.css';
import logoL from '../img/Lainey.JPG'
import logoA from '../img/Andrew.jpg'
import logoR from '../img/ReRe.jpg'
import logoC from '../img/Chris.png'

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
          <p>Sophia Masone is a Marist College sophomore majoring in Computer Science (Software Development, Game Design). They focused on managing the documentation for the project and assisted in the concept work for the site</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <img src= {logoL} alt='...' className="about-img"/>
        </div>
        <div class="col-md-8 mb-3">
          <h3>Lainey Wright</h3>
          <h5><ul>Framework Designer</ul><ul>Back-end Programmer</ul></h5>
          <p>Lainey Wright is a Marist College undergratuate who focsued on back-end development of the site. She also created the framework for the front-end and assisted in building the project presentation</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <img src={logoA} alt='...' className="about-img"/>
        </div>
        <div class="col-md-8 mb-3">
          <h3>Andrew Lombardo</h3>
          <h5><ul>Front-end Programmer</ul><ul>Trello Manager</ul></h5>
          <p>Andrew Lombardo is a Sophomore Computer Science/Cyber Security student. Designed the front end of the website, added text to the website and managed the Trello. Assisted in the final presentation</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <img src={logoC} alt='...' className="about-img"/>
        </div>
        <div class="col-md-8 mb-3">
          <h3>Christopher Castillo</h3>
          <h5><ul>Lead Graphic Design</ul><ul>Reservation Programmer</ul></h5>
          <p>Christopher Castillo is a Marist College sophomore majoring in Computer Science with a concentration in Game Design and Programming. On this project, Chris focused on brining the sketchs to life, choosing the color pallets, designing the logos for the site, and touching up the sites asethetic</p>
        </div>
      </div>
      </div>
    </MDBContainer>
  );
}

export default About;
