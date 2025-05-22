import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-200  rounded-2xl flex justify-between items-center px-10">
      <div className="flex items-center">
              <img src="../../public/logoN.png " className="w-24 h-20" alt="" />
              <img src="../../public/logoimg.png" className="w-20 pt-3 opacity-30 absolute left-28" alt="" />
       
      </div>
      <div>
        <img
          src="../../public/cat.jpg"
          className="w-15 h-15 rounded-full cursor-pointer"
          alt=""
          onClick={() => setIsOpen(!isOpen)}
              />
              {
                  isOpen && (
                      <div className="absolute bg-gray-200 top-24 right-5  rounded-xl   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
                          <ul className="  space-y-1.5 text-sm  
">
                              <li className="hover:bg-cyan-100 px-8 py-2">ADD New items</li>
                              <li className="hover:bg-cyan-100 px-8 py-2">Login</li>
                              <li className="hover:bg-cyan-100 px-8 py-2">Register</li>
                          </ul>
                      </div>
                  )
              }
      </div>
    </div>
  );
};

export default Navbar;
