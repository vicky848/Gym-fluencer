import React from 'react'
import './index.css'
export const NotFound = () => {
  return (
    <div className='not-found-container'>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <img src='/image/notfound.jpg' alt='not-found' className='not-found-image'/>
      <br/> <br/>
      <a href='/'>Go back to home</a>

    </div>
  )
}
export default NotFound