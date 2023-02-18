import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav>
            <div className='navbar-container'>
                <h1 className='logo'>
                    <Link to={"/"}>Headphones</Link> 
                </h1>
                <button className='cart-icon'>
                    <AiOutlineShopping />
                    <span className='cart-item-qty'>0</span>
                </button>
            </div>
            
        </nav>
    );
}

export default Header;
