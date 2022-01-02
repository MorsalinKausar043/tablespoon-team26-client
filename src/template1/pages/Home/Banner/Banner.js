import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <div className="banner-container">
                <div className="banner-left">
                    <h1>Design Your <br/> Comfort Zone</h1>
                    <p>Electronic commerce (ecommerce) content is the material that is created to attract potential customers over an electronic network. Ecommerce content includes tutorials, social media, user-made posts, product descriptions, and blog posts. Here's how Salsify's Product Experience Management Platform works.</p>
                        <Link to="/products">
                            <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', letterSpacing: '1px'}}>SHOP NOW</Button>
                        </Link>
                </div>
                <div className="banner-right">
                    <img src="https://i.ibb.co/PY0r1vH/banner.png"  className="w-100" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;