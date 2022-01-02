import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div style={{backgroundColor: "#E5F1FB", padding: "100px 0px 40px", width: "100%"}}>
            <div className="container">
                <div className="newsletter">
                    <div className="d-flex align-items-center">
                        <div>
                            <h2 style={{color: '#ab7a5f'}}>Grab Our Newsletter</h2>
                            <p className="text-muted">To receive latest offers and discounts from the shop.</p>
                            <form className="row g-3">
                                <div className="col-auto">
                                    <input type="email" className="form-control" placeholder="Enter Your Email Address"/>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn mb-3 text-white" style={{backgroundColor: '#ab7a5f'}}>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="newsletter-img">
                        <img src="https://i.ibb.co/B2rbNmy/newsletter.png" alt=""/>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Newsletter;