import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {cart, user, handleLogout} = useAuth();

    const getStarting = JSON.parse(localStorage.getItem('starting'));
    const logo_png = "https://i.ibb.co/NnNgZVT/download.png";

//    const cartLength = cart.reduce((previous, product) => previous + product.quantity, 0)
//    const cartPrice = cart.reduce((previous, product) => previous + product.sell_price, 0)

   let cartLength = 0;
   let cartPrice = 0;
   for(const product of cart){
       if(!product.quantity){
           product.quantity = 1;
       }
       cartLength = cartLength + product.quantity ;
       cartPrice =  cartPrice + product.price * product.quantity;
   }

    return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="header-container">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">
                            <img src={logo_png} className="w-25" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/cart">Cart<FontAwesomeIcon icon={faShoppingCart}/>{cartLength ? <span><sup style={{color: 'red'}}>{cartLength}</sup>${cartPrice.toPrecision(5)}</span> : ''}</Nav.Link>
                            {
                                user?.phone ?
                                <Nav.Link as={Link} to="/login"><button onClick={handleLogout} style={{border: 'none', backgroundColor: 'transparent', color: '#617d98'}}>Logout <FontAwesomeIcon icon={faSignOutAlt}/></button></Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login">Login <FontAwesomeIcon icon={faUserPlus}/></Nav.Link>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    );
};

export default Header;



