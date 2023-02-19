import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from './Home';

const ProductPage = () => {
    const { id } = useParams()
    const [productState, setproductState] = useState([]);
    const products = useContext(Products);

    useEffect(() => {
        setproductState(products.filter(({title}) => title === id));
    }, [products]);

    // console.log(productState);

    return (
        <div>
            {
                productState.map(({id, title, image, details, price}) => {
                    return(
                        <div className='product-detail-container' key={id}>
                            <div>
                                <div className='image-container'>
                                    <img src={image} alt="" className='product-detail-image'/>
                                </div>
                                <div className='small-images-container'>
                                    <img src="" alt="" className='a'/>
                                </div>
                            </div>
                            <div className='product-detail-desc'>
                                <h1>{title}</h1>
                                <h4>Details</h4>
                                <p>{details}</p>
                            </div>
                        </div>
                    )    
                })
            }
            
        </div>
    );
}

export default ProductPage;
