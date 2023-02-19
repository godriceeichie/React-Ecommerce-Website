import React from 'react';
import heroBannerImg from "../assets/img/hero-headset-img.webp"
import secondProductContainerImg from "../assets/img/product-cont-second-img.jpg"
import thirdProductContainerImg from "../assets/img/product-cont-third-img.jpg"  

const ProductsBanner = () => {
    return (
        <section>
            <div className='products-heading'>
                <h2>Best Selling Products</h2>
                <p>Description</p>
            </div>
            <div className='products-container'>
                <div>
                    <div className='product-card'>
                        <img src={heroBannerImg} alt="" className='product-image'/>
                        <p className='product-name'>headphones</p>
                        <p className='product-price'>$10.99</p>
                    </div>
                </div>
                <div>
                    <div className='product-card'>
                        <img src={secondProductContainerImg} alt="coffe img" className='product-image'/>
                        <p className='product-name'>coffee</p>
                        <p className='product-price'>$4.99</p>
                    </div>
                </div>
                <div>
                    <div className='product-card'>
                        <img src={thirdProductContainerImg} alt="coffe img" className='product-image'/>
                        <p className='product-name'>earphones</p>
                        <p className='product-price'>$9.99</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsBanner;