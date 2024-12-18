import React from 'react'
import './index.css'

const DietPlan = () => {
    const dietPlans = [
        {
          title: "Balanced Diet Plan",
          description:
            "A mix of proteins, carbohydrates, fats, and essential vitamins to keep your energy levels up and maintain overall health.",
          image:
            "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Protein-Rich Diet Plan",
          description:
            "Focuses on high-protein foods like chicken, fish, and lentils to help in muscle building and repair.",
          image:
            "https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Vegan Diet Plan",
          description:
            "A plant-based meal plan with fresh fruits, vegetables, nuts, and grains to promote a healthier lifestyle.",
          image:
            "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Low-Carb Diet Plan",
          description:
            "Helps reduce body fat by limiting carbs while increasing healthy fats and protein intake.",
          image:
            "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Mediterranean Diet Plan",
          description:
            "Incorporates olive oil, fish, fresh veggies, and whole grains to support heart health and weight management.",
          image:
            "https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Detox Diet Plan",
          description:
            "Flush out toxins with a detoxifying diet rich in fruits, green smoothies, and herbal teas.",
          image:
            "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "Keto Diet Plan",
          description:
            "A low-carb, high-fat diet that helps your body achieve ketosis to burn fat for energy.",
          image:
            "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Smoothie Diet Plan",
          description:
            "A convenient and nutritious option for weight loss, featuring fresh fruits and vegetables blended into delicious smoothies.",
          image:
            "https://images.pexels.com/photos/161440/smoothie-fruit-vegetables-salad-beetroot-carrots-161440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];
    



  return (
    <div className='diet-container'>
        
        <h1 className ='diet-plan-heading'>
            Diet Plans </h1>
            <div className='diet-plan-card'>
                {dietPlans.map((plan, index) => (
                    <div key={index} className='diet-plan'>
                        <img src={plan.image} alt={plan.title} />
                        <h2>{plan.title}</h2>
                        <p>{plan.description}</p>
                    </div>
                ))}


                    
                </div>
        
                <div>
                    

                </div>
                <div className='diet-plan-cta'>
                    <div className='mobile-image-diet-plan'>
                        <img src='/image/diet1.png' alt='mob-logo' className='mob-logo'/>
                        <h1>Balanced Diet Plan</h1>
                        <p>Achieve optimal health with a perfect blend of nutrients, vitamins, and minerals.</p>


                    </div>
                    <div className='mobile-image-diet-plan'>
                        <img src='/image/diet2.png' alt='mob-logo' className='mob-logo'/>
                        <h1>High-Protein Diet</h1>
                        <p>Fuel your fitness goals with protein-rich meals to build strength and energy.</p>  
       
                  
                    </div>
                    <div className='mobile-image-diet-plan'>
                        <img src='/image/diet3.png' alt='mob-logo' className='mob-logo'/>
                        <h1>Vegan Diet Plan</h1>
                        <p>Embrace a healthier lifestyle with plant-based meals packed with nutrients.</p>


                    </div>
                   

                    



            </div>
            

            </div>
       
    
  )
}
export default DietPlan
