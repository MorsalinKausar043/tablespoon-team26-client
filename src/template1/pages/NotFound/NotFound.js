import React from 'react';

const NotFound = () => {
    document.title = '404 Error';
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="mx-4">404</h1>
                </div>
                <div>
                    <h5>Oops! You're lost.</h5>
                    <p>The page you are looking for was not found.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;