import React from "react";
import { Link } from 'react-router-dom'
function Header(props) {
  const addToCart = ()=>{
    console.log('Clicked on cart')
  }
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h3>My E-SHOP</h3>
      </div>
      <div className="cart-container" >
      <Link to="/viewcart" onClick={addToCart}>
        <i class="fas fa-shopping-cart cart-icon"></i>
        <span class="cart-value"></span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
