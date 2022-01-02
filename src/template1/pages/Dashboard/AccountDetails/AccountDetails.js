import React from 'react';
import { Container } from 'react-bootstrap';
import './AccountDetails.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

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
                            <input defaultValue={user?.name} {...register("name")} />
                            <input defaultValue={user?.email} {...register("email")} />
                            <input defaultValue={user?.phone} {...register("phone")} />
                            <input defaultValue={user?.address} {...register("address")} />
                            <input type="submit" value="PLACE ORDER"/>
                        </form>
                    </div>
                </div>
           </Container>
        </>
    );
};

export default Checkout;