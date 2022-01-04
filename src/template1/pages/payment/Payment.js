import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useAuth from "../../hooks/useAuth";
import SimpleCardForm from './SimpleCardForm ';

const stripePromise = loadStripe('pk_test_51Jw4DAGQng0snVfGslJx7w4Otyiyf2uy1D2vwp11IqVSHbWVeVDofnjOndsgDnDghceD3JCisQrXqYOXaNWHyugs00aeMagBZM');

const Payment = ({handlePayment}) => {
    const { allProductPrice } = useAuth();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className='mb-5 text-center'>
                            <h4>Payment Getway</h4>
                            <span>Your Price : {allProductPrice + 50.34}</span>
                        </div>
                        <Elements stripe={stripePromise}>
                            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;