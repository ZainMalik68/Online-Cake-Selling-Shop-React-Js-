import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Wrapper from "../../components/template/wrapper";
import About from "../../pages/about";
import Cakes from "../../pages/cakes";
import Cart from "../../pages/cart";
import Login from "../../pages/login";
import MyOrders from "../../pages/myorders";
import Service from "../../pages/services";
import SignUp from "../../pages/signup";
import SingleProduct from "../../pages/singleProduct";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Wrapper>
              <Home />
            </Wrapper>
          }
        />
        <Route
          path='/product'
          element={
            <Wrapper>
              <SingleProduct />
            </Wrapper>
          }
        />
        <Route
          path='/about'
          element={
            <Wrapper>
              <About />
            </Wrapper>
          }
        />{" "}
        <Route
          path='/services'
          element={
            <Wrapper>
              <Service />
            </Wrapper>
          }
        />
        <Route
          path='/cakes'
          element={
            <Wrapper>
              <Cakes />
            </Wrapper>
          }
        />
        <Route
          path='/cart'
          element={
            <Wrapper>
              <Cart />
            </Wrapper>
          }
        />
        <Route
          path='/my-orders'
          element={
            <Wrapper>
              <MyOrders />
            </Wrapper>
          }
        />
        <Route
          path='/login'
          element={
            <Wrapper>
              <Login />
            </Wrapper>
          }
        />
        <Route
          path='/signup'
          element={
            <Wrapper>
              <SignUp />
            </Wrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
