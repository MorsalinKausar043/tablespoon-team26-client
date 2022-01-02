import React from 'react';
import { Card } from 'react-bootstrap';
import './ProductsSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const ProductsSummery = ({product}) => {
    const { title, price, img, key } = product;
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate(`/product/${key}`)
    }
    
    return (
        <>
            <button onClick={handleProduct} style={{border: 'none', backgroundColor: 'transparent'}}>
                <div className="products-summery">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Text>
                                <span>{title}</span>
                                <span>${price}</span>
                            </Card.Text>
                        </Card.Body>
                        <div className="hover-box">
                            <ul>
                                <li><FontAwesomeIcon icon={faSearch} /></li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </button>
        </>
    );
};

export default ProductsSummery;