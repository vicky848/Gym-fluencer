import React from 'react'
import './index.css'

const MembershipPlan = () => {
  return (
    <div className='membership-container'>
      <h1>Membership Plans</h1>
      <p>Select a plan to get started:</p>
      <div>
        <button>Basic Plan</button>
        <button>Standard Plan</button>
        <button>Premium Plan</button>
      </div>
      <p>Monthly charges: $9.99</p>
      <p>Annual charges: $99.99</p>
      <p>Additional features: Unlimited access, priority support, and exclusive content</p>
      <p>Contact our sales team at <a href="mailto:sales@example.com">sales@example.com</a> for more information.</p>
      <p>Already a member? <a href="/">Log in</a></p>

    </div>
  )
}

export default MembershipPlan