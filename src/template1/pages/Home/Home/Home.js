import React from 'react';
import Banner from '../Banner/Banner';
import Furniture from '../Furniture/Furniture';
import Newsletter from '../Newsletter/Newsletter';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Furniture></Furniture>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;