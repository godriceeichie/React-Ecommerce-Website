import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import productInfo from '../data/productInfo';
import Footer from './Footer';
import Header from './Header';

export const Products = React.createContext()

const Home = () => {
    const [products, setProducts] = useState(productInfo);
    const [productNumber, setproductNumber] = useState();
    return (
        <Products.Provider value={{products, productNumber, setproductNumber}}>
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
