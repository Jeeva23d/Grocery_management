import { PiCarProfileFill } from "react-icons/pi";
import { TbGiftFilled } from "react-icons/tb";
import './Checkout.css'
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
export default function Checkoutcart(){
    return(
        <div>
            <div className="CheckOut-Outer-Container">
                <div className="CheckOut-inner-Container">
                    <h1 className="checkout-Heading">Grocery</h1>
                    <hr></hr>
                    <div className="Returning-cus">
                        <div className="color"></div>
                        <div className="Returning-customer-link"><PiCarProfileFill /> Returning Customer?<Link>Click here to login</Link></div>
                    </div>
                    <br></br>
                    <div className="Coupans">
                        <div className="color"></div>
                        <div className="Have-a-coupan"><TbGiftFilled /> Have a coupan? <Link>Click here to enter your code</Link></div>
                    </div>
                    <br></br>
                    <h1 className="Checkout-BellingDetails-Heading">Billing details</h1>
                    <div className="checkout-Belling-inputs">
                    <div className="Checkout-input-names">
                        <div>
                            <label for="checkout-FirstName">Firstname</label><br></br>
                            <input type="text" id="Checkout-FirstName" className="Checkout-FirstName"/>
                        </div>
                        <div>
                            <label for="">Last name</label><br></br>
                            <input type="text" id="Checkout-LastName" className="Checkout-LastName"/>
                        </div>
                    </div>
                    <div className="Checkout-CompanyName-input">
                        <label for="Checkout-CompanyName">Company name</label><br></br>
                        <input type="text" id="Checkout-CompanyName" className="Checkout-CompanyName"/>
                    </div>
                    <div className="CheckOut-SelectCountry">
                        <label>District</label><br></br>
                        <select className="Select-country" >
                            <option>Select a District</option>
                            <option>Virudhunagar</option>
                            <option>Karur</option>
                            <option>Salem</option>    
                        </select>
                    </div>
                    <div className="CheckOut-Address">
                        <label>Street Address</label>
                        <input type="text" placeholder="House number and street name"/>
                        <input type="text" placeholder="Apartment,suit,unit,etc(optional)"/>
                    </div>
                    <div className="Checkout-City">
                        <label>Town/City</label><br/>
                        <input type="text" />
                    </div>
                    <div className="CheckOut-State">
                        <label>State</label><br></br>
                        <select>
                            <option>Select an option</option>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                    <div className="CheckOut-ZipCode">
                        <label>Zip code</label><br></br>
                        <input type="text"></input>
                    </div>
                    <div className="CheckOut-Phone">
                        <label>Phone</label><br></br>
                        <input type="text" ></input>
                    </div>
                    <div className="CheckOut-Email">
                        <label>Email</label><br></br>
                        <input type="email"></input>
                    </div>
                    <div className="CheckOut-Password">
                        <label >Password</label><br></br>
                        <input type="password"></input>
                    </div>




                    </div>


                </div>

            </div>

        </div>
    )
}