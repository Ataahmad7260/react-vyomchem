import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const product = [
    {
      name: "Extract (Liquid)",
      link: "/cosmeceuticals/#Extract (Liquid)",
    },
    {
      name: " Alcohol Sulphate",
      link: "/cosmeceuticals/#Alcohol Sulphate",
    },
    {
      name: "Milliglobules",
      link: "/cosmeceuticals/#Milliglobules",
    },
    {
      name: "Active & Miscellaneous",
      link: "/cosmeceuticals/#Active & Miscellaneous",
    },
    {
      name: "Wax & Butter",
      link: "/cosmeceuticals/#Wax & Butter",
    },
    {
      name: "Proteins",
      link: "/cosmeceuticals/#Protein",
    },
    {
      name: "Booster",
      link: "/cosmeceuticals/#Booster",
    },
    {
      name: "Anti-Oxidants",
      link: "/cosmeceuticals/#Anti-Oxidants/ Parabens Free Preservatives",
    },
    {
      name: "Fixatives",
      link: "/cosmeceuticals/#Fixatives",
    },
    {
      name: "Paraben",
      link: "/cosmeceuticals/#Paraben",
    },
    {
      name: "Pearlising Agents",
      link: "/cosmeceuticals/#Pearlising Agents",
    },
    {
      name: "Sunscreens",
      link: "/cosmeceuticals/#Sunscreens",
    },
    {
      name: "Conditioning Agents",
      link: "/cosmeceuticals/#Conditioning Agents",
    },
    {
      name: "Moisturizers",
      link: "/cosmeceuticals/#Moisturizers",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleDropdown2 = () => {
    setDropdown2(!dropdown2);
  };
  const toggleDropdown3 = () => {
    setDropdown3(!dropdown3);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      style={{
        zIndex: 3,
        backgroundImage: `url('/image/bg-headerr-vyom.jpg')`,
      }}
      className="  shadow-lg border-b-2 h-max md:h-max p-2 l border-gray-800 sticky  md:w-full"
    >
      <div className="container max-w-7xl mx-auto xl:pl-12 xl:pr-12 pl-1 pr-1 ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex-shrink-0 md:hidden ">
            <NavLink to="/">
              <img src="/image/logo-vyomchem.png" className="h-11 " alt="" />
            </NavLink>
          </div>
          {/* Mobile Menu Button (visible on smaller screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-500 px-3 py-2"
            >
              {isOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation Links (visible on larger screens) */}
          <div
            className={`  md:flex z-10 justify-evenly  md:flex-grow md:items-center hidden :block`}
          >
            <div className="">
              <NavLink to="/">
                <img src="/image/logo-vyomchem.png" className="h-16 xl:h-24" alt="" />
              </NavLink>
            </div>
          </div>
          <div
            className={`md:flex hidden justify-center  md:flex-grow md:items-center ${
              isOpen ? "hidden" : ""
            }`}
          >
            <div className=" relative hidden md:block">
              <a
                href="#"
                className=" font-sans xl:text-lg text-sm font-semibold text-black px-3 py-2"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                Products
                {dropdown && (
                 <div
                    className="absolute w-max mt-1 -left-[2rem] bg-white  shadow-md ">
                    <NavLink
                      to="/cosmeceuticals/#Extract (Liquid)"
                      className="block px-4 py-2  xl:text-sm text-xs text-black hover:text-green-500"
                      onMouseEnter={toggleDropdown3}
                      onMouseLeave={toggleDropdown3}
                    >
                      Cosmecuticals
                      {dropdown3 && (
                        <div className="grid grid-cols-2  absolute w-max  md:-mt-6 xl:-mt-8 xl:left-[11rem] md:left-[98px] bg-gray-100  shadow-md ">
                          {product.map((ele) => {
                            return (
                              <div className="flex-1  ">
                                <div>
                                  <NavLink
                                    to={ele.link}
                                    className="block px-4 py-2  xl:text-sm text-xs text-black hover:bg-green-100"
                                  >
                                    {ele.name}
                                  </NavLink>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </NavLink>
                    <NavLink
                      href="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf"
                      target="_blank"
                      className="block px-4  py-2 xl:text-sm text-xs text-black hover:text-green-500"
                    >
                      Cosmeceuticals Brochure
                    </NavLink>
                  </div>
                )}
              </a>
            </div>
            <div className="relative hidden md:block">
              <a
                href="#"
                className="z-10 font-sans xl:text-lg text-sm text-black font-semibold hover:text-green-500 px-3 py-2"
                onMouseEnter={toggleDropdown2}
                onMouseLeave={toggleDropdown2}
              >
                Exclusive Product
                {dropdown2 && (
                  <div className="absolute w-max top-full m-[-16px] left-0 mt-[8px] bg-white shadow-md ">
                    <a
                      href="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                      className="block px-5 py-3  xl:text-sm text-xs text-black "
                      target="_blank"
                    >
                      Undenatured Chicken collagen Type II (Smarticol)
                    </a>
                  </div>
                )}
              </a>
            </div>
            <div className="relative hidden md:block">
              <NavLink
                to="/Principle"
                className="z-10 font-sans xl:text-lg text-sm text-black font-semibold hover:text-green-500 px-3 py-2"
                onMouseEnter={toggleDropdown3}
                onMouseLeave={toggleDropdown3}
              >
                Our Principles
              </NavLink>
            </div>
            <NavLink
              to="/"
              className="font-sans xl:text-lg text-sm text-black font-semibold hover:text-green-500  px-3 py-2"
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/about"
              className="font-sans xl:text-xl text-sm text-black font-semibold hover:text-green-500 px-3 py-2"
            >
              About Us
            </NavLink> */}
            <NavLink
              to="/contact"
              className="font-sans xl:text-lg text-sm text-black font-semibold hover:text-green-500 px-3 py-2"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu (visible on smaller screens) */}
        <div className="md:flex z-10">
          <div
            className={`md:hidden ${isOpen ? "block" : "hidden"}`}
            onClick={toggleMenu}
          >
            <NavLink
              to="/"
              className="block text-black font-sans font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-black font-sans font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
            >
              About Us
            </NavLink>
          </div>
          <div className={`md:hiddem ${isOpen ? "block" : "hidden"}`}>
            <div className=" relative block md:hidden">
              <div
                // to="#"
                className=" block text-black font-sans font-semibold bg-white   hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleDropdown}
              >
                Product
                {dropdown && (
                  <div
                    className=" top-full left- mt-1 bg-white shadow-md rounded-md"
                    onClick={toggleMenu}
                  >
                    <NavLink
                      to="/cosmeceuticals/#Extract (Liquid)"
                      className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                    >
                      Cosmecuticals
                    </NavLink>
                    <a
                      href="https://www.vyomchem.com/pdf/Cosmeceuticals-Brochure.pdf"
                      target="_blank"
                      className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                    >
                      Cosmeceuticals Brochure
                    </a>
                  </div>
                )}
              </div>
              <div
                // to="#"
                className=" block text-black font-sans font-semibold bg-white   hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleDropdown2}
              >
                Exclusive Product
                {dropdown2 && (
                  <div
                    className=" top-full left- mt-1 bg-white shadow-md rounded-md"
                    onClick={toggleMenu}
                  >
                    <a
                      href="https://www.vionabiopharma.com/undenatured-native-chicken-collagen-type-ii.php"
                      target="_blank"
                      className="block px-4 py-2 text-sm bg-green-300 text-black hover:bg-gray-100"
                    >
                      Undenatured Chicken collagen Type II (Smarticol)
                    </a>
                  </div>
                )}
              </div>
              <div>
                <NavLink
                  to="/Principle"
                  className=" block text-black font-sans font-semibold bg-white   hover:bg-green-100 hover:text-green-900 px-3 py-2"
                  onClick={toggleMenu}
                >
                  Our Principles
                </NavLink>
              </div>
              <NavLink
                to="/contact"
                className="block text-black font-sans font-semibold bg-white hover:bg-green-100 hover:text-green-900 px-3 py-2"
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
