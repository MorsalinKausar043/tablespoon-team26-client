import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    document.title = 'Login';

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
    };

    return (
        <Container>
            <div className="login-container">
                <h3 className="pb-3 text-center" style={{color: '#ff4747'}}>Please Login</h3>
                <div className="login-with-phone">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Please enter your phone number"{...register("example")} />
                        <br/>
                        <input type="submit" value="Login With OTP" />
                    </form>
                </div>
                <div className="text-center">
                    <Link to="/register">
                        <span>New Member? <Button>Register</Button> here</span>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Login;