import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBContainer } from 'mdb-react-ui-kit';
import '../App.css';

function Menu() {
  return (
    <MDBContainer>
    <div className="menu">
    <h1>Full Menu</h1>
    <h5 className='mt-3 mb-3' id="apps">Appetizers</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Garlic Knots</div>Food Description
        </div>
        <MDBBadge pill light>
          3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Bread Sticks</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Mozzarella Sticks</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Soup Of The Day</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Arancini</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Supplì</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          3
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="pasta">Build Your Own Pasta</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Noodle Type</div>
            <div classname="mdb-pasta-item">Spaghetti (2)</div>
            <div classname="mdb-pasta-item">Rigatoni (3)</div>
            <div classname="mdb-pasta-item">Penne (2)</div>
            <div classname="mdb-pasta-item">Cavatelli (2)</div>
            <div classname="mdb-pasta-item">Elbow (2)</div>
        </div>
        <MDBBadge pill light>
          Base 10
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sauce</div>
            <div classname="mdb-pasta-item">Meat Sauce (2)</div>
            <div classname="mdb-pasta-item">Alfrado (3)</div>
            <div classname="mdb-pasta-item">Pesto (2)</div>
            <div classname="mdb-pasta-item">Alforno (2)</div>
            <div classname="mdb-pasta-item">Tomato (2)</div>
        </div>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="pizza">Build Your Own Pizza</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Dough Type</div>
            <div classname="mdb-pasta-item">Neapolitan (2)</div>
            <div classname="mdb-pasta-item">New York Style (3)</div>
            <div classname="mdb-pasta-item">Sourdough (2)</div>
            <div classname="mdb-pasta-item">Gluton Free (2)</div>
        </div>
        <MDBBadge pill light className='me-2'>
          Base $12 (9")
        </MDBBadge>
        <MDBBadge pill light className='ms-2 me-2'>
          Base $15 (12")
        </MDBBadge>
        <MDBBadge pill light className='ms-2'>
          Base $18 (15")
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sauce Type</div>
            <div classname="mdb-pasta-item">Marinara (2)</div>
            <div classname="mdb-pasta-item">Alfredo (3)</div>
            <div classname="mdb-pasta-item">Pesto (2)</div>
            <div classname="mdb-pasta-item">Buffalo Chicken (2)</div>
        </div>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Toppings</div>
          <div classname="mdb-pasta-item">Cheese (2)</div>
            <div classname="mdb-pasta-item">Pepperoni (3)</div>
            <div classname="mdb-pasta-item">Mushroom (2)</div>
            <div classname="mdb-pasta-item">Sausage (2)</div>
            <div classname="mdb-pasta-item">Onion (2)</div>
            <div classname="mdb-pasta-item">Ham (2)</div>
            <div classname="mdb-pasta-item">Veggie (3)</div>
        </div>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="drinks">Drinks</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Soda</div>
          `<div classname="mdb-pasta-item">Sprite</div>
            <div classname="mdb-pasta-item">Pepsi</div>
            <div classname="mdb-pasta-item">Fanta</div>
            <div classname="mdb-pasta-item">Coca-Cola</div>
        </div>
        <MDBBadge pill light>
          4
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Water</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          2
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Wine</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          12
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Margarita</div>Cras justo odio
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
