import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import headphoneImage from "../assets/img/hero-headset-img.webp";
const CartHamburger = ({ data,setDrawer,cartNumber }) => {
  return (
    
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading">
          <AiOutlineLeft onClick={() => setDrawer(false)} />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({cartNumber} items)</span>
        </button>


        <div className="product-container">
          {data.map(({  id,  title, details, price, image,  secondImage, qty, }) => (
            <div key={id} className="product">
              <div>
                <img
                  src={image}
                  alt=""
                  className="cart-product-image"
                />
              </div>
              <div className="item-desc">
                <div className="flex top">
                  <h5>{title}</h5>
                  <h4>${price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus">
                        <AiOutlineMinus />
                      </span>
                      <span className="num">{qty}</span>
                      <span className="plus">
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button className="remove-item">
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="cart-bottom">
          <div className="total">
            <h3>Subtotal:</h3>
            <h3>$76.93</h3>
          </div>
          <div className="btn-container">
            <button className="btn">Pay with Stripe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartHamburger;
