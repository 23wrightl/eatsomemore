import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Home() {
  return (
    <div>
    <div
        id='intro-example'
        className='p-5 bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')" }}
      >
        <div className='mask p-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='h-100 container d-flex'>
            <div className='d-flex flex-column text-white text-overlay'>
              <div className='mb-3 header-text'>Eat Some More</div>
              <div className='mb-4 subheader-text'>Experience the taste of Italy</div>
              <MDBBtn
                className="m-2 home-btn"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                href='/menu'
              >
                Menu
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      <MDBContainer className='p-5'>
      <h1 className='mb-3 p-3 text-center'>Our Specialities</h1>
      <MDBRow className='mb-5'>
        <MDBCol size='md'>
          <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
          <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
          <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <div className="d-flex justify-content-left">
        <div className="">
          <img src='https://mdbootstrap.com/img/new/standard/nature/184.webp' alt='...' className="map-img"/>
        </div>
        <div className="p-5">
          <h3 className='mb-4'>Our Story</h3>
          <div className="text-left">Text Goes Here</div>
        </div>
        
      </div>
    </MDBContainer>
    </div>
  );
}

export default Home;
