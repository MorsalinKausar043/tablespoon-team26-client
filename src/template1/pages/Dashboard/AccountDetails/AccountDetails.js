import React from 'react';
import { Container } from 'react-bootstrap';
import './AccountDetails.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const {cart, user} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.price = totalPrice;
    };

   let cartPrice = 0;
   for(const product of cart){
       if(!product.quantity){
           product.quantity = 1;
       }
       cartPrice =  cartPrice + product.price * product.quantity;
   }
   const price =  parseFloat(cartPrice).toFixed(2);
   const totalPrice = parseInt(price) + 50.34
    return (
        <>
           <Container>
                <div className="account-container">
                    <div className="account-inner">
                        <h2>Account Details</h2>
                        <hr />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} {...register("name")} />
                            <input placeholder='email' {...register("email")} />
                            <input placeholder='number' {...register("phone")} />
                            <input placeholder='address' {...register("address")} />
                            <Link to="/dashboard/payment">
                                <input type="submit" value="PLACE ORDER"/>
                            </Link>
                        </form>
                    </div>
                </div>
           </Container>
        </>
    );
};

export default Checkout;