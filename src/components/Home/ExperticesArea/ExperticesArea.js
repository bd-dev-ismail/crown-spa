import React from "react";
import videImg from "../../../assets/homepage-video-thumbnail.jpg";
import { BiSpa } from "react-icons/bi";
import { FaHands, FaHandsWash } from "react-icons/fa";
const ExperticesArea = () => {
  return (
    <div className="mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="text-center">
        <h5 className="font-bold uppercase text-4xl lg:text-5xl text-primary mb-4">
          Expertices Area
        </h5>
        <h3 className="font-bold text-xl text-secondary">
          A haven of tranquillity for the body, mind, and soul. Experience
          rejuvenation, peace, <br /> and refreshment.
        </h3>
      </div>
      <div className="mt-[5rem]">
        <img src={videImg} alt="" />
      </div>
      <div className="flex gap-8 my-10 text-center lg:text-start flex-wrap lg:flex-nowrap">
        <div>
          <div className="flex lg:block justify-center items-center">
            <BiSpa className="text-primary text-5xl " />
          </div>
          <h4 className="text-2xl font-bold text-primary my-3">Aspiration</h4>
          <p className="text-sm text-secondary">
            Transform your lifestyle through total relaxation and disconnection
            in an ideal wellness environment. Recharge and rejuvenate.
          </p>
        </div>
        <div>
          <div className="flex lg:block justify-center items-center">
            <FaHands className="text-primary text-5xl " />
          </div>
          <h4 className="text-2xl font-bold text-primary my-3">Beauty</h4>
          <p className="text-sm text-secondary">
            Beauty renewal through refreshment, hydration, and rejuvenation.
            Emerge with a new style, a new life, and a new you.
          </p>
        </div>
        <div>
          <div className="flex lg:block justify-center items-center">
            <FaHandsWash className="text-primary text-5xl " />
          </div>
          <h4 className="text-2xl font-bold text-primary my-3">Touch</h4>
          <p className="text-sm text-secondary">
            Savor every moment of relaxation from head to toe. Indulge in peace,
            comfort, and rejuvenation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperticesArea;
