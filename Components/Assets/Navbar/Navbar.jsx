import React, {useState} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import cart_icon from '../cart_icon.png'
const Navbar = () => {
  const [menu,setMenu] = useState();
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
      <Link style={{textDecoration:'none'}}to='/'><li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li></Link>
      <Link style={{textDecoration:'none'}}to='/mens'><li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li></Link>
      <Link style={{textDecoration:'none'}}to='/womens'><li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li></Link>
      <Link style={{textDecoration:'none'}}to='/kids'><li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li></Link>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
