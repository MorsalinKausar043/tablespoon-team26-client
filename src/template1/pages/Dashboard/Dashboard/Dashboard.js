import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
   
    return (
        <Container className="py-5">
           <div className="dashboard-container">
                <div className="dashboard-btn">
                    <Link to="/dashboard"><button>Dashboard</button></Link><br />
                    <Link to="/dashboard/orders"><button>Order</button></Link><br />
                    <Link to="/dashboard/account"><button>Account Details</button></Link><br />
                    <Link to="/dashboard/logout"><button>Logout</button></Link><br />
                </div>
                <Outlet />
           </div>
        </Container>
    );
};

export default Dashboard;