import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import AllProducts from "../pages/Home/AllProducts/AllProducts";
import Home from "../pages/Home/Home/Home";
import ProductsDetails from "../pages/Home/ProductsDetails/ProductsDetails";
import Login from "../pages/Login/Login/Login";
import LoginCode from "../pages/Login/LoginCode/LoginCode";
import Register from "../pages/Login/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import AuthProvider from "../context/AuthProvider";
import './Template.css';
import Checkout from "../pages/Home/Checkout/Checkout";
import PrivateRoute from "../pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Orders from "../pages/Dashboard/Orders/Orders";
import AccountDetails from "../pages/Dashboard/AccountDetails/AccountDetails";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Logout from "../pages/Dashboard/Logout/Logout";

const Template = () => {
    return (
        <div className="Template">
          <AuthProvider>
            <Router>
              <Header></Header>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="/dashboard" element={<DashboardHome/>}></Route>
                  <Route path="/dashboard/orders" element={<Orders/>}></Route>
                  <Route path="/dashboard/account" element={<AccountDetails/>}></Route>
                  <Route path="/dashboard/logout" element={<Logout/>}></Route>
                </Route>
                <Route path="/products" element={<AllProducts />}></Route>
                <Route path="/product/:productId" element={<ProductsDetails />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login/code" element={<LoginCode />}></Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
            <Footer></Footer>
          </AuthProvider>
         </div>
    );
};

export default Template;