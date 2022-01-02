import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllProductsSummery from '../AllProductsSummery/AllProductsSummery';
import './AllProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';

const AllProducts = () => {
    document.title = 'Products';
    const { products, displayProducts, setDisplayProducts, getStarting } = useAuth();
    const [checkButton, setCheckButton] = useState([]);
    const [rangePrice, setRangePrice] = useState(0);
    

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    // ---------------------------------------------------------------------------
    const handleCompany = e => {
        const newProduct = products?.filter(product => product.brand === e.target.value);
        e.target.value === 'all' ? setDisplayProducts([...products]) : setDisplayProducts(newProduct);
    }

    // ---------------------------------------------------------------------------
    // color filter
    const handleBlueColor = () => {
        const newProduct = products?.filter(product => product.color === 'blue');
        setDisplayProducts(newProduct);
        setCheckButton('blue');
    }
    const handleRedColor = () => {
        const newProduct = products?.filter(product => product.color === 'red');
        setDisplayProducts(newProduct);
        setCheckButton('red');
    }
    const handleGreenColor = () => {
        const newProduct = products?.filter(product => product.color === 'green');
        setDisplayProducts(newProduct);
        setCheckButton('green');
    }
    const handleBlackColor = () => {
        const newProduct = products?.filter(product => product.color === 'black');
        setDisplayProducts(newProduct);
        setCheckButton('black');
    }
    const handleOrangeColor = () => {
        const newProduct = products?.filter(product => product.color === 'orange');
        setDisplayProducts(newProduct);
        setCheckButton('orange');
    }

    // ---------------------------------------------------

    const handleRangePrice = e => {
        setRangePrice(e.target.value)
        const newProduct = products?.filter(product => product.price <= e.target.value );
        setDisplayProducts(newProduct);
    }

    const handleClearFilter = () => {
        setDisplayProducts([...products]);
    }

    // ----------------------------------------------------------------
    const handleSort = e => {
        if(e.target.value ===  'low'){
            products.sort((a, b) => a.price - b.price);
            setDisplayProducts([...products]);
        }
        if(e.target.value ===  'high'){
            products.sort((a, b) => b.price - a.price);
            setDisplayProducts([...products]);
        }

        if(e.target.value ===  'a'){
            products.sort((a, b) => {
                if (a.title > b.title)
                    return 1;
                if (a.title < b.title)
                    return -1;
                return 0;
            });
            setDisplayProducts([...products]);
        }
        
        if(e.target.value ===  'z'){
            products.sort((a, b) => {
                if (a.title > b.title)
                    return -1;
                if (a.title < b.title)
                    return 1;
                return 0;
            });
            setDisplayProducts([...products]);
        }
    }

    return (
        <>
            <div className="py-5 mb-5" style={{backgroundColor: `${getStarting.primaryColor}`}}>
                <Container>
                    <h2>Home / Products</h2>
                </Container>
            </div>
                <Container className="all-products-container">
                    <div className="py-4">
                        <div className="search-container">
                            <input type="text" className="w-100" onChange={handleSearch} placeholder="Search......." />

                            {/* {
                                uniqeCategory.map(uniqe => <button onClick={handleCategory} className={`${selectedCategory === uniqe ? 'all-product-btn-active' : null} all-product-btn`} key={uniqe}>{uniqe}</button>)
                            } */}

                            <h6 className="mt-3"><strong>Company</strong></h6>
                            <select onChange={handleCompany} name="cars" id="cars">
                                <option className="company" value="all">all</option>
                                <option className="company" value="Marcos">Marcos</option>
                                <option className="company" value="Liddy">Liddy</option>
                                <option className="company" value="Ikea">Ikea</option>
                                <option className="company" value="Caressa">Caressa</option>
                            </select>

                            <h6 className="mt-3"><strong>Colors</strong></h6>
                            <div className="d-flex">
                                <h6 style={{color: '#617d98'}}>All</h6> &nbsp;
                                <button onClick={handleBlueColor} className="category-color-btn" style={{backgroundColor: "blue"}}>{checkButton === 'blue' ? (<FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: '12px'}} />) : null}</button>
                                <button onClick={handleRedColor} className="category-color-btn" style={{backgroundColor: "red"}}>{checkButton === 'red' ? (<FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: '12px'}} />) : null}</button>
                                <button onClick={handleGreenColor} className="category-color-btn" style={{backgroundColor: "green"}}>{checkButton === 'green' ? (<FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: '12px'}} />) : null}</button>
                                <button onClick={handleBlackColor} className="category-color-btn" style={{backgroundColor: "black"}}>{checkButton === 'black' ? (<FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: '12px'}} />) : null}</button>
                                <button onClick={handleOrangeColor} className="category-color-btn" style={{backgroundColor: "orange"}}>{checkButton === 'orange' ? (<FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: '12px'}} />) : null}</button>
                            </div>

                            <h6 className="mt-3"><strong>Price</strong></h6>
                            <h6 style={{color: '#617d98'}}>${rangePrice}</h6>
                            <input type="range" onChange={handleRangePrice} min={0} max={1400} value={rangePrice} name='price' />

                            <br />
                            <br />
                            <button onClick={handleClearFilter} style={{backgroundColor: "#bb2525", border: 'none', padding: '5px 20px', borderRadius: '4px', color: '#fff'}}>Clear Filter</button>
                        </div>
                    </div>
                    <div>
                        <div className="all-products-header">
                            <h2 className="text-center py-3">Total <span style={{color: "#ab7a5f"}}>{displayProducts?.length}</span> Products Found</h2>
                            <div className="d-flex align-items-center">
                                <p style={{margin: "0px", fontSize: "15px"}}>Sort By&nbsp;</p>
                                <select onChange={handleSort} name="" id="">
                                    <option className="company" value="low">Price (Lowest)</option>
                                    <option className="company" value="high">Price ( Highest )</option>
                                    <option className="company" value="a">Name( A - Z )</option>
                                    <option className="company" value="z">Name( Z - A )</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {   displayProducts?.length === 0 ?
                                    <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>Loading</h2>
                                :
                                <div className="all-products-inner">
                                    {
                                        displayProducts?.map((product,index) => <AllProductsSummery product={product} key={index}></AllProductsSummery>)
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </Container>
            <div className="py-5 text-center">
                <Link to="/home">
                    <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>Back Home</Button>
                </Link>
           </div>
        </>
    );
};

export default AllProducts;