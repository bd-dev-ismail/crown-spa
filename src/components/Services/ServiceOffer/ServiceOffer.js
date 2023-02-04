import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import bg from "../../../assets/services-offer-cta-img-bg.jpg";

const ServiceOffer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className="h-[32rem] flex justify-center items-center"
    >
      <div className="text-white text-center px-4 lg:px-0">
        <h5 className="uppercase font-bold text-sm ">Special Offer</h5>
        <h3 className="text-4xl font-bold my-6">20% off for New Visitors. </h3>
        <p>
          Crown Spa & Salon is a weekend getaway for you and your loved ones
          nestledright in the middle of our <br /> bustling stressed-out city of
          Hyderabad, Banjara hills.For our first-time visitors, we offer a great{" "}
          <br /> 20% off deal on spa and salon services. This lets you enjoy
          luxurious spa and salon services while staying within your budget.
        </p>
        <div className="mt-5 text-white">
          <button
            className="btn btn-primary border-white bg-transparent text-white
          "
          style={{color: "#fff !important"}}
          >
            Book An Appointment{" "}
            <FaLongArrowAltRight className="ml-3 text-white" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffer;
