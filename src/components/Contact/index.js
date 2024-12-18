import React from 'react'
import './index.css'

 const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Contact</h2>
      <p>Please feel free to reach out to me at:</p>
      <ul>
        <li>Email: john.doe@example.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>
      <p>Or you can visit my website at <a href='https://www.example.com'>example.com</a></p>
      {/* Add form for contact submission */}
      <form>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Message' />
        <button type='submit'>Submit</button>
        </form>
        


    </div>
     
  )
}

export default Contact