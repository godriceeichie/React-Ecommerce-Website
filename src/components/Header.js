import React, { useContext, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Products } from './Home';


const Header = () => {
    const {productNumber} = useContext(Products);
    return (
        <nav>
            <div className='navbar-container'>
                <h1 className='logo'>
                    <Link to={"/"}>Headphones</Link> 
                </h1>
                <button className='cart-icon'>
                    <AiOutlineShopping />
                    <span className='cart-item-qty'>{productNumber}</span>
                </button>
            </div>
            
        </nav>
    );
}

export default Header;
