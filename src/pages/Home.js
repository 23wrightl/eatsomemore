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
import '../App.css';
import logo from '../img/StoveReal.jpg';
import logoG from '../img/GarlicKnots.jpg'
import logoM from '../img/MozerellaSticks.png' 
import logoS from '../img/Garlic-Lemon-Salmon.jpg'
import logoTwo from '../img/2.png'

function Home() {
  return (
    <div>
    <div
        id='intro-example'
        className='p-5 bg-image'
        style={{ backgroundImage: `url(${logo})`, filter: 'grayscale(100%)', }}
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
          <MDBCardImage className="card-img" src={logoG} position='top' alt='Garlic Knots' />
            <MDBCardBody>
              <MDBCardTitle>Garlic Knots</MDBCardTitle>
              <MDBCardText>
                Fresh Baked Rolls, Garlic, Butter, Parsley, Italian Seasoning
              </MDBCardText>
              <MDBBtn href='#' style={{ backgroundColor: '#f15330', color: 'white' }}>To Menu</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
          <MDBCard>
            <MDBCardImage className="card-img" src={logoM} position='top' alt='Mozzarella Sticks' />
            <MDBCardBody>
              <MDBCardTitle>Mozzarella Sticks</MDBCardTitle>
              <MDBCardText>
               Breading, Mozerella Cheese, Parsley. Served With Marinara Sauce
              </MDBCardText>
              <MDBBtn href='#' style={{ backgroundColor: '#f15330', color: 'white' }}>To Menu</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size='md'>
          <MDBCard>
            <MDBCardImage className="card-img" src={logoS} position='top' alt='Pan-Seared Salmon' />
            <MDBCardBody>
              <MDBCardTitle>Pan-Seared Salmon</MDBCardTitle>
              <MDBCardText>
                Fresh Caught Salmon, Cook In Butter, Garnished With Lemon And Wilted Greens.
              </MDBCardText>
              <MDBBtn href='#' style={{ backgroundColor: '#f15330', color: 'white' }}>To Menu</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <div className="d-flex justify-content-left">
        <div className="">
          <img src={logoTwo} alt='...' className="map-img"/>
        </div>
        <div className="p-5">
          <h3 className='mb-4'>Our Story</h3>
          <div className="text-left">We are an Italian-inspired restaurant, dedicated to creating an authentic and positive restaurant experience for all diners. We use family recipes, passed down between generations, in order to bring a feel of home to your plate.</div>
        </div>
      </div>
    </MDBContainer>
    </div>
  );
}

export default Home;
