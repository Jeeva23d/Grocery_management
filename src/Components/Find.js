import { useParams } from "react-router-dom";
import logoFind from "./Logo.png";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Find.css";

import { ProductItems } from "./Items";
import {addTocartArray} from './Items'
import { useState } from "react";

export default function Find() {
  const { id } = useParams();
  

const[qua,SetQua] = useState(ProductItems);
const addToCart = ((i)=>{
  if(!(addTocartArray.includes(i))){
     addTocartArray.push(i);
     console.log(addTocartArray);
  }
  
  
  })

  //Increment
  const Increment = (id)=>{
    let total;
    const i = ProductItems.filter((value)=>{
      if( value.id===id){
        
          if(value.count<10){
              value.count = value.count+1
          }
        total = value.price
        total = total*value.count
        value.total = total
        
      }
    })
    SetQua(i)
   
   }

   //Decrement
   const Decrement = (id)=>{
    let total;
    const i = ProductItems.filter((value)=>{
      if( value.id===id){

        if(value.count>1){
          value.count = value.count-1
      }
      total = value.price
      total = total*value.count
      value.total = total
         
      }
    })
    SetQua(i)
   
   }
  

  return (
    <>
      <div className="Find-Container">
        <div className="Find-NavBar">
          <img src={logoFind} className="Find-NavBar-Image"></img>
          <ul className="Find-Buttons">
            <Link
              to={"/ProductDisplay"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <li>Products</li>
            </Link>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/Login"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <li>Login</li>
            </Link>
          </ul>
          <Link
            to="/AddtoCartDisplay"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <FaOpencart className="Find-Cart" size={35} />
          </Link>
        </div>
        {ProductItems.map((items) => {
          if (items.id == id) {
            return (
              <div className="Find-Content-Container">
                <div className="Find-LeftSide">
                  <div className="Find-LeftSide-Content">
                    <div className="Find-Img">
                      <img src={items.src} width={400} height={400}></img>
                    </div>
                    <div className="Find-describe">
                      <div>
                        <p className="Find-describe-Heading">{items.name}</p>
                        <hr />
                        <p className="Find-descibe-describe">
                         {items.describe}
                        </p>
                        <p className="Find-describe-price">
                          Price: {items.price}
                        </p>
                        <hr />
                        <div className="Find-Quantity">
                          <p className="Find-quantity-qty">Qty</p>
                          <button className="Find-btn-Left"  onClick={()=>Increment(items.id)}>+</button>
                          <p className="Find-count">{items.count}</p>
                          <button className="Find-btn-Right" onClick={()=>Decrement(items.id)}>-</button>
                        </div>
                        <div className="Find-Add-to-cart">
                          <button  onClick={()=>addToCart(items)}>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
