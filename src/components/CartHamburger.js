import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import headphoneImage from '../assets/img/hero-headset-img.webp'
const CartHamburger = () => {
    return (
        <div className='cart-wrapper'>
            <div className='cart-container'>
                <button className='cart-heading'>
                    <AiOutlineLeft />
                    <span className='heading'>Your Cart</span>
                    <span className='cart-num-items'>(7 items)</span>
                </button>
                <div className='product-container'>
                    <div className='product'>
                        <div>
                            <img src={headphoneImage} alt="" />
                        </div>
                        <div className='item-desc'>
                            <div className='flex top'>
                                <h5>headphones</h5>
                                <h4>$10.99</h4>
                            </div>
                            <div className='flex bottom'>
                                <div>
                                    <p className='quantity-desc'>
                                        <span className='minus'>
                                            <AiOutlineMinus />
                                        </span>
                                        <span className='num'>7</span>
                                        <span className='plus'>
                                            <AiOutlinePlus />
                                        </span>
                                    </p>
                                </div>
                                <button className='remove-item'>
                                    <TiDeleteOutline />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cart-bottom'>
                    <div className='total'>
                        <h3>Subtotal:</h3>
                        <h3>$76.93</h3>
                    </div>
                    <div className='btn-container'>
                        <button className='btn'>
                            Pay with Stripe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartHamburger;
