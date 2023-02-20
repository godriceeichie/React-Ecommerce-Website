import React, { createContext, useEffect, useState, useReducer } from "react";
import { Outlet, useParams } from "react-router-dom";
import productInfo from "../data/productInfo";
import Footer from "./Footer";
import Header from "./Header";

export const Products = createContext();


const cartReducer = (state, action) => {
  let error;
  switch (action.type) {
    case "ADD_TO_CART":
      const isExist = () => {
        const foundProduct = state.filter(
          (element) => element.id === action?.payload?.item?.id
        );
        console.log(foundProduct.length);
        if (foundProduct.length === 0) return false;
        else return true;
      };

      if(!isExist()) return [...state, action?.payload?.item] 
      return [...state];
        
    case "REMOVE_FROM_CART":
      console.log(state);
      return state.map((element) => element.id !== action.payload.id);

    case "UPDATE_QTY":
      state.map((element) => {
        if (element.id === action.payload.id) {
          return { ...element, qty: action.payload.qty };
        }
        return element;
      });
    // default: state;
  }
};

const Home = () => {
    const {id} = useParams()

  const [products, setProducts] = useState(productInfo);
  const [cartNumber, setcartNumber] = useState(0);


  const [cart, cartDispatch] = useReducer(cartReducer, []);

  useEffect(()=>{
    let totalProduct = 0
    cart.map(element =>{
        totalProduct +=element?.qty
    })

    setcartNumber(totalProduct)

  },[cart,id])

  useEffect(() => {}, [products]);
  return (
    <Products.Provider
      value={{ products, cartNumber, setcartNumber, cart, cartDispatch }}
    >
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
