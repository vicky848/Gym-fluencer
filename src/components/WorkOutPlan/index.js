import React from 'react'
import {motion} from 'framer-motion'

import './index.css'

export const WorkOutPlan = () => {
    const workouts = [
        {
          title: "Full-Body Strength Training",
          description:
            "Build strength and endurance with a balanced full-body workout. Target all major muscle groups with exercises designed for maximum efficiency.",
          image: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
          exercises: ["Push-ups: 15 reps", "Pull-ups: 10 reps", "Deadlifts: 3 sets of 12 reps"],
        },
        {
          title: "Yoga for Flexibility",
          description:
            "Enhance your flexibility and find inner peace with guided yoga sessions. Suitable for all levels, from beginners to advanced practitioners.",
          image: "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_1280.jpg",
          exercises: ["Downward Dog: 1 minute", "Warrior II: 30 seconds each side", "Child’s Pose: 2 minutes"],
        },
        {
          title: "Cardio Burn",
          description:
            "Boost your endurance and torch calories with high-intensity cardio workouts designed to challenge your limits.",
          image: "https://cdn.pixabay.com/photo/2016/11/29/03/01/exercise-1866965_1280.jpg",
          exercises: ["Jumping Jacks: 3 minutes", "Mountain Climbers: 1 minute", "Burpees: 15 reps"],
        },
        {
          title: "Core Strength Building",
          description:
            "Strengthen your core with targeted exercises to improve balance, posture, and overall fitness. Perfect for all fitness levels.",
          image: "https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_1280.jpg",
          exercises: ["Plank: 1 minute", "Russian Twists: 20 reps", "Bicycle Crunches: 30 seconds"],
        },
        {
          title: "AI-Powered Fitness Plans",
          description:
            "Experience the future of fitness with AI-designed workout plans tailored to your goals, fitness level, and preferences.",
          image: "https://cdn.pixabay.com/photo/2024/04/17/21/49/ai-generated-8703047_1280.jpg",
          exercises: ["Adaptive Difficulty", "Progress Tracking", "Nutrition Suggestions"],
        },
        {
          title: "Women’s Wellness Workout",
          description:
            "Focus on holistic wellness with workouts crafted to empower women and boost overall health and confidence.",
          image: "https://cdn.pixabay.com/photo/2017/04/25/20/18/woman-2260736_1280.jpg",
          exercises: ["Squats: 15 reps", "Arm Raises: 10 reps", "Low-Impact Cardio: 5 minutes"],
        },
        {
          title: "Personal Trainer Guidance",
          description:
            "Achieve your goals faster with personalized attention from certified trainers. Get customized workout plans and constant motivation.",
          image: "https://cdn.pixabay.com/photo/2022/09/13/07/32/personal-trainer-7451170_1280.jpg",
          exercises: ["Goal Setting", "Real-Time Feedback", "Nutrition Advice"],
        },
        {
          title: "Virtual Trainer Assistance",
          description:
            "Enjoy the convenience of a virtual trainer that monitors your performance and adjusts your workouts in real-time.",
          image: "https://cdn.pixabay.com/photo/2024/05/19/01/36/ai-generated-8771282_1280.png",
          exercises: ["Real-Time Adjustments", "Progress Insights", "Customizable Intensity"],
        },
      ];

  return (
  <div className='main-workout-container'>
    < motion.h1
    initial = {{opacity:0, y:-50}}
    animate = {{opacity:1, y:0}}
    transition = {{duration: 1}}
    
    className='main-workout-heading'>Your Daily Workout Plan</motion.h1>
      <div className='workout-container'>
        
        {workouts.map((workout, index) => (
          <div key={index} className='workout-card'>
            <img src={workout.image} alt={workout.title}  className='workout-image'/>
            <h2 className='workout-heading'>{workout.title}</h2>
            <p className=' workout-text'>{workout.description}</p>
            <div className='workout-exercises'>
              {workout.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className='exercise'>
                  <h3>{exercise.name}</h3>
                  <p>{exercise.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
       
      
    </div>
    <div className='daily-routine'>
      <div className='card-image'>
        <img src='/image/fitness1.png' alt='logo1' className='fitness-image'/>
        <p>Boost your strength and build endurance with targeted weight training exercises.</p>

      </div>
      <div className='card-image'>
        <img src='/image/fitness2.png' alt='logo2' className='fitness-image'/>
        
        <p>Improve your flexibility and relax your mind with daily yoga routines.</p>

      </div>
        
      <div className='card-image'>
        <img src='/image/fitness3.png' alt='logo3' className='fitness-image'/>
        <p>Stay active and burn calories with high-energy cardio workouts.</p>

      </div>
        
      <div className='card-image'>
        <img src='/image/fitness4.png' alt='logo4' className='fitness-image'/>
        <p>Strengthen your core muscles to improve posture and overall stability.</p>

      </div>
        
      <div className='card-image'>
        <img src='/image/fitness5.png' alt='logo5' className='fitness-image'/>
        <p>Achieve your fitness goals with personalized guidance from expert trainers.</p>

      </div>
        
        



    </div>
  </div>
  )
}

export default WorkOutPlan
