import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Register = () => {
    document.title = 'Register';
    const {authMessage, setAuthMessage, user, setUser} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const getStarting = JSON.parse(localStorage.getItem('starting'));

    const onSubmit = (data) => {
        localStorage.setItem('Auth', JSON.stringify(data))
        setUser(data);
        navigate('/cart')

        fetch('https://floating-caverns-25596.herokuapp.com/addUser', {
        method: 'POST',
        headers: {
                'authorization': `Bearer ${getStarting.token}`,
                'content-type': 'application/json'
        },
        body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            setAuthMessage(result.message);
            reset();
        })
    };

    return (
        <Container className="py-5">
            <div className="register-container">
                <h3 className="pb-3 text-center" style={{color: '#ff4747'}}>Please Register</h3>
                <div className="register-with-phone">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Name"{...register("name")} required/>
                        <input type="text" placeholder="Address"{...register("address")} required/>
                        <input type="email" placeholder="Email"{...register("email")} required/>
                        <input type="text" placeholder="Number"{...register("phone")} required/>
                        <input type="password" placeholder="Password"{...register("password")} required/>
                        <br/>
                        <input type="submit" value="Register" />
                    </form>
                </div>
                <p className="text-center" style={{color: '#ff4747'}}>{authMessage ? authMessage : ''}</p>
                <div className="text-center">
                    <Link to="/login">
                        <span>Already member?? <Button>Login</Button> here</span>
                    </Link>
                </div>
            </div>
    </Container>
    );
};

export default Register;