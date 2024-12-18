import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import './About.css'
export default function Footer(){
    return(
        <>
        <div className='Outer-Container'>
            <br></br>
           <hr ></hr>
            <div className='Footer-Container'>
                <div className='Footer-About'>
                    <ul>
                        <li>About US</li>
                        <li>Our Company</li>
                        <li>Our Items</li>
                        <li>Stories and News</li>
                        <li>Customer Service</li>
                        <li>Contact Us</li>
                        <li>Investor Realtions</li>
                       
                    </ul>

                </div>

                <div className='Footer-Careers'>
                    <ul>
                        <li>Careers</li>
                        <li>Culture and Values</li>
                        <li>Inclusion Equity</li>
                        <li>College Achievement Plan</li>
                        <li>Alumni Community</li>
                        <li>U.S.Careers</li>
                        <li>International Careers</li>
                    </ul>

                </div>


                <div className='Footer-Social'>
                    <ul>
                        <li>Social Impact</li>
                        <li>People</li>
                        <li>Planet</li>
                        <li>Environmental and Social Impact Reporting</li>
                        
                    </ul>

                </div>


                <div className='Footer-Business'>
                    <ul>
                        <li>For Business Partners</li>
                        <li>Support Center</li>
                        <li>Gift Card Sales</li>
                        <li>Office</li>
                    </ul>

                </div>


                <div className='Footer-Order'>
                    <ul>
                        <li>Orders</li>
                        <li>Order on the Web</li>
                        <li>Delivery</li>
                        <li>Order and Pick up Options</li>
                        <li>Feedback About Us</li>
                    </ul>

                </div>


            </div>
            <br></br>
            <hr></hr>
            <br></br>

        </div>
        <div className='Footer-Icons' >
            <IoLogoWhatsapp size={40}/>
            <FaFacebook size={40} />
            <AiFillInstagram size={40}/>
            <ImYoutube size={40}/>
            <FaTwitter size={40}/>

        </div>
        <br></br>

        <div className='Footer-CopyRights'>
        <p> &copy;2023 Grocery Managemant Company.All rights reserved</p>
        </div>

    </>   
    )
}