import './App.css'

function App() {

  return (
    <main>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor='name'>First Name</label>
        <input type='text' name='name'></input>
        <p className='error'>This field is required</p>
        <label htmlFor='Lname'>Last Name</label>
        <input type='text' name='Lname'></input>
        <p className='error'>This field is required</p>
        <label htmlFor='email'>Email Address</label>
        <input type='email' name='email'></input>
        <p className='formatError'>Please enter a valid email address</p>
        <p className='error'>This field is required</p>
        <fieldset>
          <legend>Query Type</legend>
          <input type='radio' id='general' name='query' value='General Enquiry'></input>
          <label htmlFor='general'>General Enquiry</label>
          <input type='radio' id='support' name='query' value='Support Request'></input>
          <label htmlFor='support'>Support Request</label>
          <p className='error'>Please select a query type</p>
        </fieldset>
        <label htmlFor='message'>Message</label>
        <input type='textarea' name='message'></input>
        <p className='error'>This field is required</p>
        <input type='checkbox' id='consent' name='consent'></input>
        <label htmlFor='consent'>I consent to being contacted by the team</label>
        <p className='error'>To submit this form, please consent to being contacted</p>
        <button className='submit'>Submit</button>
      </form>
    </main>
  )
}

export default App
