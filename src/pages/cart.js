import React from "react";
import Banner from "../components/molecules/banner";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineVerified } from "react-icons/md";
import Product from "../components/molecules/product";
import { NavigatePage } from "../_global";
import Line from "../components/atoms/line";
import CallUs from "../components/atoms/callUs";
import Button from "../components/atoms/button";
function Cart() {
  const navigateSearch = NavigatePage();
  const gotoUrl = (url, data = {}) => navigateSearch(url, data);
  return (
    <div className='App '>
      <Banner heading='Our Wide Ranges Of Cakes' tag='Get A Look At' image='' />
      <div className=' py-8 px-28 flex flex-row '>
        <div className='w-9/12 '>
          <a className='text-black text-2xl  opacity-80'>Shopping Cart</a>
          <div className='w-full pr-10'>
            <div className=''>
              {data.map((v, k) => {
                return (
                  <Rating
                    key={k}
                    userName={v.userName}
                    verified={true}
                    review={v.review}
                    value=''
                    userImage={v.image}
                  />
                );
              })}
            </div>

            <div className='w-full justify-center flex flex-col  items-center my-14'>
              <a className='text-black text-2xl  opacity-80'>
                Your Cart is Empty!
              </a>
              <Button
                onClick={() => gotoUrl("/")}
                style='rounded-md text-sm bg-brown-800 border-none text-center py-2 text-white my-4 hover:bg-brown-900 w-full '
                value='Add Items in Cart'
              />
            </div>
          </div>
        </div>
        <div className='w-1/4 '>
          <a className='text-black text-2xl  opacity-80'>Cart Total</a>
          <Line style='bg-gray-200 my-3 mt-4' />
          <div className='flex flex-row  '>
            <a className='text-black text-md font-semibold  opacity-90 w-1/2'>
              Items
            </a>
            <a className='text-black text-md   opacity-90 w-1/2'>0</a>
          </div>
          <Line style='bg-gray-200 my-3' />
          <div className='flex flex-row  '>
            <a className='text-black text-md font-semibold  opacity-90 w-1/2'>
              Total
            </a>
            <a className='text-black text-md opacity-90 w-1/2'>Rs 0/- PKR</a>
          </div>
          <Button
            // onClick={() => gotoUrl("/")}
            style='rounded-md text-sm bg-green-400 border-none text-center py-2 text-white my-6 hover:bg-green-500'
            value='Proceed to checkout'
          />
          <Button
            // onClick={() => gotoUrl("/")}
            style='rounded-md text-sm bg-amber-400 border-none text-center py-2 text-white my-6 mt-7'
            value='Continue Shopping'
          />
        </div>
      </div>
      <CallUs />
    </div>
  );
}
export default Cart;

