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
          <div className='fw-bold'>Garlic Knots</div>Fresh Baked Rolls, Garlic, Butter, Parsley, Italian Seasoning
        </div>
        <MDBBadge pill light>
          $3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Bread Sticks</div>Freshed Baked Bread, Served With Butter
        </div>
        <MDBBadge pill light>
          $3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Mozzarella Sticks</div>Breading, Mozerella Cheese, Parsley. Served With Marinara Sauce
        </div>
        <MDBBadge pill light>
          $3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Soup Of The Day</div>Ask Your Server
        </div>
        <MDBBadge pill light>
          $3
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Arancini</div>Breaded Outside Stuffed With Beef, Caciocavallo Cheese, Peas
        </div>
        <MDBBadge pill light>
          $4
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Supplì</div>Egg and Breaded Outside, Stuffed With Risotto Rice, Tomato Sauce, Mozzarella Cheese
        </div>
        <MDBBadge pill light>
          $4
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="pasta">Build Your Own Pasta</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Noodle Type</div>
            <div classname="mdb-pasta-item">Spaghetti</div>
            <div classname="mdb-pasta-item">Rigatoni</div>
            <div classname="mdb-pasta-item">Penne</div>
            <div classname="mdb-pasta-item">Cavatelli</div>
            <div classname="mdb-pasta-item">Elbow</div>
        </div>
        <MDBBadge pill light>
          Base $10
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sauce</div>
            <div classname="mdb-pasta-item">Meat Sauce</div>
            <div classname="mdb-pasta-item">Alfrado</div>
            <div classname="mdb-pasta-item">Pesto</div>
            <div classname="mdb-pasta-item">Alforno</div>
            <div classname="mdb-pasta-item">Tomato</div>
        </div>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="pizza">Build Your Own Pizza</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Dough Type</div>
            <div classname="mdb-pasta-item">Neapolitan</div>
            <div classname="mdb-pasta-item">New York Style</div>
            <div classname="mdb-pasta-item">Sourdough</div>
            <div classname="mdb-pasta-item">Gluton Free</div>
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
            <div classname="mdb-pasta-item">Marinara</div>
            <div classname="mdb-pasta-item">Alfredo</div>
            <div classname="mdb-pasta-item">Pesto</div>
            <div classname="mdb-pasta-item">Buffalo Chicken</div>
        </div>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Toppings</div>
          <div classname="mdb-pasta-item">Cheese</div>
            <div classname="mdb-pasta-item">Pepperoni</div>
            <div classname="mdb-pasta-item">Mushroom</div>
            <div classname="mdb-pasta-item">Sausage</div>
            <div classname="mdb-pasta-item">Onion</div>
            <div classname="mdb-pasta-item">Ham</div>
            <div classname="mdb-pasta-item">Veggie</div>
        </div>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="apps">Entrees</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Pan-Seared Fish</div> Fresh Caught Salmon, Cook In Butter, Garnished With Lemon And Wilted Greens.
        </div>
        <MDBBadge pill light>
          $20
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Filet Mignon</div>Seared In Butter, Olive Oil
        </div>
        <MDBBadge pill light>
          $30
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Chicken Parmigiana</div>Breading, Parmesan Cheese, Garlic Powder, Italian Seasoning, Served With Green Beans, Mushrooms, Mash Potatos 
        </div>
        <MDBBadge pill light>
          $20
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
    <h5 className='mt-3 mb-3' id="drinks">Drinks</h5>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Soda</div>
            <div classname="mdb-pasta-item">Sprite</div>
            <div classname="mdb-pasta-item">Pepsi</div>
            <div classname="mdb-pasta-item">Fanta</div>
            <div classname="mdb-pasta-item">Coca-Cola</div>
        </div>
        <MDBBadge pill light>
          $4
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Water</div>Tap
        </div>
        <MDBBadge pill light>
          $2
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Wine</div>
            <div classname="mdb-pasta-item">Pinto Grigio</div>
            <div classname="mdb-pasta-item">Pinot Noir</div>
            <div classname="mdb-pasta-item">Red</div>
            <div classname="mdb-pasta-item">Merlot</div>
        </div>
        <MDBBadge pill light>
          $12
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Margarita</div>Tequilla, Tripple Sec, Lemon-Lime
        </div>
        <MDBBadge pill light>
          $14
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
    </div>
    </MDBContainer>
  );
}

export default Menu;
