import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './ProductsDetailsSummery.css';
import useAuth from '../../../hooks/useAuth';
import { addToDb, removeToDb } from '../../../hooks/useLocalStorage';

const ProductsDetailsSummery = ({ product }) => {
    const { brand, price, img, star } = product;
    const { handleAddToCart, quantity, setQuantity, cart, setCart } = useAuth();
    const [newQuaintity, setNewQuantity] = useState(0);

    const Increment = (product) => {
        const newCart = [...cart];
        const existing = cart.find(c => c._id === product._id);
        if(existing){
            product.quantity = product.quantity + 1;
        }
        else{
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        addToDb(product._id);

        setQuantity(quantity + 1)
    };
    const Decrement = (product) => {
        if(quantity > 1){
            const newCart = [...cart];
            const existing = cart.find(c => c._id === product._id);
            if(existing){
                product.quantity = product.quantity - 1;
            }
            else{
                product.quantity = 1;
                newCart.push(product);
            }
            setCart(newCart);
            removeToDb(product._id);

            setQuantity(quantity - 1);
        }
    };

    useEffect(
    () => cart.filter(carts => parseInt(carts.key) === parseInt(product.key)).map(crrElm => setNewQuantity(crrElm.quantity))
        , [handleAddToCart])


    return (
        <div>
            <div className="product-details-summery">
                <div style={{}}>
                    <div style={{height: '400px', border: '4px solid #eee', padding: '20px'}}>
                        <img src={img} style={{width:"100%",height:"100%"}}  alt="this is main img"/>
                    </div>
                </div>
                <div className="ms-5 product-details-summery-inner">
                    <div>
                        <h4>Product Code: {brand}</h4>
                        <div className="d-flex mb-2">
                            {
                                                [...Array(5)].map((ignore,ind) => { // you just use indice here
                                                return (
                                                    <span key={ind}>
                                                        <i
                                                            style={{color:"rgb(238,129,35)"}}
                                                        className={
                                                        star >= ind + 1
                                                        ? 'fas fa-star'
                                                        : star >= ind + 0.5
                                                        ? 'fas fa-star-half-alt'
                                                        : 'far fa-star'
                                                        } 
                                                    ></i>
                                                    </span>
                                                )
                                                })
                                            }
                        </div>
                        <h6 style={{ color: "#ab7a5f"}}>Price: <strong>${price}</strong></h6>
                        <div className="d-flex align-items-center">
                            <button onClick={_=>Decrement(product)} style={{border: 'none', backgroundColor: "transparent", fontSize: "30px"}}>-</button>&nbsp;&nbsp;
                            <h2>{newQuaintity}</h2>
                            &nbsp;&nbsp;<button onClick={_=>Increment(product)} style={{border: 'none', backgroundColor: "transparent", fontSize: "30px"}}>+</button>
                        </div>
                        {/* <Link to="/cart"> */}
                            <Button onClick={() => handleAddToCart(product)} variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>ADD TO CART</Button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailsSummery;