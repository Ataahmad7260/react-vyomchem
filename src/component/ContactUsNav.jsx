import React from "react";
import { NavLink } from "react-router-dom";
const ContactUsNav = () => {
  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center ">
      <div className="md:flex  w-4/5">
        <div className=" flex-1" data-aos="fade-right">
          <div>
            <div className="pb-8 md:pb-0">
              <h5 className="text-4xl md:text-5xl font-bold text-black font-serif mb-3">
                GET IN TOUCH
              </h5>
              <h2 className="text-2xl  font-bold text-purple-900 mb-3">
                WE WOULD LIKE TO HERE <br className="" /> FROM YOU!
              </h2>
              <p className="mb-5">
                If you would like more information about our company and
                products,
                <br /> please contact us. We will be happy to help!
              </p>
              <NavLink to="/contact">
              <button className="border-black border w-32 h-8 hover:text-white bg-white hover:bg-black text-black rounded-lg">
                Contact Us
              </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className=" flex-1 " data-aos="fade-left">
          <img
            src="./public/image/Ayurvedic-image.jpg"
            alt=""
            className="object-fill "
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsNav;

// <div className="flex bg-gray-100  " style={{ height: "100vh" }}>
// <div
//   className="relative "
//   style={{ width: "50%", top: "110px", left: 80 }}
// >
//   <div>
//     <h5 className="text-5xl font-bold text-black font-serif mb-3">
//       GET IN TOUCH
//     </h5>
//     <h2 className="text-2xl  font-bold text-purple-900 mb-3">
//       WE WOULD LIKE TO HERE <br className="" /> FROM YOU!
//     </h2>
//     <p className="mb-5">
//       If you would like more information about our company and products,
//       <br /> please contact us. We will be happy to help!
//     </p>
//     <button className="border-black border w-32 h-8 hover:text-white bg-white hover:bg-black text-black rounded-lg">
//       Contact Us
//     </button>
//   </div>
// </div>
// <div className="2    " style={{ width: "50%" }}>
//   <img
//     src="./public/image/Ayurvedic-image.jpg"
//     alt=""
//     className="object-fill "
//     style={{ width: "100%" }}
//   />
// </div>
// </div>
