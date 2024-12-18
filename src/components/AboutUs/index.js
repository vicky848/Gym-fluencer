import React from 'react'
import './index.css'

export const AboutUs = () => {
  return (
    <div className='about-container'>
      <h1>About Us</h1>
      <p className="about-description">
        Welcome to FitLife, your ultimate destination for achieving your fitness goals.<br/> At FitLife, we believe in empowering individuals to lead healthier, happier lives through personalized fitness solutions.<br/> Our mission is to create a supportive community that inspires you to push boundaries, overcome challenges, and embrace a sustainable fitness journey.
      </p>
      <h2 className="about-subheading">Our Vision</h2>
      <p className="about-description">
        To redefine fitness by promoting physical and mental well-being, <br/>encouraging balanced nutrition, and fostering a lifestyle of holistic health.
      </p>
      <h2 className="about-subheading">Why Choose Us?</h2>
      <ul className="about-list">
        <li>Experienced trainers and personalized workout plans</li>
        <li>State-of-the-art facilities and equipment</li>
        <li>A community that motivates and supports your journey</li>
        <li>Comprehensive diet plans tailored to your needs</li>
      </ul>
      <p className="about-description">
        Join us today and take the first step towards a fitter, stronger you!
      </p>
       



    </div>
  )
}

export default AboutUs