import React from 'react';
import HeroBanner from './HeroBanner';
import ProductsBanner from './ProductsBanner';

const MainContent = () => {
    return (
        <main className='main-container'>
            <HeroBanner />
            <ProductsBanner />
        </main>
    );
}

export default MainContent;
