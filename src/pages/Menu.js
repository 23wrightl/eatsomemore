import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBContainer } from 'mdb-react-ui-kit';

function Menu() {
  return (
    <MDBContainer>
    <div className="menu">
    <h1>Full Menu</h1>
    <h5 className='mt-3 mb-3' id="apps">Appetizers</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Food Name</div>Food Description
        </div>
        <MDBBadge pill light>
          Price
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="pasta">Build Your Own Pasta</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Noodle Type</div>Options (+$---)
        </div>
        <MDBBadge pill light>
          Base $-
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sauce</div>Options (+$---)
        </div>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="pizza">Build Your Own Pizza</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Dough Type</div>Options (+$---)
        </div>
        <MDBBadge pill light className='me-2'>
          Base $- (9")
        </MDBBadge>
        <MDBBadge pill light className='ms-2 me-2'>
          Base $- (12")
        </MDBBadge>
        <MDBBadge pill light className='ms-2'>
          Base $- (15")
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sauce Type</div>Options (+$---)
        </div>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Toppings</div>Options (+$---)
        </div>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="drinks">Drinks</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Food Name</div>Food Description
        </div>
        <MDBBadge pill light>
          Price
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
    </div>
    </MDBContainer>
  );
}

export default Menu;
