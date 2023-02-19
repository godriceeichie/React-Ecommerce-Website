import React, { useState } from 'react';
import productInfo from '../data/productInfo';
const ProductsBanner = () => {
    const [products, setProducts] = useState(productInfo);
    return (
        <section>
            <div className='products-heading'>
                <h2>Best Selling Products</h2>
                <p>Description</p>
            </div>
            <div className='products-container'>
                {
                    products.map(({image, title, price}) => {
                        return(
                            <div>
                                <div className='product-card'>
                                    <img src={image} alt="" className='product-image'/>
                                    <p className='product-name'>{title}</p>
                                    <p className='product-price'>{`$${price}`}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default ProductsBanner;
