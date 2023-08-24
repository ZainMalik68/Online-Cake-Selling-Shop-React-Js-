import React from "react";

import Cake from "../assets/cake11.jpg";
import Cake2 from "../assets/cake.png";
import Cake1 from "../assets/cake1.jpg";
import deliver from "../assets/deliver.png";
import Input from "../components/atoms/input";
import Button from "../components/atoms/button";
import Smile from "../assets/smile.png";
import Catogory from "../components/molecules/catogory";
import Product from "../components/molecules/product";
import Countup from "../components/molecules/countup";
import { NavigatePage } from "../_global";
import CallUs from "../components/atoms/callUs";

function Home() {
  const navigateSearch = NavigatePage();
  const gotoUrl = (url, data = {}) => navigateSearch(url, data);
  return (
    <div className='App '>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,.6),rgba(10,10,10,.3)),url(${Cake})`,
        }}
        // style={{ backgroundImage: `url(${Cake})`, filter: "blur(1px)" }}
        className='bg-cover'>
        {/* <Navbar /> */}
        <div className='py-48 w-full px-28 '>
          <div className='flex flex-col items-center'>
            <a className='text-amber-500 text-4xl font-serif	'>
              The Collection of Our
            </a>
            <a
              style={{ fontFamily: "Pacifico, cursive" }}
              className='text-white text-6xl  my-6	'>
              Best Home Made Cakes in Lahore
            </a>
            <Input onClick={() => gotoUrl("/cakes")} />
            <div className='flex flex-col w-full items-center text-white mt-10'>
              <Button value='Buy a Cake' onClick={() => gotoUrl("/cakes")} />
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////// */}
      <section className='py-10 w-full px-28 mt-10 '>
        <div className='flex flex-col items-center'>
          <a className='text-amber-500 text-3xl font-serif	'>
            Select Cakes Design for a suitable occasion in Lahore
          </a>
          <a
            style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900 text-5xl  my-6	'>
            The Sweetest Choice
          </a>
        </div>

        <div className='mt-14 mb-10 flex flex-row'>
          <Catogory />
          <Catogory />
          <Catogory />
          <Catogory />
        </div>
      </section>
      <CallUs />

      {/* ///////////////// */}
      {/* ///////////////// */}
      <section className='py-10 w-full px-28 mt-8'>
        <div className='flex flex-col items-center'>
          <a className='text-amber-500 text-3xl font-serif	'>Discover More Of</a>
          <a
            style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900 text-5xl  my-6	'>
            Our Sweet Selection
          </a>
        </div>

        <div className='mt-14 mb-10 flex flex-row'>
          {[1, 1, 1, 1].map(() => {
            return <Product onClick={() => gotoUrl("/product")} />;
          })}
        </div>
      </section>

      <section
        className='parallax mt-10'
        // https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1586985290301-8db40143d525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
        }}>
        <div className='bg-gray-900 xl:px-30 lg:px-28 md:px-16 px-4 py-24 h-full bg-opacity-60  flex justify-between'>
          {data2.map((v, k) => {
            return <Countup name={v.name} value={v.value} />;
          })}
        </div>
      </section>
      <section className='py-10 w-full px-28 pb-20 '>
        <div className='flex flex-col items-center'>
          <a className='text-amber-500 text-3xl font-serif	'>Get A Look At</a>
          <a
            style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900 text-5xl  my-6	'>
            Our Services
          </a>
        </div>
        <div className='flex flex-row justify-between mt-14'>
          {data.map((v, k) => {
            return (
              <div className='w-1/3 text-center'>
                <div
                  key={k}
                  className='w-full items-center flex flex-col  justify-center'>
                  <img src={v.image} className='' />
                  <h2 className='text-2xl mt-5 text-center text-black opacity-90'>
                    {v.heading}
                  </h2>
                </div>
                <a className='text-lg mt-4 text-center flex text-black opacity-75 px-10'>
                  {v.value}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Home;
const data = [
  {
    image: Cake2,
    heading: "Cake For Every Occation",
    value:
      "You can select perfect Best cake in lahore for your best moments. Buy cake on credit card,jazzcash,easypaisa,bank account and on cash",
  },
  {
    image: Smile,
    heading: "Best Taste",
    value:
      "We assure our cake are the best quality cake in  all over the Pakistan & We deliver cakes in lahore in just 5 to 6 hours",
  },
  {
    image: deliver,
    heading: "Home Delivery",
    value:
      "We provides Birthday cakes home delivery services in Lahore and Best birthday cakes in pakistan",
  },
];
const data2 = [
  {
    name: "Total Visitors",
    value: 367,
  },
  {
    name: "Our Reviews",
    value: 35,
  },
  {
    name: "Our Cake Variety",
    value: 46,
  },
];
