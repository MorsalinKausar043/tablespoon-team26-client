import React from 'react';
import { Container } from 'react-bootstrap';
import './Checkout.css';
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
   const price =  parseFloat(cartPrice).toFixed(2);;
   const totalPrice = parseInt(price) + 50.34
    return (
        <>
            <div className="checkout-details-banner">
                    <Container>
                        <h2 style={{color: '#000'}}>Checkout</h2>
                    </Container>
            </div>

           <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="checkout-payment-container py-5">
                        <div className="checkout-payment-left">
                            <h2>Billing Details</h2>
                            <hr />
                            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                                <input defaultValue={user.name} {...register("name")} />
                                <input defaultValue={user.email} {...register("email")} />
                                <input defaultValue={user.phone} {...register("phone")} />
                                <input defaultValue={user.address} {...register("address")} />
                                <input placeholder="Order notes (Optional)" {...register("others")} />
                                <input type="submit" value="PLACE ORDER"/>
                            {/* </form> */}
                        </div>
                        <div className="checkout-payment-right">
                            <div className="checkout-payment-right-inner mb-5">
                                <h4>Checkout Summary</h4>
                                <hr />
                                <div className="d-flex justify-content-between" style={{borderBottom: '1px dashed #eee'}}>
                                    <span>Subtotal</span>
                                    <span>${price}</span>
                                </div>
                                <div className="d-flex justify-content-between" style={{borderBottom: '1px dashed #eee'}}>
                                    <span>Shipping</span>
                                    <span>$50.34</span>
                                </div>
                                <div className="d-flex justify-content-between" style={{borderBottom: '1px dashed #eee'}}>
                                    <span>Coupon</span>
                                    <span>$00.00</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span><strong>Total</strong></span>
                                    <span><strong>${totalPrice.toPrecision(6)}</strong></span>
                                </div>
                            </div>

                            <div className="checkout-payment-right-inner">
                                <h4>Payment Method</h4>
                                <hr />
                                <input type="checkbox" defaultValue='Cash' {...register("payment")} />&nbsp;<span>Cash on delivery</span><br/>
                            </div>
                        </div>
                    </div>
                </form>
           </Container>
        </>
    );
};

export default Checkout;