import React from "react";
import "./Nav.css";
import logo from "./Logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="Container-Nav" >
      <div className="Nav-Container">
        <div className="Nav-Left">
          <a href="#"><img src={logo} alt="Proglem!!!" className="Nav-Logo" width="100px" ></img></a>
          <h2 className="Nav-Name" >Grocery Store</h2>
        </div>
        <div className="Nav-Right">
          <ul className="Nav-Items ">
            <Link to='/' style={{
              textDecoration: 'none'
            }}><li><a href="#" >HOME</a></li></Link >
            <Link to={'/Login'} style={{
              textDecoration:"none"
            }}><li><a href="#">LOGIN</a></li></Link>
            <li><a href="#">ADMIN</a></li>
            <Link to={'/ProductDisplay'} style={{
              textDecoration:"none"
            }}><li><a href="#">PRODUCTS</a></li></Link>
            <Link to ='/AddtoCartDisplay'><li><a href="#"><FaCartShopping /></a></li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
