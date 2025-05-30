import React from "react";

const Banner = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/G4Q5rPF9/white-cup-steaming-coffee-sits-saucer-surrounded-by-coffee-beans-illuminated-by-red-light.jpg)",
      }}
    >
      <div className=" opacity-50 absolute bg-black inset-0  lg:top-20 "></div>

      <div className="top-28 absolute p-10 space-y-10  lg:w-[900px]" >
        <p className="text-white font-medium text-md italic">crafted with love, served with passion</p>
        <h1 className="text-white text-4xl lg:text-7xl font-semibold italic"   style={{ fontFamily: "'Prata', serif" }}>
         Step into the aroma of <br /> freshly
          coffee
        </h1>
        <p className="text-white opacity-35" >
          Discover a place where every cup is a masterpiece, crafted with
          passion and precision. From the rich, bold flavors of our signature
          blends to the cozy ambiance that feels like home.
        </p>
        <button className="btn bg-gradient-to-l  from-bg-red-950 to-red-500 p-5 font-bold hover:shadow-2xl hover:shadow-white">Discover Coffee</button>
      </div>
    </div>
  );
};

export default Banner;
