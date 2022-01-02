import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user} = useAuth();
  let location = useLocation();

    return user?.email || user.displayName ? children :  <Navigate to="/login" state={{ from: location }} /> 
};

export default PrivateRoute;