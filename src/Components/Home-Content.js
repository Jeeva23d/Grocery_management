
import React from 'react'
import './Home-Content.css'
import { Link } from 'react-router-dom';
export default function Imgcontent(){
    return(
       

        <div style={{
            marginTop:"40px"
        }}>
            <div className='Home-Content-project'>
                <div className='Home-Img'>
                    
                    <h1 className='Home-Img-h1'>Fresh Grocery Items</h1>
                   
                    <p className='Home-Img-p'>Our dedicated team ensure that your grocery items, dairy products, and bakery items,are carefully selected and delived to your home</p>
                    <Link to='/ProductDisplay'><button className='Home-Img-button'>Shop Now </button></Link>
                    <h1 className='Home-diet'>Food Is An Important Part Of A Balanced Diet</h1>
                    <p className='Home-diet-p'>Food plays a crucial role in maintaining a balanced diet. It highlights the importance of consuming a variety of nutritious foods to meet the body's needs for energy, essential nutrients, and overall health. A balanced diet promotes optimal physical and mental well-being.
Food is the foundation of good health, providing vital nutrients for nourishment and well-being.</p>
                   
                </div>

            </div>
        </div>
    );
}