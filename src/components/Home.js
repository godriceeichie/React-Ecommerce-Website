import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import productInfo from '../data/productInfo';
import Footer from './Footer';
import Header from './Header';

export const Products = React.createContext()

const Home = () => {
    const [products, setProducts] = useState(productInfo);
    return (
        <Products.Provider value={products}>
            <div className='layout'>
                <Header />
                <main className='main-container'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </Products.Provider>
    );
}

export default Home;
