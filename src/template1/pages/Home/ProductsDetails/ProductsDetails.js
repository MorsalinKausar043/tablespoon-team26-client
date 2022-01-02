import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ProductsDetailsSummery from '../ProductsDetailsSummery/ProductsDetailsSummery';
import './ProductsDetails.css';

const ProductsDetails = () => {
    document.title = 'Product';
    const {productId} = useParams();
    const { products } = useAuth();
    

    const getStarting = JSON.parse(localStorage.getItem('starting'));

    return (
        <Container>
            <Link to="/products">
                <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', margin: "40px 0px 40px"}}>BACK TO PRODUCTS</Button>
            </Link>
            {   products?.length === 0 ?
                    <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                :
                <div className="pb-5">
                    {
                        products.filter(productData => productData.key === productId).map(crrElm => <ProductsDetailsSummery product={crrElm} key={crrElm.key}/>)
                    }
                </div>
            }
        </Container>
    );
};

export default ProductsDetails;