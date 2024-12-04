import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBInput,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';
import '../App.css';

function Reserve() {
  return (
    <MDBContainer>
    <div className="reserve">
      <h1 className='text-left'>Reserve a Table Now</h1>
      <form className="mt-3 mb-3">
      <MDBInput id="typeText" type="text" wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput  id="typePhone" type="tel" wrapperClass='mb-4' label='Phone #' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Additional Needs:' />
      <div id='helperTextExample' className='form-helper mb-4'>
        Choose a time for your reservation
      </div>
      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input " type="radio" name="6pm" id="6pm" value="6pm" />
        <label class="form-check-label" for="6pm">6:00PM</label>
      </div>

      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input" type="radio" name="7pm" id="7pm" value="7pm" />
        <label class="form-check-label" for="7pm">7:00PM</label>
      </div>

      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input" type="radio" name="8pm" id="8pm" value="8pm" />
        <label class="form-check-label" for="8pm">8:00PM</label>
      </div>

      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input" type="radio" name="9pm" id="9pm" value="9pm" />
        <label class="form-check-label" for="9pm">9:00PM</label>
      </div>

      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input" type="radio" name="10pm" id="10pm" value="10pm" />
        <label class="form-check-label" for="10pm">10:00PM</label>
      </div>
      <MDBBtn type='submit' className='mb-4' block style={{ backgroundColor: '#f15330', color: 'black', fontWeight: 'bold' }}>
        Reserve
      </MDBBtn>
    </form>
    </div>
    </MDBContainer>
  );
}

export default Reserve;
