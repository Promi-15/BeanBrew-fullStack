import React from "react";

const BreadBanner = () => {
  return (
    <div className="min-h-screen  relative w-full  ">
      <div className="flex lg:flex-row flex-col lg:gap-5">
         <div className="my-24 lg:w-1/2">
        {/* <video autoPlay loop muted src="../../public/coffeeVid.mp4" className='w-[700px]'></video> */}
        <img src="../../public/coffee2.jpg" alt="" />
      </div>
      <div className="lg:my-14   lg:w-1/2 lg:space-y-4 space-y-3 mx-2">
        <p className="italic font-bold text-2xl text-center dancing-script">Bread Menu</p>

        <div className="flex flex-row justify-around gap-10   w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 items-center px-2">
          <div>
            <p className="text-xl  font-bold prata ">Plain Bread</p>
            <p className="font-light italic roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              minima.
            </p>
          </div>
          <p>$28</p>
        </div>
        <div className="flex flex-row justify-around gap-10   w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 items-center  px-2">
          <div>
            <p className="text-xl  font-bold prata">Milk bread</p>
            <p className="font-light italic roboto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsa!
            </p>
          </div>
          <p>$28</p>
        </div>
        <div className="flex flex-row justify-around gap-10   w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 items-center  px-2">
          <div>
            <p className="text-xl  font-bold prata">Sandwich  Bread</p>
            <p className="font-light italic roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              minima.
            </p>
          </div>
          <p>$28</p>
        </div>
        <div className="flex flex-row justify-around gap-10   w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 items-center  px-2">
          <div>
            <p className="text-xl  font-bold prata">Brown Bread</p>
            <p className="font-light italic roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              minima.
            </p>
          </div>
          <p>$28</p>
        </div>
        <div className="flex flex-row justify-around gap-10   w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 items-center  px-2">
          <div>
            <p className="text-xl  font-bold prata">soft Bread</p>
            <p className="font-light italic roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              minima.
            </p>
          </div>
          <p>$28</p>
        </div>
        <div className="flex flex-row justify-around gap-10   w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 items-center  px-2">
          <div>
            <p className="text-xl  font-bold prata">Garlic Bread</p>
            <p className="font-light italic roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              minima.
            </p>
          </div>
          <p>$28</p>
        </div>
        <div className="flex flex-row justify-around gap-10   w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 items-center  px-2">
          <div>
            <p className="text-xl  font-bold prata">Burger Bread</p>
            <p className="font-light italic roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              minima.
            </p>
          </div>
          <p>$28</p>
        </div>
      </div>
     </div>
      <div className=" absolute top-80 w-40 right-0 lg:right-0 lg:w-60 lg:-top-6">
        <img
          src="../../public/coffeeBean.png"
          alt=""
          className=" opacity-40 mt-0"
        />
      </div>
      <div className=" absolute  lg:right-0 lg:w-60 lg:-bottom-1 w-40 right-0 -bottom-20">
        <img
          src="../../public/coffeeBean.png"
          alt=""
          className=" opacity-40 mt-0"
        />
      </div>
    </div>
  );
};

export default BreadBanner;
