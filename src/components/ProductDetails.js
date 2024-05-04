import React, {useEffect,useState} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {selectedProduct, fetchProduct, cartProduct} from '../redux/actions/productActions';

function ProductDetails(props) {
    const product = useSelector((state) => state.product)
    const [message, setMessage] = useState('');
    const {
        title,
        price,
        category,
        image,
        description
    } = product
    const dispatch = useDispatch()
    const {productid} = useParams()
    const cartClick=()=>{
        const prod =dispatch(cartProduct(productid))
        setMessage('Added to cart..!!')

    }
    
    useEffect(() => {
       dispatch(fetchProduct(productid))
    }, [])


    return (
        <div className="ui grid container">
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image"
                                src={image}/>
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">
                                {category}</h3>
                            <p>{description}</p>
                            <p style={{color:'red'}}>{message}</p>
                            <Link to='/viewcart'>
                            <div className="ui vertical animated button" tabIndex="0" onClick={cartClick}>
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content" >Add To Cart</div>
                                
                            </div>
                            </Link>
                        </div>


                    </div>


                </div>

            </div>

        </div>
    );
}

export default ProductDetails;
