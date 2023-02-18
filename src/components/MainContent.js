import React from 'react';
import heroBannerImg from "../assets/img/hero-headset-img.webp"
const MainContent = () => {
    return (
        <main className='main-container'>
            <div className='hero-banner-container'>
                <div>
                    <p className='beats-solo'>fashionable</p>
                    <h3>Summer sale</h3>
                    <h1>fine</h1>
                    <img src={heroBannerImg} className="hero-banner-image" alt="hero headphone img"></img>
                </div>
                <div>
                    <button>Shop Now</button>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>neon headphones</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContent;
