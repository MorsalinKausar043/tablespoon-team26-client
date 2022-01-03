import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h3>Logout SuccessFull!</h3>
            <button className='btn btn-outline-primary mt-5' onClick={()=> navigate("/")}>Back to Home</button>
        </div>
    );
};

export default Logout;