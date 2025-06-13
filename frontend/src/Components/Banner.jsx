import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000, // slower animations
      easing: "ease-in-out",
      delay: 3000, // global default delay
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/G4Q5rPF9/white-cup-steaming-coffee-sits-saucer-surrounded-by-coffee-beans-illuminated-by-red-light.jpg)",
      }}
    >
      <div className=" opacity-50 absolute bg-black inset-0   "></div>

      <div
        className="top-28 z-10 relative p-10 space-y-10  lg:w-[900px] transition-all ease-in duration-1000"
       
      >
        <p className="text-white font-medium text-md italic">
          crafted with love, served with passion
        </p>
        <h1
          className="text-white text-4xl lg:text-7xl font-semibold italic"
          style={{ fontFamily: "'Prata', serif" }}
        >
          Step into the aroma of <br /> freshly coffee
        </h1>
        <p className="text-white opacity-70">
          Discover a place where every cup is a masterpiece, crafted with
          passion and precision. From the rich, bold flavors of our signature
          blends to the cozy ambiance that feels like home.
        </p>
        <button className="btn bg-gradient-to-l  from-red-950 to-red-500 p-5 font-bold hover:shadow-2xl hover:shadow-white">
          Discover Coffee
        </button>
      </div>
    </div>
  );
};

export default Banner;
