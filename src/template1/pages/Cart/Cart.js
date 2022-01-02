import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Cart = () => {
    document.title = 'Cart';
    const { cart, handleRemove } = useAuth();
    

    const total = cart.reduce((previous, product) => previous + product.price * product.quantity, 0)
    const orderTotal = parseFloat(total).toFixed(2);

    

    return (
        <Container className="py-5 cart-container">
               <div>
                    <div className="mx-auto">
                        {
                            cart?.length === 0 ?
                            <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>Order Not Found</h2>
                            :
                            <Table hover responsive="sm" style={{border: '1px solid rgb(171, 122, 95)'}}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>tem</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                {
                                    cart?.map(c => <tbody key={c._id}>
                                        <tr>
                                            <td style={{textTransform: 'capitalize'}} style={{width: "200px"}}>
                                                <img src={c.img} style={{width: "100%"}} height="100px" alt="" />
                                            </td>
                                            <td style={{textTransform: 'capitalize'}}>
                                                <div>
                                                    <span className="d-flex align-items-center"><strong>Code :</strong> &nbsp; {c.brand}</span>
                                                    <span className="d-flex align-items-center"><strong>Price :</strong> &nbsp; {c.quantity * c.price}</span>
                                                    <span className="d-flex align-items-center"><strong>Quantity :</strong> &nbsp; {c.quantity}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <button onClick={() => handleRemove(c._id)} className="btn text-white" style={{backgroundColor: 'rgb(171, 122, 95'}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </Table>
                        }
                    </div>
                    <div className="pt-3 pb-5">
                        <Link to="/products">
                            <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>Continue Shopping</Button>
                        </Link>
                    </div>
               </div>
                <div style={{width: "300px", margin: '0 auto'}}>
                    <div style={{border: "1px solid #bcccdc", padding: "30px",}}>
                        <h6><strong>Subtotal : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${orderTotal}</strong></h6>
                        <h6>Shipping Fee : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5.34</h6>
                        <hr />
                        <h5>Order Total : ${parseInt(orderTotal) + 5.34}</h5>
                            <Link to="/checkout">
                                    <Button  variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', width: '100%'}}>proceed to checkout</Button>
                            </Link>
                    </div>
                </div>
        </Container>
    );
};

export default Cart;