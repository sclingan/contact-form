import './App.css'
import { validate } from './validate'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('');
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState('');

  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }

 

  return (
    <main>
      <h1>Contact Us</h1>
      <form  action='' method='POST' id='form' name='form'>
        <label htmlFor='name'>First Name <span>*</span></label>
        <input type='text' name='name' id='name' autoComplete='given-name' onChange={handleChange}></input>
        <p className='vis' id='name_error'>This field is required</p>
        <label htmlFor='Lname' id='labelLname'>Last Name <span>*</span></label>
        <input type='text' name='Lname' id='Lname' autoComplete='family-name'></input>
        <p className='vis' id='Lname_error'>This field is required</p>
        <label htmlFor='email'>Email Address *</label>
        <input type='email' name='email' id='email' autoComplete='email'></input>
        <p className='formatError'>Please enter a valid email address</p>
        <p className='vis' id='email_error'>This field is required</p>
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
          <p className='vis' id='query_error'>Please select a query type</p>
        </fieldset>
        <label htmlFor='message'>Message <span>*</span></label>
        <textarea id='message' name='message' cols={10} rows={10}></textarea>
        <p className='vis' id='message_error'>This field is required</p>
        <div className='checkbox'>
        <input type='checkbox' id='consent' name='consent'></input>
        <label htmlFor='consent'>I consent to being contacted by the team</label>
        </div>
        <p className='vis' id='consent_error'>To submit this form, please consent to being contacted</p>
        <input type='submit'></input>
      </form>
    </main>
  )
}

export default App
