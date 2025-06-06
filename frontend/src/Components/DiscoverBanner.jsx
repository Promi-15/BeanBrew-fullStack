import React from "react";

const DiscoverBanner = () => {
  return (
    <div className="relative h-96 flex justify-center items-center text-white overflow-hidden my-10 ;g:mx-2 rounded-xl">
      <video
        src="/coffeeVid.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
 
      <div className="relative z-10 text-center">
        <h1 className="Lg:text-4xl text-2xl italic roboto font-bold">Discover Our story</h1>
        <p className="text-white prata lg:w-1/2 mx-auto space-y-2.5 font-medium  lg:text-xl text-sm text-center mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          voluptatum voluptas asperiores et, cupiditate ex porro similique
          officiis adipisci sint corrupti aliquid repellendus magnam amet
          aliquam ipsa harum tenetur voluptates. Nulla at soluta nesciunt!
          Soluta sint, dolorem maiores in nostrum adipisci ad? Doloremque modi
          similique voluptatum. Est pariatur quod saepe.
        </p>
      </div>

    </div>
  );
};

export default DiscoverBanner;
