import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="my-10 text-center">
      <p className="text-center text-5xl font-bold italic">Our Menu</p>
      <div className="grid lg:grid-cols-3  gap-5 mt-10 ml-15 grid-cols-1">
        <div>
          <img
            src="/coldCof1.jpg"
            className="rounded-xl hover:shadow-2xl lg:h-[480px]"
            alt=""
          />
          <p className="text-center font-semibold italic mt-5 text-2xl">
            Cold coffee
          </p>
        </div>
        <div>
          <img
            src="/expresso.jpg"
            className="rounded-xl hover:shadow-2xl lg:h-[480px]"
            alt=""
          />
          <p className="text-center font-semibold italic mt-5 text-2xl">
            Espresso
          </p>
        </div>
        <div>
          <img
            src="/matcha1.jpg"
            className="rounded-xl hover:shadow-2xl lg:h-[480px]"
            alt=""
          />
          <p className="text-center font-semibold italic mt-5 text-2xl">
            Matcha
          </p>
        </div>
      </div>
      <Link to={"/lists"}>
        <button className="btn mt-10 text-xl p-6 border-t-lime-950 hover:border-lime-950 hover:bg-gradient-to-r hover:from-red-950 hover:to-90% ">
          See More...
        </button>
      </Link>
    </div>
  );
};

export default Menu;
