import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <MDBContainer>
      <div className="contact">
      <h1 className='mt-3 mb-3'>Contact Us</h1>
      <div className="row mb-5">
        <div className="col-md-5 mb-3">
          <div>Text Goes Here</div>
        </div>
        <div className="col-md-5 text-center">
          <img src='https://mdbootstrap.com/img/new/standard/nature/184.webp' alt='...' className="map-img"/>
        </div>
      </div>
      </div>
    </MDBContainer>
  );
}

export default Contact;
