import React, { useState } from 'react'
import './Navbar.css'
import  logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
function Navbar() {
    const [menu ,setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
        <Link to={"/"}><li onClick={(e)=>{setMenu(e.target.id)}} id='shop'>Shop {menu==="shop"?(<hr/>):(<></>)}</li></Link> 
        <Link to={"/mens"}>   <li onClick={(e)=>{setMenu(e.target.id)}} id='men'>Men {menu==="men"?(<hr/>):(<></>)}</li></Link> 
        <Link to={"/womens"}> <li onClick={(e)=>{setMenu(e.target.id)}} id='women'>Women{menu==="women"?(<hr/>):(<></>)}</li></Link>    
        <Link to={"/kids"}><li onClick={(e)=>{setMenu(e.target.id)}} id='kids'>Kids {menu==="kids"?(<hr/>):(<></>)}</li></Link>    
        </ul>
        <div className="nav-login-cart">
         <Link to={"/login"}>  <button>Login</button></Link> 
           <Link to={"/cart"}> <img src={cart_icon} alt="cart" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
