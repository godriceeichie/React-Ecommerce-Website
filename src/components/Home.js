import React, { createContext, useEffect, useState, useReducer } from "react";
import { Outlet } from "react-router-dom";
import productInfo from "../data/productInfo";
import Footer from "./Footer";
import Header from "./Header";

export const Products = createContext();

const cartReducer = (state, action) => {
    let error;
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(state);
            return [...state, action.payload.item];
            break;
        case "REMOVE_FROM_CART":
            console.log(state);
            return [...state, action.payload.item];
            break;
        case "INCREASE_QTY":
            console.log(state);
            return [...state, action.payload.item];
            break;
        case "DECREASE_QTY":
            console.log(state);
            return [...state, action.payload.item];
            break;
        default:
            return state;
    }
};

const Home = () => {
    const [products, setProducts] = useState(productInfo);
    const [cartNumber, setcartNumber] = useState(0);

    const [cart, cartDispatch] = useReducer(cartReducer, []);

    useEffect(() => { }, [products]);
    return (
        <Products.Provider value={{ products, cartNumber, setcartNumber }}>
            <div className="layout">
                <Header />
                <main className="main-container">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </Products.Provider>
    );
};

export default Home;
