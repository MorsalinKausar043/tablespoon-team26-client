import React from 'react';
import { Card } from 'react-bootstrap';
import './AllProductsSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
// require('dotenv').config();

const AllProductsSummery = ({product}) => {
    const { brand, img, price, key } = product;
 
    const navigate = useNavigate();
    const handleProduct = () => {
        navigate(`/product/${key}`);

    }

    return (
        <>
            <button onClick={handleProduct} style={{border: 'none', backgroundColor: 'transparent'}}>
                <div className="all-products-summery">
                    <Card style={{ width: '18rem' }}>
                        <div className="card-img-top-image">
                            <Card.Img variant="top" src={img} />
                        </div>
                        <Card.Body>
                            <Card.Text>
                                <span>Code: {brand}</span>
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

export default AllProductsSummery;