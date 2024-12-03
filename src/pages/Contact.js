import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer } from 'mdb-react-ui-kit';
import '../App.css';
import logo from '../img/Location.png'

function Contact() {
  return (
    <MDBContainer>
      <div className="contact">
      <h1 className='mt-3 mb-3'>Contact Us</h1>
      <div className="row mb-5">
        <div className="col-md-5 mb-3">
          <div>eatsomemore@marist.edu (203) 999-9999</div>
          <p></p>
          <div>6 Gourd Lake</div>
          <p></p>
          <div>Hours:</div>
          <div>Monday - Friday: 12 - 11 </div>
          <div>Saturday: 10 - 11</div>
          <div>Sunday: 2 - 10</div>
        </div>
        <div className="col-md-5 text-center">
          <img src={logo} alt='...' className="map-img"/>
        </div>
      </div>
      </div>
    </MDBContainer>
  );
}

export default Contact;
