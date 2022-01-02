import React from 'react';
import { Container } from 'react-bootstrap';
import './Furniture.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faTools, faHistory } from '@fortawesome/free-solid-svg-icons'

const furnitures = [
    {
        "id": "01",
        "icon": faCog,
        "title": "Mission",
        "description": "Content for every channel with our leading product information management software. Our data insights drive workflow measurably speed time market and improve sales."
    },
    {
        "id": "02",
        "icon": faTools,
        "title": "Vision",
        "description": "We have invested heavily in making sure you can deliver your ecommerce content to any retailerrequirements. We have a dedicated team whose full-time job."
    },
    {
        "id": "03",
        "icon": faHistory,
        "title": "History",
        "description": "It is to make sure we can get your data where it needs to be to drive your business. We aggressively deliver technology to make it happen as fast as possible."
    },
]

const Furniture = () => {
    return (
        <div className="furniture-container">
            <Container>
                <div className="furniture-top-section">
                    <div className="furniture-top-left">
                        <h2>Custom Furniture <br/> Built Only For You</h2>
                    </div>
                    <div className="furniture-top-right">
                        <p>brands can deliver a winning experience across touch points requires that you have control over your product data. With our product information management capabilities, you can quickly manage product attributes.</p>
                    </div>
                </div>

                <div className="furniture-inner">
                    {
                        furnitures?.map(furniture => <div key={furniture.id} className="furniture-inner-details">
                            <div>
                                <div className="furniture-icon">
                                    <FontAwesomeIcon icon={furniture.icon}/>
                                </div>
                                <h3>{furniture.title}</h3>
                                <p>{furniture.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Furniture;