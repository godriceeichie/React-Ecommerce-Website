import React from 'react';
import FooterBanner from './FooterBanner';
import HeroBanner from './HeroBanner';
import ProductsBanner from './ProductsBanner';

const MainContent = () => {
    return (
        <main className='main-content'>
            <HeroBanner />
            <ProductsBanner />
            <FooterBanner /> 
        </main>
    );
}

export default MainContent;
