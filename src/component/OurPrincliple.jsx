import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./public/image/our-principle01.png",
    "./public/image/our-principle02.png",
    "./public/image/our-principle03.png",
    "./public/image/our-principle04.png",
    // "./public/image/our-principle05.png",
    "./public/image/our-principle06.png",
    "./public/image/our-principle07.png",
    "./public/image/our-principle08.png",
    "./public/image/our-principle09.png",
    "./public/image/our-principle10.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 3 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length - 0]);

  return (
    <div className="flex-1 justify-center flex flex-col bg-gray-100 md:pt-0 md:pb-0 pt-10 pb-10 ">
      <h1 className="text-center mt-2 md:mt-0 font-bold text-3xl md:text-4xl  md:mb-0 mb-4  ">
        OUR PRINCIPLES
      </h1>
      <div className="  flex justify-center text-center md:mt-2 ">
        <div className="md:relative  bg-white ">
          <div className="md:flex justify-center  hidden border-slate-950 border-solid ">
            {images
              .slice(currentSlide, currentSlide + 3)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="flex-1 md:w-full  border h-16 md:h-auto  border-black m-1  mb:mb-4 md:mb-3 md:m-4"
                  alt={`Slide ${currentSlide + index + 1}`}
                />
              ))}
          </div>
          {/* this image is for mobile view */}
          <div className="flex justify-center md:hidden    border-slate-950 border-solid ">
            {images
              .slice(currentSlide, currentSlide + 2)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="flex-1 md:w-full  border h-14 md:h-auto  border-black m-1  mb:mb-4 md:mb-3 md:m-4"
                  alt={`Slide ${currentSlide + index + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
