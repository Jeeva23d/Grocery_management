import "./addTocartPage.css";
import { RiCloseCircleFill } from "react-icons/ri";
import {addTocartArray} from './Items'
import {ProductItems} from './Items'
import { useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaFaceSadCry } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function PrintAddtocart() {
  
    const c = [];
     ProductItems.map((index)=>{

     for(let i=0;i<addTocartArray.length;i++){

        if(addTocartArray[i]===index){

            {!(c.includes(index)) && c.push(index)}

            console.log(index);
        }
     }
     })
    const[Arr,SetArray] = useState(addTocartArray);
     const [quantaty,setQuantaty] = useState(Arr)

     //Remove Cart

   function CartRemove(i,k)
   {
       let newArr=Arr.filter((index)=>
       {
        index.count=1;
        return i!==index.id;
       })
       SetArray(newArr);
       addTocartArray.splice(k,1);
       
   }

    //Increment Product
     const Increment = (id)=>{
      let total;
      const i = Arr.filter((value)=>{
        if( value.id===id){
          
            if(value.count<10){
                value.count = value.count+1
            }
          total = value.price
          total = total*value.count
          value.total = total
          
        }
      })
      setQuantaty(i)
     
     }

     //Decrement Product
     const Decrement = (id)=>{
      let total;
      const i = Arr.filter((value)=>{
        if( value.id===id){

          if(value.count>1){
            value.count = value.count-1
        }
        total = value.price
        total = total*value.count
        value.total = total
           
        }
      })
      setQuantaty(i)
     
     }
    

     let sum = 0;
     const val = addTocartArray.map((i)=>{
      sum+=i.total;
     })


  return (
    <>
    {Arr.length!=0 ?
      <div className="addTocart-Container">
        <div className="addTocart-left">
          {Arr.map((items) => {
            return (
              <div className="Cart-Container">
                
                <div className="Cart-Items">
                  <div className="Cart-Img">
                    <img src={items.src} className="Cart-Img-Display"></img>
                    <p className="Cart-Name-Display">Product Name: {items.name} </p>
                  </div>
                  <div className="Cart-Price">
                    <p className="Cart-Price-Display">Price: {items.price}</p>
                  </div>
                  <div className="Cart-Quantity">
                    <p className="Cart-Quantity-Name">Quanitity</p>
                    <div
                      style={{
                        display: "flex",
                        marginBottom: "20px",
                        border: "2px solid black",
                        height: "34px",
                        borderRadius: "3px",
                      }}
                    >
                      <button
                        style={{
                          width: "40px",
                          border: "none",
                          height: "30px",
                          padding: "1px",
                          marginRight: "5px",
                          opacity: "0.8",
                          backgroundColor: "aliceblue",
                        }} onClick={()=>Decrement(items.id)}
                      >
                        -
                      </button>
                      <p>{items.count}</p>
                      <button
                        style={{
                          width: "40px",
                          border: "none",
                          height: "30px",
                          padding: "1px",
                          marginLeft: "5px",
                          backgroundColor: "aliceblue",
                          fontWeight: "600",
                        }} onClick={()=>Increment(items.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-Total-Price">
                    <RiCloseCircleFill
                      size={35} role="button"
                      className="Cart-Close-Button"
                      onClick={()=>CartRemove(items.id,Arr.indexOf(items))}
                    />
                    
                    <p className="Cart-Total-Display">Total : {items.total}<hr></hr></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="addTocart-right">
          <div className="addTocart-Summary">
            <h1 className="Summary-Name">Summary</h1>

            <div className="Subtotal">
              <p className="Subtotal-Name">SubTotal</p>
              <p className="Subtotal-Amount">2000</p>
            </div>
            <div className="Discount">
              <p className="Discount-Name">Discount</p>
              <p className="Discount-Price">-200</p>
            </div>
            <div className="Shipping-Charges">
              <p className="Shipping-Charges-Name">Shipping Charges</p>
              <p className="Shipping-Charges-Price">50.0</p>
            </div>
            <div className="Tax">
              <p className="Tax-Name">Tax</p>
              <p className="Tax-Amount">0.0</p>
            </div>
            <hr />

            <div className="Amount-Topay">
              <div className="Total">
                <p className="Total-Amount-Name">Amount</p>
                <p className="Total-Amount-Topay">{sum}</p>
              </div>
            </div>
            <div className="Summary-CheckOut">
             <Link to={"/Checkoutcart"}><button>Check Out</button></Link> 
            </div>
          </div>
        </div>
      </div> : <div className="Cart-Empty">
                   <div className="Empty-Container">

                   <MdRemoveShoppingCart size={250} className="EmptyCart-Image"/>
                   <p className="EmptyCart-Para">Your cart is empty!!! <FaFaceSadCry /></p>

                   </div>
               </div>}
               
    </>
    
  );
}

