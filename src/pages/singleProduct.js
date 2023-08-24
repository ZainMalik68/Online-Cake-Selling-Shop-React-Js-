import React from "react";
import Banner from "../components/molecules/banner";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineVerified } from "react-icons/md";
import Product from "../components/molecules/product";
import { NavigatePage } from "../_global";
import Line from "../components/atoms/line";
import CallUs from "../components/atoms/callUs";
function SingleProduct() {
  const navigateSearch = NavigatePage();
  const gotoUrl = (url, data = {}) => navigateSearch(url, data);
  return (
    <div className='App '>
      <Banner heading='Our Wide Ranges Of Cakes' tag='Get A Look At' image='' />
      <div className='flex flex-col  py-8 px-28'>
        <a className='text-amber-500 text-2xl font-serif	w-full text-center'>
          Our Taste of Happiness
        </a>
        <div className='w-full'>
          <div className='w-full    flex flex-wrap  mt-10 mb-10'>
            <div className='2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/5 w-full       '>
              <img
                style={{ maxHeight: 500 }}
                src='https://www.cakes.com.pk/assets/cakes/Cocomelon-cake.jpg'
                alt='product'
                className='w-full  2xl:pr-3 xl:pr-2 lg:pr-2 '
              />
              <div className='flex flex-row mt-3 -ml-2'>
                {[1, 2, 34].map((v, k) => {
                  return (
                    <div
                      // onMouseEnter={() => setCurrentImage(v)}
                      className={`h-20 w-20 p-0.5  ml-2 cursor-pointer border-secondary border`}>
                      <img
                        src='https://www.cakes.com.pk/assets/cakes/Cocomelon-cake.jpg'
                        className={`h-full w-full `}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-3/5 w-full 2xl:pr-4 xl:pr-4 lg:pr-4 md:pl-2 '>
              helo
            </div>
          </div>
        </div>
        <div className='flex flex-col  border-gray-200 border px-10 py-10'>
          <a
            style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900 text-4xl  '>
            Discription
          </a>
          <a className='text-md text-gray-800 mt-7'>
            Delicious Makeup Theme Cake, If you or your beloved is make up
            addict. Our make up cake styles are delicious fondant cake are the
            simplest surprise for her. This cosmetic bra nd has become therefore
            fashionable. That anyone would like to have a small amount of it in
            their make up collection. Think about a lipstick that you simply
            love such a lot. And you’re getting it as a cake for your birthday!
            Wouldn’t it’s fun? Delicious Makeup Theme Cake, Just some of shots,
            of the make up Cake we created. We predict the foremost favorite a
            part of the complete cake is its look. The shimmering and
            stylishness of this Make-up kit cake is just fantastic.This exotic
            Makeup Theme Cake is wonderfully playful and can be a good surprise
            for the make-up lover. It’s a fondant cake with black forest flavor.
            For your sister’s birthday, you’ll surprise her with this amazing
            cake. She would be stunned once she is going to receive this unique
            cake. It’s a perfect gift for a birthday,anniversary, daughter’s day
            and lots of more occasions. birthday is the best online cake shop in
            Lahore. Contact us for more detail or visit our web site. You’ll
            customize your cake in keeping with your choice. Further charges are
            charged for the changes.
          </a>
          {/* <Line style='mt-5 mb-5' /> */}
          <a
            style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900 text-4xl mt-7  '>
            Reviews
          </a>
          <div className='flex flex-row space-x-5 items-center mt-5'>
            <a className='text-amber-500 text-4xl font-serif'>3.9/5</a>
            <div className='flex  space-x-1 mt-2 '>
              <AiFillStar color='#ffcc36' fontSize={40} />
              <AiFillStar color='#ffcc36' fontSize={40} />
              <AiFillStar color='#ffcc36' fontSize={40} />
              <AiFillStar color='#ffcc36' fontSize={40} />
              {/* <FaStarHalfAlt color='#ffcc36' fontSize={14} fill='#cccccc' /> */}
              <AiFillStar color='#cccccc' fontSize={40} />
            </div>
            <a className='text-brown-900  text-3xl   font-sans	opacity-80	'>
              7 Ratings
            </a>
          </div>
          <Line style='mt-5 mb-4' />
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
        </div>

        {/* <div className='flex flex-col  border-gray-200 border px-10 py-10 mt-10'>
          <a
            style={{ fontFamily: "Pacifico, cursive" }}
            className='text-brown-900 text-4xl  '>
            Reviews of this Cake
          </a>

          <a className='text-md text-gray-800 mt-5'></a>
        </div> */}
        <section className='py-10 w-full  mt-8'>
          <div className='flex flex-col items-center'>
            <a className='text-amber-500 text-3xl font-serif	'>
              Discover More Of
            </a>
            <a
              style={{ fontFamily: "Pacifico, cursive" }}
              className='text-brown-900 text-5xl  my-6	'>
              Our Sweet Selection
            </a>
          </div>

          <div className='mt-14 mb-10 flex flex-row'>
            {[1, 2, 3, 4].map(() => {
              return <Product onClick={() => gotoUrl("/product")} />;
            })}
          </div>
        </section>
      </div>
      <CallUs />
    </div>
  );
}
export default SingleProduct;

function Rating({ userName, verified, review, value, userImage }) {
  return (
    <div>
      <div className='flex flex-row w-full pb-3 mt-7'>
        <Avatar image={userImage} />
        <div className='w-full flex flex-row justify-between'>
          <div className='px-3 flex flex-col'>
            <a className='text-lg text-gray-800 font-semibold flex flex-row'>
              {userName}
            </a>
            <div
              className='flex fle-row items-center'
              style={{ color: "#4caf50" }}>
              <MdOutlineVerified />
              <a className='text-sm ml-1'>Verified Purchase</a>
            </div>
          </div>
          <div>
            <div className='flex  space-x-1 mt-2 '>
              <AiFillStar color='#ffcc36' fontSize={20} />
              <AiFillStar color='#ffcc36' fontSize={20} />
              <AiFillStar color='#ffcc36' fontSize={20} />
              <AiFillStar color='#ffcc36' fontSize={20} />
              {/* <FaStarHalfAlt color='#ffcc36' fontSize={14} fill='#cccccc' /> */}
              <AiFillStar color='#cccccc' fontSize={20} />
            </div>
          </div>
        </div>
      </div>
      <a className='text-md text-gray-500 '>{review}</a>
      <Line style='mt-5 mb-4' />
    </div>
  );
}
function Avatar({ image }) {
  return <img src={image} className='h-14 w-14 rounded-full' />;
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
