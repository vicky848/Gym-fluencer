import React from 'react'
import {motion} from 'framer-motion'
import './index.css'
import WorkOutPlan from '../WorkOutPlan'
import DietPlan from '../DietPlan'

export const Home = () => {
  return (
   <>
    <div className='home-container'>
        
   
        <div className='home-card'>
          < motion.h1 
          initial = {{opacity:0, y:-50}}
          animate = {{opacity:1, y:0}}
          transition = {{duration: 1}}
          className='home-heading'>Transform Your Body, Transform Your Life</motion.h1>
          < motion.h2 
          initial = {{opacity:0, y:50}}
          animate = {{opacity:1, y:0}}
          transition = {{duration: 1.2,delay:0.5 }}
          
          className='home-sub-heading'>Achieve Your Fitness Goals with Us</motion.h2>
          <motion.p
          initial = {{opacity:0, y:50}}
          animate = {{opacity:1, y:0}}
          transition = {{duration: 1.4, delay:0.8 }}
  
          
          
          
          className='home-description'>Join our state-of-the-art fitness center and experience a holistic approach to health and wellness. <br/>
               Whether you're a beginner or a seasoned athlete, 
              we provide the perfect environment to help you succeed.</motion.p>
  
                 <motion.button 
                  initial = {{opacity:0, y:50}}
                  animate = {{opacity:1, y:0}}
                  transition = {{duration: 1.6, delay:1.1 }}
                  
                  onClick={() => alert('Button Clicked!')}
  
                 
                 
                 
                 
                 className='home-button'>Book Now</motion.button>
  
        </div>
       
  
  
      </div>
   
    <WorkOutPlan/>
    <DietPlan/>
    
   </>
  )
}

export default Home