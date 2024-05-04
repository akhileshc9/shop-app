import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import { cartProduct, removeFromCart } from '../redux/actions/productActions'
function Cart(props) {
    const product = useSelector((state) => state.crtproduct.products)
    const[totalPrice,setTotalPrice]= useState(0)
    const [cart, setCart] = useState([]);

    console.log('Inside Cart',product);
    const {
        title,
        price,
        category,
        image,
        description
    } = product
    const dispatch= useDispatch()
    const {productid} = useParams()
    const remove =(index)=>{
        dispatch(removeFromCart(index))
    }
   useEffect(()=>{
    const newTotalPrice = product.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
   },[product])
    

    
    /* useEffect(() => {
        dispatch(cartProduct(productid))
     }, []) */
  return (
     <div className="ui grid container">
        {product.map((item,index)=>(
            <div key={index} className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image"
                                src={item.image}/>
                        </div>
                        <div className="column rp">
                            <h1>{item.title}</h1>
                            <h2>
                                <a className="ui teal tag label">${item.price}</a>
                            </h2>
                            <h3 className="ui brown block header">
                                {item.category}</h3>
                            
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content" >Place Order</div>
                                
                            </div>
                            <div className='container'>
                            {/* <button onClick={()=>remove(item.id)} className='delete-button'>Delete</button> */}
                            <Button variant="contained" tabIndex={-1} color='error' onClick={()=>remove(item.id)} startIcon={<DeleteIcon />}>Delete</Button>
                            </div>
                        </div>
                       
                        
                    </div>
                    
                    
                </div>
                
            </div>
            
))}
   <div>
    <h2>Total Price: ${totalPrice}</h2>
    </div>
    <Link to='/'>
    <Button variant="contained" tabIndex={-1} color='success' startIcon={<ArrowBackIcon />}>Back to list</Button>
    </Link>
    <Button variant="contained" tabIndex={-1} color='primary' startIcon={<ShoppingCartCheckoutIcon />}>Checkout</Button>
        </div>
  )
}

export default Cart
