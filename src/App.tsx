import './App.css'
import { useState } from 'react'
import success from '../public/images/icon-success-check.svg'

function App() {

  const [name, setName] = useState('');
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(e: any) {
    const input = e.target.id;
    const value = e.target.value;
    switch(input) {
      case 'name':
        setName(value);
        break;
      case 'Lname':
        setLname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'general':
        setQuery(value);
        break;
      case 'support':
        setQuery(value);
        break;
      case 'message':
        setMessage(value);
        break;
      case 'consent':
        setConsent(value);
        break;
      default:
        console.log('error');
    }

  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function validate(e: any) {
    e.preventDefault();
    let isValid = false;
    const state = [name, Lname, email, query, message, consent];
    const sName = ['name', 'Lname', 'email', 'query', 'message', 'consent'];
    state.forEach((element, i) =>{
      const eName = sName[i] + '_error';
      const error = document.getElementById(eName);
      const input = document.getElementById(sName[i]);
      if(element === '') {
        error?.classList.remove('vis');
        error?.classList.add('error');
        input?.classList.add('input_error');
      }else{
        error?.classList.remove('error');
        input?.classList.remove('input_error');
        error?.classList.add('vis');
        isValid = true;
      }
    })
    /* handle email validation */
    const value = (document.getElementById('email') as HTMLInputElement).value;
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const valid = regex.test(value);
    const emailError = document.getElementById('valid_email');
    const emptyEmail = document.getElementById('email_error');
    if(valid) {
      emailError?.classList.remove('formatError');
      emailError?.classList.add('vis');
    }else{
      emptyEmail?.classList.remove('error')
      emptyEmail?.classList.add('vis');
      emailError?.classList.remove('vis');
      emailError?.classList.add('formatError');
    }
    /* If all is valid, submit to server and display success message */
    const toast = document.getElementById('toast');
    const validInput = document.getElementsByTagName('input');
    console.log(validInput[0].className);
    for(let i = 0; i < validInput.length; i++) {
      if(validInput[i].className === 'vis') {
        isValid = true;
      }else{
        isValid = false;
      }
    }
    if(isValid) {
      toast?.classList.remove('visually-hidden');
      toast?.classList.add('toast');
    }
  }

 

  return (
    <main>
      <h1>Contact Us</h1>
      <form  action='' method='POST' id='form' name='form'>
        <label htmlFor='name'>First Name <span>*</span></label>
        <input type='text' name='name' id='name' autoComplete='given-name' onChange={handleChange}></input>
        <p className='vis' id='name_error'>This field is required</p>
        <label htmlFor='Lname' id='labelLname'>Last Name <span>*</span></label>
        <input type='text' name='Lname' id='Lname' autoComplete='family-name' onChange={handleChange}></input>
        <p className='vis' id='Lname_error'>This field is required</p>
        <label htmlFor='email'>Email Address *</label>
        <input type='email' name='email' id='email' autoComplete='email' onChange={handleChange}></input>
        <p className='vis' id='valid_email'>Please enter a valid email address</p>
        <p className='vis' id='email_error'>This field is required</p>
        <fieldset>
          <legend>Query Type <span>*</span></legend>
          <div className='radio'>
          <input type='radio' id='general' name='query' value='General Enquiry' onChange={handleChange}></input>
          <label htmlFor='general'>General Enquiry</label>
          </div>
          <div className='radio' id='div_support'>
          <input type='radio' id='support' name='query' value='Support Request' onChange={handleChange}></input>
          <label htmlFor='support'>Support Request</label>
          </div>
          <p className='vis' id='query_error'>Please select a query type</p>
        </fieldset>
        <label htmlFor='message'>Message <span>*</span></label>
        <textarea id='message' name='message' cols={10} rows={10} onChange={handleChange}></textarea>
        <p className='vis' id='message_error'>This field is required</p>
        <div className='checkbox'>
        <input type='checkbox' id='consent' name='consent' onChange={handleChange}></input>
        <label htmlFor='consent'>I consent to being contacted by the team</label>
        </div>
        <p className='vis' id='consent_error'>To submit this form, please consent to being contacted</p>
        <input type='submit' onClick={validate}></input>
      </form>
      <aside className='visually-hidden' id='toast'>
        <div className='toast_img'>
        <img src={success} alt='Check mark in a circle'></img>
        <h2>Message Sent!</h2>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </aside>
    </main>
  )
}

export default App
