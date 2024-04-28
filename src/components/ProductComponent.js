import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, setProducts } from '../redux/actions/productActions'


function ProductComponent(props) {
    const products = useSelector(state=>state.allproducts.products)
    const renderList = products.map((product)=>{
      const{
        id,
        title,
        image,
        price,
        category
      }=product
    
    //const{id,productName,category}=data[0]
    
    //console.log(data)
    
  return (
    <div className="four wide column">
      <Link to={`/productdetails/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                      <img src={image}></img>
                    </div>
                    <div className="content">
                     
                      
                        <div className="header">
                          {title}
                          
                            </div>
                          <div className='meta price'>${price}</div> 
                          <div className='meta'>{category}</div>
                    </div>
                </div>
            </div>

            </Link>
        </div>
  )
})
return <>{renderList}</>
}

export default ProductComponent
