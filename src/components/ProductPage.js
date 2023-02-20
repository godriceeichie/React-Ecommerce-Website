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

    const [selectedImage, setselectedImage] = useState(0)
    const handleImageClick = (index) => {
        setselectedImage(index)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setselectedImage((selectedImage + 1) % 2)
        }, 5000);
        return () => clearTimeout(timer);
    }, [selectedImage])

    return (
        <>
            {
                productState.map(({id, title, image, details, price, secondImage}) => {
                    return(
                        <div>
                            <div className='product-detail-container' key={id}>
                                <div>
                                    <div className='image-container'>
                                        {
                                            (title !== "coffee") ? <img src={image} alt="" className='product-detail-image'/> : <img src={selectedImage === 0 ? image : secondImage} alt="" className='product-detail-image'/>
                                        }
                                    </div>
                                    <div className='small-images-container'>
                                        <img src={image} alt="" className={selectedImage === 0 ? 'selected-image small-image' : 'small-image'} onClick={() => handleImageClick(0)}/>
                                        {(title === 'coffee') && <img src={secondImage} alt="" className={selectedImage === 1 ? 'selected-image small-image' : 'small-image'} onClick={() => handleImageClick(1)}/>}
                            
                                    </div>
                                </div>
                                <div className='product-detail-desc'>
                                    <h1>{title}</h1>
                                    <h4>Details</h4>
                                    <p>{details}</p>
                                    <p className='price'>{`$${price}`}</p>
                                    <div className='quantity'>
                                        <h3>Quantity</h3>
                                        <p className='quantity-desc'>
                                            <span className='minus'></span>
                                            <span className='num'></span>
                                            <span className='plus'></span>
                                        </p>
                                    </div>
                                    <div className='buttons'>
                                        <button className='add-to-cart'>Add to Cart</button>
                                        <button className='buy-now'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='maylike-products-wrapper'>
                                <h2>You may also like</h2>
                                <div className='marquee'>
                                    <div className='maylike-products-container track'>
                                        {
                                            products.map(({image, title, price, id}) => {
                                                return (
                                                    <div key={id}>
                                                        <div className='product-card'>
                                                            <img src={image} alt="" className='product-image'/>
                                                            <p className='product-name'>{title}</p>
                                                            <p className='product-price'>{`$${price}`}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )    
                })
            }

        </>
    );
}

export default ProductPage;
