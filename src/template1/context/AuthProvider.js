import React, { createContext } from 'react';
import useProducts from '../hooks/useProducts';

export const AuthContext= createContext()

const AuthProvider = (props) => {
    const allContext = useProducts();
    return (
        <AuthContext.Provider value={allContext} >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;