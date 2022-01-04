import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const SimpleCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { allProductPrice, setCart } = useAuth();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
      
    event.preventDefault();

      if (!stripe || !elements)
      {
        
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
        setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        localStorage.removeItem("shopping_cart");
        window.location.reload();
        // handlePayment(paymentMethod.id)
    }
    };
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
              <CardElement />
              <div className='text-center'>
                <button className='btn btn-primary' title='4242424242424242' type="submit" disabled={!stripe}>
                    Pay ${allProductPrice}
                </button>
              </div>
            
        </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        { 
            paymentSuccess && <p style={{color: 'green'}}>Your payment was successful.</p>
        }
    </div>
  );
};

export default SimpleCardForm;