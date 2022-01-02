import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    
    const { user } = useAuth();
    
    return (
        <div>
            <h2>Hello</h2>
            <p>From your account dashboard. you can easily check & view your recent orders,
                manage your shipping and billing addresses and edit your password and account details.</p>
        </div>
    );
};

export default DashboardHome;