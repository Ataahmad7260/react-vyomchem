import React from "react";

const Cosmeceuticals = () => {
  const products = [
    {
      image: "./public/image/WAX.jpg",
      image2: "./public/image/pearlising.jpg",
      text: "WAX AND BUTTER",
      text2: "Pearlising Agents",
    },
    {
      image: "./public/image/extract.jpg",
      image2: "./public/image/extract.jpg",
      text: "Extract (Liquid)",
      text2: "Extract (Liquid)",
    },
    {
      image: "./public/image/algae-extract-3.jpg",
      image2: "./public/image/algae-extract-3.jpg",
      text: "Alcohol Sulphate",
      text2: "Alcohol Sulphate",
    },
    {
      image: "./public/image/melligolubous.jpg",
      image2: "./public/image/melligolubous.jpg",
      text: "Milliglobules/Microbeads",
      text2: "Milliglobules/Microbeads",
    },
    {
      image: "./public/image/Bambooextract.jpg",
      image2: "./public/image/Bambooextract.jpg",
      text: "Active $ Miscellaneous",
      text2: "Active $ Miscellaneous",
    },
    {
      image: "./public/image/more.jpg",
      image2: "./public/image/more.jpg",
      text: "Pearlising Agent and more",
      text2: "MORE",

      link: "/cosmeceuticals",
    },
  ];
  return (
    <div
      style={{
        // height: "100vh",
        // background: "red",
        display: "flex",
        justifyContent: "center",
      }}
      className="md:py-10 md:px-10 pl-1 md:pl-0 md:h-screen  "
    >
      <div className="md:flex" style={{ width: "90%", alignSelf: "center" }}>
        <div
          className="flex flex-1 flex-col justify-between  "
          style={{ flex: 2 }}
          data-aos="fade-right"
        >
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flex: 1,
              padding: 15,
              marginTop: 20,
            }}
            className=""
          >
            <div className="forline and span flex flex-row  md:mt-0 ">
              <div className="forline relative bg-green-900 rounded mr-1 md:p-1 md:-mt-2 md:h-16 w-2 "></div>
              <span
                className="font-bold md:font-mono text-3xl md:text-5xl"
                style={{ fontFamily: "monospace" }}
              >
                Cosmeceuticals
              </span>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
            }}
          >
            <div
              style={{
                position: "relative",
                alignSelf: "end",
                margin: 15,
                borderRadius: 15,
              }}
            >
              <span
                className="md:block hidden font-bold text-white text-2xl"
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 10,
                  zIndex: 1,
                }}
              >
                Wax and butter
              </span>
              {/* image for display view  */}
              <img
                src="./public/image/WAX.jpg"
                className="md:block hidden"
                alt=""
                style={{
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: 10,
                  filter: "brightness(60%)",
                }}
              />

              {/* comsecetical section for mobile view this section is extra added for mobile view  */}
              <div className="  justify-center flex mt-4 mb-2 md:hidden  flex-wrap">
                {products.map((ele) => {
                  return (
                    <figure className="md:m-4 m-2  relative md:hidden  ">
                      <a href={ele.link}>
                        <img
                          className="rounded-2xl w-72 h-60 object-cover"
                          style={{
                            filter: "brightness(60%)",
                          }}
                          src={ele.image}
                          alt="image description"
                        />
                      </a>
                      <fig className="absolute px-4 text-lg text-white font-bold bottom-6">
                        <p>{ele.text}</p>
                      </fig>
                    </figure>
                  );
                })}
              </div>
            </div>

            {/* end of the cosmeceuticals section on mob view */}
          </div>
        </div>

        <div
          style={{ flex: 4 }}
          data-aos="fade-left"
          className=" md:flex  flex-wrap justify-end mt-4 mb-2 hidden  md:mt-0 md:mb-0"
        >
          <div
            style={{
              alignContent: "end",
              flexWrap: "wrap",
              justifyContent: "end",
              display: "flex",
              alignSelf: "end",
            }}
          >
            {products.map((ele) => {
              return (
                <figure className="md:m-4 m-2 relative w-48 h-52 object-cover hover:scale-125 transition-all">
                  <a href={ele.link}>
                    <img
                      style={{
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: 10,
                        filter: "brightness(60%)",
                      }}
                      className="rounded-2xl object-cover w-full h-full"
                      src={ele.image2}
                      alt="image description"
                    />
                  </a>
                  <fig className="absolute px-4 text-lg text-white font-bold bottom-6">
                    <p>{ele.text2}</p>
                  </fig>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmeceuticals;

// import React from "react";

// const Cosmeceuticals = () => {
//   const products = [
//     {
//       image:
//         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
//       text: "test",
//     },
//     {
//       image:
//         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
//       text: "test",
//     },
//     {
//       image:
//         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
//       text: "test",
//     },
//     {
//       image:
//         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
//       text: "test",
//     },
//     {
//       image:
//         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
//       text: "test",
//     },
//     {
//       image:
//         "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
//       text: "test",
//     },
//   ];
//   return (
//     <div
//       style={{
//         // height: "100vh",
//         // background: "red",
//         display: "flex",
//         justifyContent: "center",
//       }}
//       className="py-10 px-10 md:h-screen  "
//     >
//       <div className="md:flex" style={{ width: "90%", alignSelf: "center" }}>
//         <div
//           className="flex flex-1 flex-col justify-between  "
//           style={{ flex: 2 }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "start",
//               flex: 1,
//               padding: 15,
//               marginTop: 20,
//             }}
//             className=""
//           >
//             <div className="forline and span flex flex-row  md:mt-0 ">
//               <div
//                 className="forline relative bg-green-900 rounded mr-1 "
//                 style={{
//                   //  {{padding:4,marginTop:1, height:"31px", width:"2px" }}
//                   "@media only screen and (max-width: 600px)": {
//                     padding: 4,
//                     marginTop: 1,
//                     height: "31px",
//                     width: "2px",
//                   },
//                   padding: 4,
//                   marginTop: -6,
//                   height: "40px",
//                   width: "2px",
//                 }}
//               ></div>
//               <span
//                 className="font-bold font-mono text-xl"
//                 style={{ fontSize: 45, fontFamily: "monospace" }}
//               >
//                 Cosmeceuticals
//               </span>
//             </div>
//           </div>
//           <div
//             style={{
//               flex: 1,
//               display: "flex",
//             }}
//           >
//             <div
//               style={{
//                 position: "relative",
//                 alignSelf: "end",
//                 margin: 15,
//                 borderRadius: 15,
//               }}
//             >
//               <span style={{ position: "absolute", bottom: 20, left: 10 }}>
//                 Wax and butter
//               </span>
//               {/* image for display view  */}
//               <img
//                 src="./public/image/WAX.jpg"
//                 alt=""
//                 style={{
//                   boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
//                   borderRadius: 10,
//                 }}
//               />

//               {/* comsecetical section for mobile view this section is extra added for mobile view  */}
//               <div className="  justify-center flex mt-4 mb-2 md:hidden  flex-wrap">
//                 {products.map((ele) => {
//                   return (
//                     <figure className="md:m-4 m-2 md:max-w-60 w-30 relative md:hidden ">
//                       <a href="#">
//                         <img
//                           className="rounded-2xl"
//                           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
//                           alt="image description"
//                         />
//                       </a>
//                       <fig className="absolute px-4 text-lg text-white bottom-6">
//                         <p>2</p>
//                       </fig>
//                     </figure>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* end of the cosmeceuticals section on mob view */}
//           </div>
//         </div>

//         <div
//           style={{ flex: 4 }}
//           className=" md:flex flex-wrap justify-end mt-4 mb-2 hidden  md:mt-0 md:mb-0"
//         >
//           <div
//             style={{
//               alignContent: "end",
//               flexWrap: "wrap",
//               justifyContent: "end",
//               display: "flex",
//               alignSelf: "end",
//             }}
//           >
//             {products.map((ele) => {
//               return (
//                 <div className="" style={{ margin: 15 }}>
//                   <a href="#">
//                     <img
//                       className="rounded-2xl"
//                       src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
//                       alt="image description"
//                       style={{
//                         height: 230,
//                         width: 230,
//                         boxShadow: "rgb(178 178 178) 8px 5px 20px 6px",
//                       }}
//                     />
//                   </a>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cosmeceuticals;