function Rating({ userName, verified, review, value, userImage }) {
  return (
    <div className=''>
      <div className='flex flex-row w-full pb-3 mt-7'>
        <div className='flex flex-row w-4/12   '>
          <img src={userImage} className='h-20 w-20 rounded-xl' />
          <a className='text-sm text-gray-600   flex flex-row px-3 '>
            Beautiful Dress Cake Flavour: Carry Filling: Pineapple Date:
            2022/09/28 14:00
          </a>
        </div>
        <div className='flex flex-col  w-4/12  text-start'>
          <div className='flex flex-row '>
            <a className='text-gray-600 text-sm  font-semibold  opacity-80 w-1/2'>
              Filling Price
            </a>
            <a className='text-gray-600 text-sm    opacity-80 w-1/2'>0</a>
          </div>
          <div className='flex flex-row mt-1'>
            <a className='text-gray-600 text-sm  font-semibold  opacity-80 w-1/2'>
              Product Price
            </a>
            <a className='text-gray-600 text-sm    opacity-80 w-1/2'>
              62,400/-
            </a>
          </div>
          <Line style='bg-gray-100 my-2' />
          <div className='flex flex-row '>
            <a className='text-black text-sm font-semibold  opacity-90 w-1/2'>
              Sub Total
            </a>
            <a className='text-brown-900 text-sm font-bold   opacity-90 w-1/2'>
              62,400/-
            </a>
          </div>
        </div>
        <div className='flex flex-col w-4/12 '>
          <div className='flex flex-row justify-between px-7'>
            <RoundButton value='-' />
            <div className='border border-gray-200 w-28 rounded-md px-2 flex flex-row justify-center'>
              <input
                placeholder='0'
                className=' w-10 outline-none'
                type='number'
              />
              <a>Pounds</a>
            </div>

            <RoundButton value='+' />
          </div>
          <div className='flex flex-row justify-between px-7 mt-6'>
            <RoundButton value='-' />
            <div className='border border-gray-200 w-28 rounded-md px-2 flex flex-row justify-center'>
              <input
                placeholder='0'
                className=' w-10 outline-none'
                type='number'
              />
              <a>Quantity</a>
            </div>

            <RoundButton value='+' />
          </div>
        </div>{" "}
      </div>
      {/* <a className='text-sm text-gray-500 '>{review}</a>
      <Line style='mt-5 mb-4' /> */}
      <Line style='bg-gray-200 my-2' />
    </div>
  );
}
function Avatar({ image }) {
  return <img src={image} className='h-14 w-14 rounded-full' />;
}
function RoundButton({ value }) {
  return (
    <button className='h-7 w-7 pb-1 bg-brown-900 hover:bg-amber-500 duration-300 rounded-full text-white items-center justify-center text-center pt-0'>
      {value}
    </button>
  );
}
// const data2 = [
//   {
//     image: Cake2,
//     heading: "Cake For Every Occation",
//     value:
//       "You can select perfect Best cake in lahore for your best moments. Buy cake on credit card,jazzcash,easypaisa,bank account and on cash",
//   },
//   {
//     image: Smile,
//     heading: "Best Taste",
//     value:
//       "We assure our cake are the best quality cake in  all over the Pakistan & We deliver cakes in lahore in just 5 to 6 hours",
//   },
//   {
//     image: deliver,
//     heading: "Home Delivery",
//     value:
//       "We provides Birthday cakes home delivery services in Lahore and Best birthday cakes in pakistan",
//   },
// ];
const data = [
  {
    userName: "Zain Malik",
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu0pU6lMV0s-ST1PSvszeUhfSvm99_0NvsyVD2e9=s96-c",
    review: "Delicious Makeup Theme Cake, If you or your beloved is make up",
  },
  {
    userName: "Hamza",
    image:
      "https://images.unsplash.com/photo-1660684118903-4f9f66223353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFuemF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    review: "Delicious Makeup Theme Cake, If you or your beloved is make up",
  },
  {
    userName: "Alina",
    image:
      "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    review: "Delicious Makeup Theme Cake, If you or your beloved is make up",
  },
  {
    userName: "******",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEWVu9////+QuN6avuCMtt3k7fa80+r5+/2nxuTq8fj1+PzV4/Gvy+be6fTM3e/F2e0/1qUqAAADjklEQVR4nO1b25KrIBCUARG56P//7UrUZPfEyLRhYuqUXbVP2Spa5sJMDzTNhQsXLlQAkckgOmVxo120Q0gphcFGp81HaUwfbZNXv+GTbT63F8YFtYXkzEfWJ91urp/R6g9sA40v188YxSnQ6w1YtkGYgukLBJTqZZ2hTGCiILg+bcfAvwhihiDLIqCUFaPAJKCU0PpMG0jagU1AaBNoABgMIpvgywvf4SUIOICAUq4+AcgIImYgTjp8oK/PQCNuMDmCrs4AcwMJR4ggg1ibAPtMWFH9bCiURs+oXiyBwSgQjheDr/CD82MBzgfV0/LpGalxHUSgq5+Vzz+Zzj+dTYIYpPq9G5gQJHro0+vERkMM6jsiQzn4jVaAwDd0LIgjSLjBFI8AAxkd5Qt6Z74ZZIwwmYF7NHgpMYtdpciJiszzUeBcXME8G0R1Vc4miKgXK1ieIKflZZyv6ja6VC52cm44o2gHWRvcKJw9X5hcYY/C+JE5zw4FeQLzFlPcTgt+6dTkDEHN8o3UbB3UYVnajDIcyOjwaAOMHv6GZTfo9aepsQjVB6DT8nbORWn9PiIX2t53qvN9G9w67aRm7mx6W5EEkY6PCWt/HynS9IPWbvqj+7SV9D1p+hR1lSksGfd3wNvZ1w5v7B/b+OTe3ggy47Pfty+mu8Y9txR+fI8Dxe1jIMWn/SWK271t946astOk9IPL5l+h3fD61Dzevpj98ty3+eZBzLcQ2v3KJRxMlbCA9xoHzyusWd7HoaKBMNFkH+nAJhA60tiHwykYRC4oo8WdEdQPS8D1xYqBMAMOB3aXygXczdYMxRlgQMJifhlgGQ/oJVyAugqoInMAKs1UnYBSGIO6CXEGlBGqZ4MMKCMUKoNjwKqE+o4I3tUCRzo8QAKXhCNCrggPF3kAimaRUICCQSQUoGBgKGZHAKhsJBEKUzDwrSASjFA4Vq4RVwC1okwwAvN4oXQAJASBEm0Gu1ATSkhASoLv3XDBFhKEUiKQFMGrBnywLyV8AYPTrXB+NGJXDfiAnjaE+idDF4D1s3a+oaW+Az9qtH0no3dESgz9cFBoJ9JjQassw7fjWxJ7fro19EdZ+H6s8tiLTBNtQFn4YGNTcdKSn9A5W9KPl7XbYF1+cFdt9QeNbM/MIw93nnEb91i3/J8giAxp7Vy04xBub/vCMNronNb02YeGeaxgzPLA8ZwnjhcuXPjP8APf/Cj0ImVybQAAAABJRU5ErkJggg==",
    review: "Delicious Makeup Theme Cake, If you or your beloved is make up",
  },
];
