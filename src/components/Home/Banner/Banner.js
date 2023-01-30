import React from "react";

const Banner = () => {
  return (
    <div className="bg-primary h-[65vh] lg:h-[70vh] text-white flex justify-center items-center">
      <div className="lg:flex flex-row justify-center items-center gap-16">
        <h3 className="font-bold text-3xl lg:text-5xl text-center mb-5 lg:mb-0">
          IMMERSE IN LUXURY, BEAUTY <br /> AND WELLNESS TO <br /> DESTRESS.
        </h3>
        <img
          src="https://avasalonspa.in/wp-content/uploads/2021/08/lotus-spa-template-hero-img-bg-1024x864.png"
          alt=""
          className="w-[448px]"
        />
      </div>
    </div>
  );
};

export default Banner;
