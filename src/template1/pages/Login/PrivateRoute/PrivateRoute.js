import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    let location = useLocation();
    if (!user?.phone) {
        return <Navigate to="/login" state={{ from: location }} />;
      }
    return children;
};

export default PrivateRoute;