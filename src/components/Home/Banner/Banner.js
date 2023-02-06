import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/lotus-spa-template-hero-img-bg-.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,

        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "64vw auto",
      }}
      className="lg:h-[68vh] relative h-[92vh] bg-[#cba590] "
    >
      <div className="absolute top-[18%] left-5 lg:left-[18%]">
        <h4 className="font-sm font-bold uppercase text-white">
          WELCOME TO Crown Spa & Salon
        </h4>
        <h3 className="lg:text-6xl text-4xl my-10 font-bold text-white">
          Revitalize your mind <br /> body, and soul
        </h3>
        <p className="text-white font-bold text-xl">
          At Crown Spa & Salon, we offer a <br /> wide range of Ayurvedic
          massage and body treatments for <br /> optimal well-being.
        </p>

      </div>
    </div>
  );
};

export default Banner;
