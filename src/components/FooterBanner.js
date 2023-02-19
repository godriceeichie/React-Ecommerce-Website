import React from 'react';
import heroBannerImg from "../assets/img/hero-headset-img.webp"

const FooterBanner = () => {
    return (
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                    <p>20% OFF</p>
                    <h3>FINE</h3>
                    <h3>SMILE</h3>
                    <p>2 Nov to 15 Dec</p>
                </div>
                <div className='footer-banner-image-container'>
                    <img src={heroBannerImg} alt="footer banner image" className='footer-banner-image'/>
                </div>
            </div>
        </div>
    );
}

export default FooterBanner;
