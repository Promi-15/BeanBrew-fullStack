import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="py-14 text-center bg-black">
      <p className="text-center text-5xl font-bold italic text-white">
        Our Menu
      </p>
      <p className="text-center italic text-sm opacity-40 max-w-7xl mx-auto text-white">
        A coffee menu offers a delightful variety of beverages made from rich,
        roasted coffee beans. It typically includes classics like espresso,
        cappuccino, latte, and Americano, along with iced options and flavored
        drinks such as caramel macchiato or mocha. Whether you prefer something
        strong and bold or smooth and creamy, the coffee menu caters to all
        tastes, making it perfect for every coffee lover.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:w-[650px] mx-auto my-10 bg-gray-200 p-5  space-y-6 ">
          <div className="flex flex-row justify-between">
            <img
              src="../../public/expresso.jpg"
              className="w-15 rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-bold italic underline">Americano Espresso</p>
              <p className="font-light ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                maxime.
              </p>
            </div>
            <div className=" h-15 border-1 border-black"> </div>
            <div>
              <p className="font-medium">$183.3</p>
              <p className="opacity-35">
                {" "}
                <s>$200</s>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <img
              src="../../public/coldCof1.jpg"
              className="w-15 rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-bold italic underline">Mericano Cold Coffee</p>
              <p className="font-light ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                maxime.
              </p>
            </div>
            <div className=" h-15 border-1 border-black"> </div>
            <div>
              <p className="font-medium">$183.3</p>
              <p className="opacity-35">
                {" "}
                <s>$200</s>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <img
              src="../../public/iceCofi1.jpg"
              className="w-15 rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-bold italic underline">
                Americano Roasted Ice Latte
              </p>
              <p className="font-light ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                maxime.
              </p>
            </div>
            <div className=" h-15 border-1 border-black"> </div>
            <div>
              <p className="font-medium">$183.3</p>
              <p className="opacity-35">
                {" "}
                <s>$200</s>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <img
              src="../../public/matcha1.jpg"
              className="w-15 rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-bold italic underline">Matcha</p>
              <p className="font-light ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                maxime.
              </p>
            </div>
            <div className=" h-15 border-1 border-black"> </div>
            <div>
              <p className="font-medium">$103.3</p>
              <p className="opacity-35">
                {" "}
                <s>$100</s>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[650px] my-10 ">
          <p className="italic font-bold bg-gradient-to-bl from-red-950 to-pink-900 p-6"> Time to open and close</p>
          <div className="flex flex-row justify-between  bg-gray-200 px-10 py-3.5">
            <p>Sunday</p>
            <p>Closed</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between  bg-gray-200 px-10  py-3.5">
            <p>Monday</p>
            <p>6.00am-7.00pm</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between  bg-gray-200 px-10  py-3.5">
            <p>Tuesday</p>
            <p>6.00am-7.00pm</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between  bg-gray-200 px-10  py-3.5">
            <p>Wednesday</p>
            <p>6.00am-7.00pm</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between  bg-gray-200 px-10  py-3.5">
            <p>Thursday</p>
            <p>6.00am-7.00pm</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between  bg-gray-200 px-10  py-3.5">
            <p>Friday</p>
            <p>6.00am-3.00pm</p>
          </div>
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
