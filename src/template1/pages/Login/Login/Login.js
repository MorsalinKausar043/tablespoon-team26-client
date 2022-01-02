import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import './Login.css';

const Login = () => {

    const { HandleGithubSignUp, HandleGoogleSignUp , setIsLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_location = location.state?.from || "/home";

    const GoogleSignUp = () => {
        HandleGoogleSignUp()
            .then(() => {
                navigate(redirect_location)
            }).finally(_ => setIsLoading(false));
    };

    const GithubSignUp = () => {
        HandleGithubSignUp()
        .then(() => {
            navigate(redirect_location)
        }).finally(_ => setIsLoading(false));
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-10 mx-auto login_box">
                        <div className="login_form shadow">
                            <h2 className="login_title">Sign In With</h2>
                            <button className="login_Btn" onClick={GoogleSignUp}>
                                <FcGoogle className="input_box_icon"/>
                                Continue With Google
                            </button>
                            <button className="login_Btn" onClick={GithubSignUp}>
                                <GoMarkGithub className="input_box_icon"/>
                                Continue With Github
                            </button>
                            <div className="d-flex mt-3">
                                <p className="me-2"><small>Don't have a account?</small></p>
                                <NavLink to="/register">
                                    <p className="text-primary"><small>Create an Account</small></p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;