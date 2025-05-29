import React from "react";

const CreateCoffee = () => {
  return (
    <div
      className="lg:mt-20 lg:py-10  min-h-screen "
      style={{
        background:
          "radial-gradient(circle, rgba(122,13,50,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <p className="text-4xl italic font-bold text-center my-5">
        Create A new item
      </p>
      <div
        className="flex items-center  justify-center  max-w-7xl mx-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10  
"
      >
        <form className="flex flex-col gap-2.5   lg:p-10 lg:w-1/2 lg:h-[500px]">
          <label className="opacity-45">Name</label>
          <input
            type="text"
            name="name"
            id=""
            className="p-2 border-2 w-full"
            placeholder="name"
          />
          <label className="opacity-45">Price</label>
          <input
            type="number"
            name="price"
            id=""
            className="p-2 border-2 w-full"
            placeholder="price"
          />
          <label className="opacity-45">Image</label>
          <input
            type="text"
            name="image"
            id=""
            className="p-2 border-2 w-full"
            placeholder="image"
          />
          <button className="btn my-3 bg-transparent font-bold text-xl hover:shadow-2xl hover:shadow-cyan-200 hover:text-white">
            Create
          </button>
        </form>
              <div className="relative">
                  <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-md"></div>
          <img src="../../public/iceCofi1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateCoffee;
