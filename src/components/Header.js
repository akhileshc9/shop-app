import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Icon } from "@mui/material";
function Header(props) {
  const products = useSelector(state=>state.crtproduct.products)
  const addToCart = ()=>{
    console.log('Clicked on cart')
  }
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to='/'>
        <h3>My E-SHOP</h3>
        </Link>
      </div>
      <div className="cart-container" >
      <Link to="/viewcart" onClick={addToCart}>
      <i className="fas fa-shopping-cart cart-icon"></i>
        <span className="cart-value">{products.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
