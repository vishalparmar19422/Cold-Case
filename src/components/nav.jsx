import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHam = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 border-2  border-b-stone-700  rounded-md">
        <div>
          <img src={logo} className="w-32" alt="Logo"></img>
        </div>
        <div>
          {isMenuOpen ? (
            <ul
              className={`fixed left-0 top-[120px]  w-full text-white text-center bg-black animate-slidIn transition-all duration-300`}
            >
              <li className="cursor-pointer border-2 p-2 rounded-md hover:bg-green-400 transition-all  border-black">
                Home
              </li>
              <Link to="/contact">
                <li className="cursor-pointer border-2 p-2 rounded-md hover:bg-green-400 transition-all border-black">
                  Contact
                </li>
              </Link>
              <li className="cursor-pointer border-2 p-2 rounded-md hover:bg-green-400 transition-all border-black">
                Login
              </li>
              <li className="cursor-pointer border-2 p-2 rounded-md hover:bg-green-400 transition-all border-black">
                Register
              </li>
            </ul>
          ) : (
            <ul className="sm:flex sm:gap-10 hidden ">
               <Link to="/">
                <li className="cursor-pointer border-2 p-2 rounded-md hover:bg-green-400 transition-all border-black">
                  Home
                </li>
              </Link>
              <Link to="/contact">
                <li className="cursor-pointer border-2 p-2 rounded-md hover:bg-green-400 transition-all border-black">
                  Contact
                </li>
              </Link>
              <Link to="/login">
                <li className="cursor-pointer border-2 p-2 rounded-md hover:bg-green-400 transition-all border-black">
                  Login
                </li>
              </Link>
              <Link to="/signup">
                <li className="cursor-pointer border-2 p-2 rounded-md hover:bg-green-400 transition-all border-black">
                  SignUp
                </li>
              </Link>
            </ul>
          )}
          <div className="hamburger sm:hidden" onClick={handleHam}>
            <span
              className={`block w-[25px] h-[3px] bg-black m-[5px] transition-all duration-300 ${
                isMenuOpen ? "translate-y-[8px] transform rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block w-[25px] h-[3px] bg-black m-[5px] transition-all duration-300 ${
                isMenuOpen ? "hidden" : ""
              }`}
            ></span>
            <span
              className={`block w-[25px] h-[3px] bg-black m-[5px] transition-all duration-300 ${
                isMenuOpen ? "transform -rotate-45" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
