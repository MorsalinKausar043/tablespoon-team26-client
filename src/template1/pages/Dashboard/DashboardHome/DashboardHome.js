import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    
    const { user } = useAuth();
    
    const img = "https://i.ibb.co/Bt350dL/login.png";
   

    return (
        
        <div>
        <div className="row box">
        <div className='col-md-6 '>
           <h2 className='text-warning bg-danger rounded mt-5'>Hello {user?.displayName} </h2>
            <div className=' p-3'>
            <p>From your account dashboard. you can easily check & view your recent orders,
                manage your shipping and billing addresses and edit your password and account details.</p>
            </div> 
                <button className="bg-primary text-white px-3 rounded">Here you</button>
           </div>
           <div className='col-md-6 '>
               <img className='img-fluid ' src={img} alt="" />
               
           </div>
        </div>
        
        </div>
    );
};

export default DashboardHome;