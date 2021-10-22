import React from 'react'
import Products from '../data'
const Cart = () => {
    return (
        <>
 {
Products.map(product =>{
    return (
        <div className="container-fluid bg-dark">
        <div className="row">
  
          <div className="col-md-10 mx-auto d-flex  justify-content-center m-3 ">
<div className="card    " style={{ width: '18rem' }} >
  <img src={product.url} className="card-img-top" alt="hello" />
  <div className="product-name"> <strong>Title :  {product.Product_title} </strong> </div>
                        <div className="product-des"> <strong>Color :</strong>{product.description}</div>
                        <div className="product-price"> <strong>Price :</strong>{product.price}</div>
                        <div className="product-rating"> <strong>Rating :</strong>{product.rating}</div>
  </div>

              </div>
              </div>
              </div>
    )
})
        }

        </>
    )
}

export default Cart

