import './App.css'

function App() {

  return (
    <main>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor='name'>First Name <span>*</span></label>
        <input type='text' name='name' id='name' autoComplete='given-name'></input>
        <p className='sr-only'>This field is required</p>
        <label htmlFor='Lname' id='labelLname'>Last Name <span>*</span></label>
        <input type='text' name='Lname' id='Lname' autoComplete='family-name'></input>
        <p className='sr-only'>This field is required</p>
        <label htmlFor='email'>Email Address *</label>
        <input type='email' name='email' id='email' autoComplete='email'></input>
        <p className='sr-only'>Please enter a valid email address</p>
        <p className='sr-only'>This field is required</p>
        <fieldset>
          <legend>Query Type <span>*</span></legend>
          <div className='radio'>
          <input type='radio' id='general' name='query' value='General Enquiry'></input>
          <label htmlFor='general'>General Enquiry</label>
          </div>
          <div className='radio' id='div_support'>
          <input type='radio' id='support' name='query' value='Support Request'></input>
          <label htmlFor='support'>Support Request</label>
          </div>
          <p className='sr-only'>Please select a query type</p>
        </fieldset>
        <label htmlFor='message'>Message <span>*</span></label>
        <textarea id='message' name='message' cols={10} rows={10}></textarea>
        <p className='sr-only'>This field is required</p>
        <div className='checkbox'>
        <input type='checkbox' id='consent' name='consent'></input>
        <label htmlFor='consent'>I consent to being contacted by the team</label>
        <p className='sr-only'>To submit this form, please consent to being contacted</p>
        </div>
        <button className='submit'>Submit</button>
      </form>
    </main>
  )
}

export default App
