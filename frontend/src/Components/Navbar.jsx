import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-200  rounded-sm flex justify-between items-center px-10 lg:fixed lg:top-0 w-full z-50 shadow-md">
      <div className="flex items-center">
        <img src="/logoN.png " className="w-24 h-20" alt="" />
        <img
          src="/logoimg.png"
          className="w-20 pt-3 opacity-30 absolute left-28"
          alt=""
        />
      </div>
      <div>
        <img
          src="/cat.jpg"
          className="w-15 h-15 rounded-full cursor-pointer"
          alt=""
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute bg-gray-200 top-24 right-5  rounded-xl   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
            <ul
              className="  space-y-1.5 text-sm  "
            >

           
             <Link to={"/createNewCoffee"}> <li className="hover:bg-cyan-100 px-8 py-2">ADD New items</li></Link>
              <li className="hover:bg-cyan-100 px-8 py-2">Login</li>
              <li className="hover:bg-cyan-100 px-8 py-2">Register</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
