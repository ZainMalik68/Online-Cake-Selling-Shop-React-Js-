import React from "react";
import logo from "../../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { NavigatePage } from "../../../_global";

function Navbar() {
  const navigateSearch = NavigatePage();
  const gotoUrl = (url, data = {}) => navigateSearch(url, data);
  return (
    <div
      className='w-full flex flex-row py-8 px-28 justify-between absolute bg-transparent'
      style={{ fontFamily: "Rammetto One , cursive" }}>
      <div className='flex flex-row space-x-5'>
        {/* <img src={logo} className='h-20 w-20  object-cover		 ' /> */}
      </div>
      <div className='flex flex-row space-x-12 text-sm  text-white '>
        {routes.map((v, k) => {
          return (
            <a
              onClick={() => gotoUrl(v.route)}
              key={k}
              className='text-white hover:text-amber-500 cursor-pointer duration-200'>
              {v.name}
            </a>
          );
        })}

        <div
          className='flex flex-row items-start space-x-2 cursor-pointer'
          onClick={() => gotoUrl("/cart")}>
          <div className='flex flex-row h-min '>
            <FaShoppingCart
              style={{
                fontSize: 20,
                fontFamily: "Rammetto One , cursive",
              }}
              className='cursor-pointer text-white duration-200 hover:text-amber-500 durtion-200'
            />
            <div className='min-h-5 min-w-5 -mt-2 -ml-1 h-5 w-5 bg-amber-500 rounded-full text-black items-center justify-center flex text-sm '>
              6
            </div>
          </div>

          <a className='text-white hover:text-amber-500 cursor-pointer duration-200 '>
            Rs 0 /-
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Cakes",
    route: "/cakes",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Login",
    route: "/login",
  },
  {
    name: "My Order",
    route: "/my-orders",
  },
];
