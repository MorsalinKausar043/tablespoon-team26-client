import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductsSummery from '../ProductsSummery/ProductsSummery';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    
    return (
        <div style={{backgroundColor: '#f1f5f8', marginTop: "20px"}}>
            <Container>
                <h2 className="text-center py-5">Featured Products</h2>
                {   products?.length === 0 ?
                        <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                    :
                    <div className="products-container">
                        {
                            products?.slice(0, 3).map(product => <ProductsSummery product={product} key={product.key}></ProductsSummery>)
                        }
                    </div>
                }
            <div className="pt-3 pb-5 text-center">
                    <Link to="/products">
                        <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', letterSpacing: '1px'}}>All PRODUCTS</Button>
                    </Link>
            </div>
            </Container>
        </div>
    );
};

export default Products;