import React from 'react'

const Item = ( {Product_title,url,description,price,rating}) => {
    return (
          <div className="container-fluid bg-dark ">
            <div className="row">
              <div className="col-md-10 mx-auto d-flex justify-content-center   m-3 ">
                <div className="card align-items-center "  style={{ width: "20rem"   }}>
                  <img
                    src={url}
                    className="card-img-top"
                    alt={Product_title}
                  ></img>
                  <div className="product-name">
                    {" "}
                    <strong>Title : {Product_title} </strong>{" "}
                  </div>
                  <div className="product-des">
                    {" "}
                    <strong>Color :</strong>
                    {description}
                  </div>
                  <div className="product-price">
                    {" "}
                    <strong>Price :</strong>
                    {price}
                  </div>
                  <div className="product-rating">
                    {" "}
                    <strong>Rating :</strong>
                    {rating}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
    )
}

export default Item
