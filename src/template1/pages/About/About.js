import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    document.title = 'About Us';
    const getStarting = JSON.parse(localStorage.getItem('starting'));
    return (
        <>
            <div className="py-5 mb-5" style={{backgroundColor: `${getStarting.primaryColor}`}}>
                <Container>
                    <h2>Home / About</h2>
                </Container>
            </div>
            <div className="pb-5">
                <div className="container">
                <div className="about">
                    <div>
                        <img src="https://i.ibb.co/BjQKCRJ/about.jpg" className="w-100" alt="" />
                    </div>     
                    <div className="d-flex align-items-center ms-4 about-inner">
                        <div>
                            <h2>Our Story</h2>
                            <p>There are loads of possibilities when it comes to content marketing and how it can assist customers along their consumer decision journey. Just a few of the benefits of having ecommerce related content include helping to sell products and services, keeping customers informed, giving helpful tips and advice, building trust and authority on topics (with both users and search engines) and giving you new content to share to followers on social media. Creating content around your craft can help attract new customers and retain existing ones.</p>
                        </div>     
                    </div>     
                </div>
                </div>
            </div>
        </>
    );
};

export default About;