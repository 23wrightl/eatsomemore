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
        <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label class="form-check-label" for="inlineRadio1">6:00PM</label>
      </div>

      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        <label class="form-check-label" for="inlineRadio2">7:00PM</label>
      </div>

      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
        <label class="form-check-label" for="inlineRadio3">8:00PM</label>
      </div>

      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label class="form-check-label" for="inlineRadio1">9:00PM</label>
      </div>

      <div class="form-check form-check-inline mb-4">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        <label class="form-check-label" for="inlineRadio2">10:00PM</label>
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
