import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading} = useAuth();
  let location = useLocation();
  const token = sessionStorage.getItem('idToken');
  if (isLoading && !token)
    {
      return (
        <>
          <div className='col-12 col-md-4 mx-auto'>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
        )
      }
      return( user.displayName ? children :  <Navigate to="/login" state={{ from: location }} /> 
      )
};

export default PrivateRoute;