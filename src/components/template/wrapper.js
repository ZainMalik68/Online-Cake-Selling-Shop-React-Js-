import React from "react";
import Navbar from "../molecules/navbar";
import Footer from "../orgasms/footer";
function Wrapper(props) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
export default Wrapper;
