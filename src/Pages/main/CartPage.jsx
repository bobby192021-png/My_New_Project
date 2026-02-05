

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from '../../feathers/carts/cartSlice';

const CartPage = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="outer">
      
      <div className="main_title">
        <h1>Cart page</h1>
      </div>
      
      <div className="cartContainer">
        {(cart || []).map((product, index) => (
          
          <div className="productCard" key={index}>

            <div className="pImg">
              <img
                src={product?.productImage}
                alt={product?.productName}
              />
            </div>

            <div className="productSet">
              <h3 className="Name">
                Name: {product?.productName}
              </h3>
              <p className="Price">
                Price: ₹{product?.productPrice}
              </p>
            </div>

            <button
              className="Remove"
              onClick={() => {
                dispatch(removeToCart(index));
                alert("Product removed");
              }}
            >
              Remove
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;


